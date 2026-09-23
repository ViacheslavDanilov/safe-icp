interface LoopVideoProps {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
}

// Muted looping clip. Nothing downloads until PresentationController plays it,
// which happens only when its slide is near the viewport.
export default function LoopVideo({ src, poster, className, label }: LoopVideoProps) {
  return (
    <video
      className={className}
      data-loop-video
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
