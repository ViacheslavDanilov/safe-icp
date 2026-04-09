'use client';

import { useEffect, useRef, useState, useSyncExternalStore, type ReactNode } from 'react';

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

  // IntersectionObserver: mark slides as visited on first view
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const slides = deck.querySelectorAll<HTMLElement>('.slide');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const slide = entry.target as HTMLElement;

            // Mark as visited (first-visit animation trigger)
            if (!slide.classList.contains('visited')) {
              // Add is-visible to animate-in and cascade-reveal children
              slide.querySelectorAll('.animate-in, .cascade-reveal').forEach((el) => {
                el.classList.add('is-visible');
              });

              // Mark as visited after animations complete
              const hasCascade = slide.querySelector('.cascade-reveal');
              setTimeout(
                () => {
                  slide.classList.add('visited');
                },
                hasCascade ? 3500 : 2000,
              );
            }

            // Update current slide index
            const index = Array.from(slides).indexOf(slide);
            setCurrentSlide(index + 1);
          }
        });
      },
      { threshold: 0.3 },
    );

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const deck = deckRef.current;
    if (!deck) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const slides = deck.querySelectorAll('.slide');
      const currentIndex = currentSlide - 1;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const next = slides[currentIndex + 1];
        if (next) {
          next.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prev = slides[currentIndex - 1];
        if (prev) {
          prev.scrollIntoView({ behavior: 'smooth' });
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
          <div className="progress-bar" style={{ width: `${progressWidth}%` }} />
          <div className="slide-counter" aria-live="polite" aria-atomic="true">
            {currentSlide} / {totalSlides}
          </div>
        </>
      )}
      <div ref={deckRef}>{children}</div>
    </>
  );
}
