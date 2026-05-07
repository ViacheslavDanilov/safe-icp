'use client';

import { useEffect, useRef, useState } from 'react';

type LightboxImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

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
      setImage({
        src: img.currentSrc || img.src,
        alt: img.alt ?? '',
        width: img.naturalWidth || undefined,
        height: img.naturalHeight || undefined,
      });
      return true;
    };

    const onClick = (event: MouseEvent) => {
      if (openFromTarget(event.target)) event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      const active = document.activeElement;
      if (!active?.classList.contains('zoomable')) return;
      if (openFromTarget(active)) event.preventDefault();
    };

    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

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

  const onBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    const target = event.target as HTMLElement;
    if (!target.closest('.image-lightbox-img') && !target.closest('.image-lightbox-close')) {
      setImage(null);
    }
  };

  return (
    <dialog ref={dialogRef} className="image-lightbox" onClick={onBackdropClick}>
      {image && (
        <div className="image-lightbox-frame">
          <button
            type="button"
            className="image-lightbox-close"
            aria-label="Close image"
            onClick={() => setImage(null)}
          >
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
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="image-lightbox-img"
          />
        </div>
      )}
    </dialog>
  );
}
