'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';
import ImageLightbox from './ImageLightbox';

interface PresentationControllerProps {
  children: ReactNode;
  totalSlides: number;
}

const subscribe = () => () => {};

export default function PresentationController({
  children,
  totalSlides,
}: PresentationControllerProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const hydrated = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  // Reveal each slide on first view and track which slide is current. Both observers
  // use margins rather than a visible-ratio threshold, so a slide taller than the
  // screen (flow mode) still reveals and still counts as current.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const slides = Array.from(deck.querySelectorAll<HTMLElement>('.slide'));
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

  // Play only the current slide's videos, buffer the neighbours, pause the rest.
  // Videos start with preload="none", so the deck no longer downloads every clip on load.
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    deck.querySelectorAll<HTMLElement>('.slide').forEach((slide, index) => {
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

  // Keyboard navigation
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Leave browser shortcuts such as Cmd+Left (Back) alone.
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      // The lightbox is modal; keys must not move the deck behind it.
      if (document.querySelector('dialog[open]')) return;

      const slides = deck.querySelectorAll('.slide');
      const currentIndex = currentSlide - 1;

      // Presentation clickers send PageDown/PageUp; Space and Shift+Space mirror them.
      const isNext =
        ['ArrowDown', 'ArrowRight', 'PageDown'].includes(e.key) || (e.key === ' ' && !e.shiftKey);
      const isPrev =
        ['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key) || (e.key === ' ' && e.shiftKey);

      if (isNext) {
        e.preventDefault();
        const next = slides[currentIndex + 1];
        if (next) {
          next.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (isPrev) {
        e.preventDefault();
        const prev = slides[currentIndex - 1];
        if (prev) {
          prev.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (e.key === 'Home') {
        e.preventDefault();
        const first = slides[0];
        if (first) {
          first.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (e.key === 'End') {
        e.preventDefault();
        const last = slides[slides.length - 1];
        if (last) {
          last.scrollIntoView({ behavior: 'smooth' });
        }
      }
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
      <div ref={deckRef}>{children}</div>
      <ImageLightbox />
    </>
  );
}
