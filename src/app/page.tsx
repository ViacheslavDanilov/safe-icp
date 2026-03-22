export default function Home() {
  return (
    <main className="slide presentation-shell">
      <div className="hero-progress" aria-hidden="true">
        <span className="hero-progress-label">Slide</span>
        <span className="hero-progress-value">01 / 10</span>
      </div>

      <section className="slide-content" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="hero-meta">Seminar Opening / SafeICP</p>

          <h1 className="hero-title" id="page-title">
            A Safe Window Into
            <span className="hero-title-accent">Brain Pressure</span>
          </h1>

          <p className="hero-subtitle">
            Non-invasive intracranial pressure estimation through optical sensing and machine
            learning.
          </p>

          <p className="hero-tagline">A talk-first site about turning light into ICP insight.</p>
        </div>

        <figure
          className="hero-visual"
          aria-label="Abstract optical visualization of SafeICP sensing"
        >
          <div className="hero-visual-frame">
            <div className="optical-core">
              <div className="signal-pulse" />
            </div>

            <figcaption className="hero-legend">
              <span>Light</span>
              <span>Flow</span>
              <span>Pressure</span>
            </figcaption>
          </div>
        </figure>
      </section>
    </main>
  );
}
