export default function SlideHero() {
  return (
    <section className="slide slide-hero slide-alt" aria-labelledby="page-title">
      <div className="slide-content">
        <div className="hero-copy">
          <p className="hero-meta animate-in stagger-1">SafeICP</p>

          <h1 className="hero-title animate-in stagger-2" id="page-title">
            A Safe Window Into
            <span className="hero-title-accent">Brain Pressure</span>
          </h1>

          <p className="hero-subtitle animate-in stagger-3">
            Non-invasive intracranial pressure estimation through optical sensing and machine
            learning.
          </p>
        </div>

        <figure
          className="hero-visual animate-in stagger-4"
          aria-label="Optical forehead probe concept visual for SafeICP sensing"
        >
          <div className="hero-visual-frame">
            <video
              className="hero-image"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/title-hero-visual.jpg"
            >
              <source src="/images/title-hero-visual.mp4" type="video/mp4" />
            </video>

            <figcaption className="hero-legend">
              <span>Optical</span>
              <span>External</span>
              <span>Non-invasive</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
