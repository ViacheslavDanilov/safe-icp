export default function Home() {
  return (
    <main className="deck presentation-shell">
      <section className="slide slide-hero" aria-labelledby="page-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">01 / 10</span>
        </div>

        <div className="slide-content">
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
        </div>
      </section>

      <section className="slide slide-problem" aria-labelledby="problem-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">02 / 10</span>
        </div>

        <div className="slide-content problem-layout">
          <div className="problem-copy">
            <p className="hero-meta">Clinical Stakes / Why ICP Matters</p>

            <h2 className="problem-title" id="problem-title">
              The pressure matters.
              <span className="problem-title-accent">The measurement still hurts.</span>
            </h2>

            <p className="problem-lead">
              Intracranial pressure is a critical brain-health signal, but the gold standard still
              relies on invasive monitoring through a surgically placed sensor.
            </p>

            <p className="problem-support">
              That creates a hard clinical trade-off: the patients who most need visibility are
              often the same patients for whom infection, bleeding, tissue damage, or prolonged
              monitoring risk matter most.
            </p>

            <div className="problem-conditions" aria-label="Clinical contexts">
              <span>TBI</span>
              <span>Stroke</span>
              <span>Hydrocephalus</span>
              <span>Pediatrics</span>
            </div>
          </div>

          <div className="problem-panel" aria-label="Consequences of invasive ICP monitoring">
            <article className="problem-card">
              <p className="problem-card-index">01</p>
              <h3>Invasive by default</h3>
              <p>
                Direct ICP measurement still begins with intracranial access, not with a bedside
                sensor.
              </p>
            </article>

            <article className="problem-card">
              <p className="problem-card-index">02</p>
              <h3>Risk changes eligibility</h3>
              <p>
                Infection, bleeding, and tissue injury are not abstract side effects. They shape
                who gets monitored and for how long.
              </p>
            </article>

            <article className="problem-card">
              <p className="problem-card-index">03</p>
              <h3>Access becomes selective</h3>
              <p>
                Longitudinal follow-up, lower-acuity settings, and vulnerable populations lose
                access to continuous pressure insight.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
