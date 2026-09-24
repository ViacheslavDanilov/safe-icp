import LoopVideo from '../LoopVideo';

export default function SlideContrast() {
  return (
    <section className="slide slide-contrast" aria-labelledby="contrast-title">
      <div className="slide-content contrast-layout">
        <div className="contrast-header">
          <p className="hero-meta animate-in stagger-1">Clinical Contrast</p>

          <h2 className="slide-title animate-in stagger-2" id="contrast-title">
            The gold standard goes in
            <span className="slide-title-accent">The safer vision stays outside</span>
          </h2>
        </div>

        <div
          role="group"
          className="contrast-board animate-in stagger-3"
          aria-label="Comparison between invasive and non-invasive monitoring"
        >
          <figure className="card lift contrast-card">
            <div className="contrast-image-frame">
              <LoopVideo
                className="contrast-image contrast-image-invasive"
                src="/slide-contrast/measurement-invasive-loop.mp4"
                poster="/slide-contrast/measurement-invasive.webp"
              />
            </div>
            <figcaption className="contrast-card-copy">
              <p className="label">Gold Standard</p>
              <h3 className="card-title">Invasive intracranial sensor placement</h3>
              <p className="contrast-card-desc">
                Direct ICP sensing is clinically trusted, but surgical access makes the workflow
                resource-heavy, infection-prone, and unsuitable for continuous or broad monitoring.
              </p>
            </figcaption>
          </figure>

          <figure className="card lift contrast-card">
            <div className="contrast-image-frame">
              <LoopVideo
                className="contrast-image contrast-image-noninvasive"
                src="/slide-contrast/measurement-noninvasive-loop.mp4"
                poster="/slide-contrast/measurement-noninvasive.webp"
              />
            </div>
            <figcaption className="contrast-card-copy">
              <p className="label">SafeICP Direction</p>
              <h3 className="card-title">External optical sensing at the bedside</h3>
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
