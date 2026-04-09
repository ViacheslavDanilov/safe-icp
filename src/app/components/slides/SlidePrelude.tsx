export default function SlidePrelude() {
  return (
    <section className="slide slide-prelude" aria-labelledby="prelude-title">
      <div className="slide-content prelude-layout">
        <div className="prelude-copy">
          <p className="hero-meta animate-in stagger-1">Presented By</p>

          <h1 className="prelude-title animate-in stagger-2" id="prelude-title">
            Viacheslav Danilov, PhD
          </h1>

          <p className="prelude-role animate-in stagger-3">ML/AI Engineer and Research Scientist</p>

          <p className="prelude-bio animate-in stagger-4">
            Working at the intersection of AI, optical sensing, and translational health technology
          </p>

          <div className="prelude-strip animate-in stagger-5" aria-label="Speaker domains">
            <span>AI Systems</span>
            <span>Optical Sensing</span>
            <span>Clinical ML</span>
          </div>
        </div>

        <figure className="prelude-visual animate-in stagger-4" aria-hidden="true">
          <div className="prelude-visual-shell">
            <div className="prelude-video-frame">
              <video
                className="prelude-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/slide-prelude/presenter-hero-poster.webp"
                aria-hidden="true"
              >
                <source src="/slide-prelude/presenter-hero-video.mp4" type="video/mp4" />
              </video>

              <figcaption className="prelude-legend">
                <span>Pompeu Fabra University</span>
                <span>Barcelona, Spain</span>
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
