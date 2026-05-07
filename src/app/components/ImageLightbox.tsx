'use client';

import { useEffect, useRef, useState } from 'react';

type LightboxImage = {
  src: string;
  alt: string;
};

export default function ImageLightbox() {
  const [image, setImage] = useState<LightboxImage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const trigger = target.closest<HTMLElement>('.zoomable');
      if (!trigger) return;
      const img =
        trigger.tagName === 'IMG' ? (trigger as HTMLImageElement) : trigger.querySelector('img');
      if (!img) return;
      event.preventDefault();
      setImage({
        src: img.currentSrc || img.src,
        alt: img.alt ?? '',
      });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
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
          <img src={image.src} alt={image.alt} className="image-lightbox-img" />
        </div>
      )}
    </dialog>
  );
}
