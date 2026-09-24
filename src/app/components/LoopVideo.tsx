interface LoopVideoProps {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
  /** Intrinsic size, so the box keeps its shape before the poster loads. */
  width?: number;
  height?: number;
}

// Muted looping clip. PresentationController sets the poster and buffers the clip when
// its slide is current or next to it, and plays it only on the current slide, so a clip
// far from the current slide costs nothing.
export default function LoopVideo({
  src,
  poster,
  className,
  label,
  width,
  height,
}: LoopVideoProps) {
  return (
    <video
      className={className}
      width={width}
      height={height}
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
