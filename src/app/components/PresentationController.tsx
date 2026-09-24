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

// Videos and the address follow the slide a scroll stops on, not every slide it passes:
// a jump from slide 1 to 20 would otherwise buffer every clip and flood the history API.
const SETTLE_MS = 250;

// Presenter zoom (the - and + keys), remembered across reloads. Browser zoom cannot do
// this job above 1080p, where the root font size follows the screen.
const SCALE_KEY = 'safeicp-deck-scale';
const SCALE_MIN = 0.75;
const SCALE_MAX = 1.25;
const SCALE_STEP = 0.05;

function setDeckScale(value: number) {
  const scale = Math.min(SCALE_MAX, Math.max(SCALE_MIN, Math.round(value * 100) / 100));
  document.documentElement.style.setProperty('--deck-scale', String(scale));
  try {
    localStorage.setItem(SCALE_KEY, String(scale));
  } catch {
    // Storage can be blocked (private mode); the scale then lasts until reload.
  }
}

function getDeckScale() {
  return parseFloat(document.documentElement.style.getPropertyValue('--deck-scale')) || 1;
}

// Must match the flow-mode media query in responsive.css.
const FLOW_MODE_QUERY = '(max-width: 1024px), (max-height: 700px)';

/** The slide number in the address (/#7), or null. Client only. */
function slideFromHash(total: number) {
  const number = Number(/^#(\d+)$/.exec(window.location.hash)?.[1]);
  return Number.isInteger(number) && number >= 1 && number <= total ? number : null;
}

/**
 * One clicker step on the scrolling page: within a slide taller than the screen move by
 * most of a screen, otherwise go to the neighbouring slide (its bottom when going back
 * into a tall one, so nothing is skipped).
 */
function pageThroughFlow(slides: NodeListOf<HTMLElement>, direction: 1 | -1) {
  const screen = window.innerHeight;
  const step = screen * 0.85;
  // Overhang smaller than this is the slide's own padding, not content worth a press.
  const slack = screen * 0.1;
  // Read the slide under the middle of the screen now; the observer lags mid-scroll.
  const boxes = Array.from(slides, (slide) => slide.getBoundingClientRect());
  const current = boxes.findIndex((b) => b.top <= screen / 2 && b.bottom >= screen / 2);
  const box = boxes[current];
  if (!box) return;

  if (direction === 1 && box.bottom > screen + slack) {
    window.scrollBy({ top: Math.min(step, box.bottom - screen), behavior: 'smooth' });
  } else if (direction === -1 && box.top < -slack) {
    window.scrollBy({ top: -Math.min(step, -box.top), behavior: 'smooth' });
  } else {
    const target = slides[current + direction];
    if (!target) return;
    const { top, height } = target.getBoundingClientRect();
    const offset = direction === -1 && height > screen + slack ? top + height - screen : top;
    window.scrollBy({ top: offset, behavior: 'smooth' });
  }
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
  const [settledSlide, setSettledSlide] = useState(currentSlide);
  useEffect(() => {
    const id = window.setTimeout(() => setSettledSlide(currentSlide), SETTLE_MS);
    return () => window.clearTimeout(id);
  }, [currentSlide]);

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

  // Before the deep link below, so the jump lands on the deck at its final size.
  useEffect(() => {
    let saved = 1;
    try {
      saved = Number(localStorage.getItem(SCALE_KEY)) || 1;
    } catch {
      // Storage blocked: start at 100%.
    }
    if (saved !== 1) setDeckScale(saved);
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

  useEffect(() => {
    const hash = settledSlide === 1 ? '' : `#${settledSlide}`;
    if (window.location.hash === hash) return;
    const { pathname, search } = window.location;
    try {
      window.history.replaceState(null, '', hash || pathname + search);
    } catch {
      // Safari throws after too many history calls in a short time; the address can lag.
    }
  }, [settledSlide]);

  // Switching between snap and flow mode (leaving full screen on a short laptop, a
  // projector changing resolution) swaps the scroller from the deck to the page, which
  // starts at the top. Jump back to the slide that was current before the switch.
  const currentRef = useRef(currentSlide);
  useEffect(() => {
    currentRef.current = currentSlide;
  }, [currentSlide]);
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const query = window.matchMedia(FLOW_MODE_QUERY);
    const reanchor = () => {
      root
        .querySelectorAll<HTMLElement>('.slide')
        [currentRef.current - 1]?.scrollIntoView({ behavior: 'instant' });
    };
    query.addEventListener('change', reanchor);
    return () => query.removeEventListener('change', reanchor);
  }, []);

  // Play only the current slide's videos, give the neighbours their posters and buffer
  // them, pause the rest. Clips start with preload="none" and no poster, so the deck
  // does not download media for slides far from the current one.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    root.querySelectorAll<HTMLElement>('.slide').forEach((slide, index) => {
      const distance = Math.abs(index - (settledSlide - 1));
      slide.querySelectorAll<HTMLVideoElement>('video[data-loop-video]').forEach((video) => {
        if (distance <= 1 && !video.poster && video.dataset.poster) {
          video.poster = video.dataset.poster;
        }
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
  }, [settledSlide]);

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

      // Flow mode (tablets, phones, short windows): the page scrolls, not the deck, and a
      // slide can be taller than the screen.
      const flow = window.matchMedia(FLOW_MODE_QUERY).matches;

      // The flow layout keeps the browser's own size (responsive.css), where browser zoom
      // works, so the presenter zoom is for snap mode only.
      if (!flow) {
        if (e.key === '-' || e.key === '_') return setDeckScale(getDeckScale() - SCALE_STEP);
        if (e.key === '=' || e.key === '+') return setDeckScale(getDeckScale() + SCALE_STEP);
        if (e.key === '0') return setDeckScale(1);
      }

      const slides = root.querySelectorAll<HTMLElement>('.slide');
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

      // Clicker keys page through the flow and never stop between slides; the up/down
      // arrows, Home and End keep native scrolling.
      if (flow) {
        if (!(isNext || isPrev) || e.key === 'ArrowDown' || e.key === 'ArrowUp') return;
        e.preventDefault();
        if (!e.repeat) pageThroughFlow(slides, isNext ? 1 : -1);
        return;
      }

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
