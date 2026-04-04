export default function SlideContrast() {
  return (
    <section className="slide slide-contrast slide-alt" aria-labelledby="contrast-title">
      <div className="slide-content contrast-layout">
        <div className="contrast-header">
          <p className="hero-meta animate-in stagger-1">Clinical Contrast</p>

          <h2 className="contrast-title animate-in stagger-2" id="contrast-title">
            The gold standard goes in
            <span className="contrast-title-accent">The safer vision stays outside</span>
          </h2>
        </div>

        <div
          className="contrast-board animate-in stagger-3"
          aria-label="Comparison between invasive and non-invasive monitoring"
        >
          <figure className="contrast-card contrast-card-invasive">
            <div className="contrast-image-frame">
              <video
                className="contrast-image contrast-image-invasive"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/slide-contrast/measurement-invasive.jpg"
              >
                <source src="/slide-contrast/measurement-invasive.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="contrast-card-copy">
              <p className="contrast-card-label">Gold Standard</p>
              <h3>Invasive intracranial sensor placement</h3>
              <p className="contrast-card-desc">
                Direct ICP sensing is clinically trusted because it measures from inside the skull,
                but that same access makes the workflow invasive, resource-heavy, and unsuitable for
                many monitoring scenarios.
              </p>
            </figcaption>
          </figure>

          <figure className="contrast-card contrast-card-noninvasive">
            <div className="contrast-image-frame">
              <video
                className="contrast-image contrast-image-noninvasive"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/slide-contrast/measurement-noninvasive.jpg"
              >
                <source src="/slide-contrast/measurement-noninvasive.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="contrast-card-copy">
              <p className="contrast-card-label">SafeICP Direction</p>
              <h3>External optical sensing at the bedside</h3>
              <p className="contrast-card-desc">
                SafeICP reframes the measurement problem: keep the signal outside the skull, at the
                bedside, and recover ICP-relevant information through optical sensing plus machine
                learning.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
