import LoopVideo from '../LoopVideo';

export default function SlideHero() {
  return (
    <section className="slide slide-hero" aria-labelledby="page-title">
      <div className="slide-content">
        <div className="slide-copy hero-copy">
          <p className="hero-meta animate-in stagger-1">SafeICP</p>

          <h1 className="slide-title slide-title-lg animate-in stagger-2" id="page-title">
            A Safe Window Into
            <span className="slide-title-accent">Brain Pressure</span>
          </h1>

          <p className="slide-lead slide-lead-lg hero-subtitle animate-in stagger-3">
            Non-invasive intracranial pressure estimation through optical sensing and machine
            learning.
          </p>
        </div>

        <figure
          className="hero-visual animate-in stagger-4"
          aria-label="Optical forehead probe concept visual for SafeICP sensing"
        >
          <div className="hero-visual-frame">
            <LoopVideo
              className="hero-image"
              src="/slide-hero/title-hero-visual-loop.mp4"
              poster="/slide-hero/title-hero-visual.webp"
            />

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
