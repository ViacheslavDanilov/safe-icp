interface LoopVideoProps {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
}

// Muted looping clip. PresentationController sets the poster and buffers the clip when
// its slide is current or next to it, and plays it only on the current slide, so a clip
// far from the current slide costs nothing.
export default function LoopVideo({ src, poster, className, label }: LoopVideoProps) {
  return (
    <video
      className={className}
      data-loop-video
      muted
      loop
      playsInline
      preload="none"
      data-poster={poster}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
