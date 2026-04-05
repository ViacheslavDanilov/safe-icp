export default function SlideFuture() {
  return (
    <section className="slide slide-future" aria-labelledby="future-title">
      <div className="slide-content future-layout">
        <div className="future-copy">
          <p className="hero-meta animate-in stagger-1">Impact And Next Steps</p>

          <h2 className="future-title animate-in stagger-2" id="future-title">
            SafeICP makes non-invasive ICP monitoring
            <span className="future-title-accent">a realistic clinical path</span>
          </h2>

          <p className="future-lead animate-in stagger-3">
            The project already established the hard foundations: working bedside prototypes,
            synchronized optical and invasive datasets, clinically competitive accuracy, and a
            multi-center collaboration path. The next gains are now less about invention and more
            about scaling, calibration, and translation.
          </p>

          <div className="future-anchor animate-in stagger-4">
            <p className="future-anchor-label">The pivot point</p>
            <p className="future-anchor-copy">
              The question is no longer whether optical ICP estimation is worth taking seriously. It
              is how fast the field can turn this foundation into a safer monitoring option.
            </p>
          </div>

          <div className="future-tag-strip animate-in stagger-5" aria-label="Core impact tags">
            <span>Bedside prototypes</span>
            <span>Multi-center expansion</span>
            <span>Path to 3 mmHg target</span>
          </div>
        </div>

        <div className="future-board" aria-label="Impact and roadmap">
          <div className="future-impact-list" aria-label="Impact domains">
            <div className="future-impact-row animate-in stagger-5">
              <p className="future-impact-type">Scientific</p>
              <p className="future-impact-desc">
                Optical waveforms carry ICP-relevant information and support data-driven estimation.
              </p>
            </div>
            <div className="future-impact-row animate-in stagger-6">
              <p className="future-impact-type">Clinical</p>
              <p className="future-impact-desc">
                Bedside, repeatable monitoring becomes plausible beyond only invasive settings.
              </p>
            </div>
            <div className="future-impact-row animate-in stagger-7">
              <p className="future-impact-type">Translation</p>
              <p className="future-impact-desc">
                Prototypes, hospital partnerships, and validated workflows already exist for the
                next phase.
              </p>
            </div>
          </div>

          <div className="future-roadmap animate-in stagger-7">
            <p className="future-roadmap-label">Next-step roadmap</p>

            <div className="future-roadmap-track" aria-hidden="true">
              <span />
            </div>

            <div className="future-roadmap-steps">
              <article className="future-step future-step-active">
                <p className="future-step-index">01</p>
                <h3>Broaden the data</h3>
                <p>Expand high-ICP and multi-hospital cohorts.</p>
              </article>

              <article className="future-step">
                <p className="future-step-index">02</p>
                <h3>Improve confidence</h3>
                <p>Calibrate uncertainty and strengthen elevated-range behavior.</p>
              </article>

              <article className="future-step">
                <p className="future-step-index">03</p>
                <h3>Refine the product</h3>
                <p>Sharpen use cases, anatomical corrections, and workflow fit.</p>
              </article>

              <article className="future-step">
                <p className="future-step-index">04</p>
                <h3>Translate clinically</h3>
                <p>Fund regulatory steps and clinical-trial readiness.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
