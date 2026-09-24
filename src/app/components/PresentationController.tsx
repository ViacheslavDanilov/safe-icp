'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import ImageLightbox from './ImageLightbox';

interface PresentationControllerProps {
  children: ReactNode;
  totalSlides: number;
}

const subscribe = () => () => {};

// A key press within this window of the previous one counts from that press's target.
// It must outlast one smooth scroll between adjacent slides (about 500 ms).
const PENDING_PRESS_MS = 1000;

/** The slide number in the address (/#7), or null. Client only. */
function slideFromHash(total: number) {
  const number = Number(/^#(\d+)$/.exec(window.location.hash)?.[1]);
  return Number.isInteger(number) && number >= 1 && number <= total ? number : null;
}

export default function PresentationController({
  children,
  totalSlides,
}: PresentationControllerProps) {
  // Wraps the slides; the scrolling element in snap mode is the `.deck` inside it.
  const rootRef = useRef<HTMLDivElement>(null);
  // Start from the address so a deep link does not first play and buffer slide 1's
  // videos. The counter is not rendered until hydration, so the server's 1 never shows.
  const [currentSlide, setCurrentSlide] = useState(() =>
    typeof window === 'undefined' ? 1 : (slideFromHash(totalSlides) ?? 1),
  );
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  // Reveal each slide on first view and track which slide is current. Both observers
  // use margins rather than a visible-ratio threshold, so a slide taller than the
  // screen (flow mode) still reveals and still counts as current.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const slides = Array.from(root.querySelectorAll<HTMLElement>('.slide'));
    const timers: number[] = [];

    // Fires once the slide's top edge passes the lower quarter of the screen.
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const slide = entry.target as HTMLElement;
          reveal.unobserve(slide);

          slide.querySelectorAll('.animate-in, .cascade-reveal').forEach((el) => {
            el.classList.add('is-visible');
          });

          // Mark as visited after animations complete, so revisits show no animation
          const hasCascade = slide.querySelector('.cascade-reveal');
          timers.push(
            window.setTimeout(() => slide.classList.add('visited'), hasCascade ? 3500 : 2000),
          );
        });
      },
      { rootMargin: '0px 0px -25% 0px' },
    );

    // The current slide is the one crossing a thin band at the middle of the screen.
    const current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSlide(slides.indexOf(entry.target as HTMLElement) + 1);
          }
        });
      },
      { rootMargin: '-50% 0px -49% 0px' },
    );

    slides.forEach((slide) => {
      reveal.observe(slide);
      current.observe(slide);
    });

    return () => {
      reveal.disconnect();
      current.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  // Deep links: #7 opens slide 7, and the address follows the current slide, so a
  // reload during a talk comes back to the same slide.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const slides = root.querySelectorAll<HTMLElement>('.slide');
    const goToHash = () => {
      const number = slideFromHash(slides.length);
      if (number) slides[number - 1].scrollIntoView({ behavior: 'instant' });
    };

    goToHash();
    window.addEventListener('hashchange', goToHash);
    return () => window.removeEventListener('hashchange', goToHash);
  }, []);

  const hashSynced = useRef(false);
  useEffect(() => {
    // Skip the first run: the address already matches the initial slide.
    if (!hashSynced.current) {
      hashSynced.current = true;
      return;
    }
    const { pathname, search } = window.location;
    window.history.replaceState(
      null,
      '',
      currentSlide === 1 ? pathname + search : `#${currentSlide}`,
    );
  }, [currentSlide]);

  // Play only the current slide's videos, buffer the neighbours, pause the rest.
  // Videos start with preload="none", so the deck no longer downloads every clip on load.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.querySelectorAll<HTMLElement>('.slide').forEach((slide, index) => {
      const distance = Math.abs(index - (currentSlide - 1));
      slide.querySelectorAll<HTMLVideoElement>('video[data-loop-video]').forEach((video) => {
        if (reducedMotion) {
          // No autoplay; informative (labelled) clips can still be started by hand.
          video.controls = video.hasAttribute('aria-label');
          return;
        }
        if (distance === 0) {
          // Autoplay can be refused (e.g. iOS Low Power Mode); the poster stays visible.
          video.play().catch(() => {});
          return;
        }
        video.pause();
        if (distance === 1 && video.preload !== 'auto') video.preload = 'auto';
      });
    });
  }, [currentSlide]);

  // Keyboard navigation. The current slide only updates once a smooth scroll crosses the
  // middle of the screen, so a quick second press counts from the slide still being
  // scrolled to instead of being lost.
  const pendingTarget = useRef<{ index: number; at: number } | null>(null);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Leave browser shortcuts such as Cmd+Left (Back) alone, and keys another handler
      // already used (Space or Enter on a focused figure opens the lightbox).
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey) return;
      // The lightbox is modal; keys must not move the deck behind it.
      if (document.querySelector('dialog[open]')) return;
      // In flow mode (tablets, phones, short windows) the deck is not the scroller and
      // slides can be taller than the screen; native page scrolling reads them fully.
      const deck = root.querySelector<HTMLElement>('.deck');
      if (!deck || deck.scrollHeight <= deck.clientHeight) return;

      const slides = root.querySelectorAll('.slide');
      const pending = pendingTarget.current;
      const currentIndex =
        pending && performance.now() - pending.at < PENDING_PRESS_MS
          ? pending.index
          : currentSlide - 1;
      const goTo = (index: number) => {
        const target = slides[index];
        if (!target) return;
        pendingTarget.current = { index, at: performance.now() };
        target.scrollIntoView({ behavior: 'smooth' });
      };

      // Presentation clickers send PageDown/PageUp; Space and Shift+Space mirror them.
      const isNext =
        ['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey);
      const isPrev =
        ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey);

      let index: number | null = null;
      if (isNext) index = currentIndex + 1;
      else if (isPrev) index = currentIndex - 1;
      else if (e.key === 'Home') index = 0;
      else if (e.key === 'End') index = slides.length - 1;
      if (index === null) return;

      e.preventDefault();
      // A held clicker button auto-repeats like any keyboard key; one press, one slide.
      if (e.repeat) return;
      goTo(index);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const progressWidth = (currentSlide / totalSlides) * 100;

  return (
    <>
      {hydrated && (
        <>
          <div className="progress-bar-track" />
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={currentSlide}
            aria-valuemin={1}
            aria-valuemax={totalSlides}
            aria-label="Presentation progress"
            style={{ width: `${progressWidth}%` }}
          />
          <div className="slide-counter" aria-live="polite" aria-atomic="true">
            <span aria-hidden="true">
              {String(currentSlide).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
            </span>
            <span className="sr-only">
              Slide {currentSlide} of {totalSlides}
            </span>
          </div>
        </>
      )}
      <div ref={rootRef}>{children}</div>
      <ImageLightbox />
    </>
  );
}
