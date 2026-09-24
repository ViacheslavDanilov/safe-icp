'use client';

import { useEffect, useRef, useState } from 'react';

type LightboxImage = {
  /** What is shown now: the inline figure's already loaded source at first. */
  src: string;
  /** The source sized for full view, swapped in once it has loaded. */
  full: string;
  alt: string;
};

/**
 * The inline figure loads a candidate sized for its slot. Full view wants the smallest
 * candidate that covers the screen (the image is fitted inside it), so a 4K display gets
 * the 3840 px file and a phone a light one.
 */
function fullViewSource(img: HTMLImageElement) {
  const candidates = img.srcset
    .split(',')
    .map((entry) => entry.trim().split(/\s+/))
    .filter(([url]) => url)
    .map(([url, descriptor = '1x']) => ({ url, size: parseFloat(descriptor) }))
    .sort((a, b) => a.size - b.size);
  const fallback = img.currentSrc || img.src;
  if (candidates.length === 0) return fallback;
  // x descriptors (fixed-width images) carry no width: take the largest.
  if (!/w$/.test(img.srcset.trim())) return candidates[candidates.length - 1].url;

  const aspect = img.naturalWidth / img.naturalHeight || 1;
  const fitted = Math.min(window.innerWidth, window.innerHeight * aspect);
  const needed = fitted * window.devicePixelRatio;
  return (candidates.find((c) => c.size >= needed) ?? candidates[candidates.length - 1]).url;
}

const CLOSE_KEYS = new Set([
  'PageDown',
  'PageUp',
  'ArrowDown',
  'ArrowUp',
  'ArrowLeft',
  'ArrowRight',
]);

export default function ImageLightbox() {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const triggers = document.querySelectorAll<HTMLElement>('.zoomable');
    triggers.forEach((trigger) => {
      if (!trigger.hasAttribute('tabindex')) trigger.setAttribute('tabindex', '0');
      if (!trigger.hasAttribute('role')) trigger.setAttribute('role', 'button');
      if (!trigger.hasAttribute('aria-label')) {
        const img = trigger.tagName === 'IMG' ? trigger : trigger.querySelector('img');
        const label = img?.getAttribute('alt') || 'image';
        trigger.setAttribute('aria-label', `Open ${label} in full view`);
      }
    });
  }, []);

  useEffect(() => {
    const openFromTarget = (target: EventTarget | null) => {
      const el = target as HTMLElement | null;
      if (!el) return false;
      const trigger = el.closest<HTMLElement>('.zoomable');
      if (!trigger) return false;
      const img =
        trigger.tagName === 'IMG' ? (trigger as HTMLImageElement) : trigger.querySelector('img');
      if (!img) return false;
      const current = img.currentSrc || img.src;
      setImage({ src: current, full: fullViewSource(img), alt: img.alt ?? '' });
      return true;
    };

    const onClick = (event: MouseEvent) => {
      if (openFromTarget(event.target)) event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      // A presenter with only a clicker must be able to get out of full view. Its keys
      // close the lightbox; the next press moves the deck as usual.
      if (dialogRef.current?.open && CLOSE_KEYS.has(event.key)) {
        event.preventDefault();
        setImage(null);
        return;
      }
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const active = document.activeElement;
      if (!active?.classList.contains('zoomable')) return;
      // A figure keeps focus after the lightbox closes, and moving slides by key does not
      // move focus. Only a figure that is on screen may open, or Space on a later slide
      // would reopen an earlier one instead of advancing.
      const { top, bottom } = active.getBoundingClientRect();
      if (bottom <= 0 || top >= window.innerHeight) return;
      if (openFromTarget(active)) event.preventDefault();
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // Show the cached inline image at once, then swap to the sharper one when it arrives,
  // so venue Wi-Fi never leaves the audience looking at an empty frame.
  const pendingFull = image && image.src !== image.full ? image.full : null;
  useEffect(() => {
    if (!pendingFull) return;
    const loader = new Image();
    loader.onload = () =>
      setImage((shown) =>
        shown && shown.full === pendingFull ? { ...shown, src: pendingFull } : shown,
      );
    loader.src = pendingFull;
    return () => {
      loader.onload = null;
    };
  }, [pendingFull]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (image && !dialog.open) {
      dialog.showModal();
    } else if (!image && dialog.open) {
      dialog.close();
    }
  }, [image]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => setImage(null);
    dialog.addEventListener('close', onClose);
    return () => dialog.removeEventListener('close', onClose);
  }, []);

  // Any click closes: the backdrop, the close button, and the image itself
  // (it shows a zoom-out cursor).
  return (
    <dialog ref={dialogRef} className="image-lightbox" onClick={() => setImage(null)}>
      {image && (
        <div className="image-lightbox-frame">
          <button type="button" className="image-lightbox-close" aria-label="Close image">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M5 5l10 10M15 5L5 15"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image.src} alt={image.alt} className="image-lightbox-img" />
        </div>
      )}
    </dialog>
  );
}
