import Image from 'next/image';

export default function SlideConclusion() {
  return (
    <section className="slide slide-conclusion" aria-labelledby="conclusion-title">
      <div className="slide-content conclusion-layout">
        <div className="conclusion-copy">
          <p className="hero-meta animate-in stagger-1">Conclusion</p>

          <h2 className="conclusion-title animate-in stagger-2" id="conclusion-title">
            Accuracy is now a matter of
            <span className="conclusion-title-accent">clinical refinement, not feasibility</span>
          </h2>

          <p className="conclusion-lead animate-in stagger-3">
            SafeICP already produces error levels that are close enough to clinical benchmarks to
            focus the next phase on generalization, cohort breadth, and stability on unseen data.
          </p>

          <div className="conclusion-takeaway animate-in stagger-4">
            <p className="conclusion-takeaway-label">Where the work shifts now</p>
            <p className="conclusion-takeaway-copy">
              The sensing stack is credible. The remaining gap is reducing the validation-to-test
              spread and proving robustness across broader patient conditions.
            </p>
          </div>
        </div>

        <div className="conclusion-board" aria-label="Clinical benchmark and model performance">
          <article className="conclusion-panel animate-in stagger-4">
            <div className="conclusion-panel-head">
              <div>
                <p className="conclusion-panel-kicker">Reference standard</p>
                <h3 className="conclusion-panel-title">WHO invasive ICP thresholds</h3>
              </div>

              <div className="conclusion-panel-icon-frame">
                <Image
                  src="/slide-conclusion/who-logo.png"
                  alt="WHO logo for medical standards"
                  width={84}
                  height={84}
                  className="conclusion-panel-icon"
                />
              </div>
            </div>

            <div className="conclusion-metrics">
              <div className="conclusion-metric-row">
                <span className="conclusion-metric-label">0–20 mmHg</span>
                <span className="conclusion-metric-value">±2 mmHg</span>
              </div>
              <div className="conclusion-metric-row">
                <span className="conclusion-metric-label">&gt;20 mmHg</span>
                <span className="conclusion-metric-value">±10%</span>
              </div>
            </div>
          </article>

          <article className="conclusion-panel conclusion-panel-error animate-in stagger-5">
            <div className="conclusion-panel-head">
              <div>
                <p className="conclusion-panel-kicker">Observed performance</p>
                <h3 className="conclusion-panel-title">Model error on held data</h3>
              </div>

              <div className="conclusion-panel-icon-frame">
                <Image
                  src="/slide-conclusion/network.png"
                  alt="Neural network icon for machine learning error"
                  width={84}
                  height={84}
                  className="conclusion-panel-icon"
                />
              </div>
            </div>

            <div className="conclusion-metrics">
              <div className="conclusion-metric-row">
                <span className="conclusion-metric-label">Validation</span>
                <span className="conclusion-metric-value">2.6 mmHg</span>
              </div>
              <div className="conclusion-metric-row">
                <span className="conclusion-metric-label">Test</span>
                <span className="conclusion-metric-value">5.3 mmHg</span>
              </div>
            </div>
          </article>

          <div className="conclusion-summary animate-in stagger-6">
            <p className="conclusion-summary-label">Interpretation</p>
            <p className="conclusion-summary-copy">
              The result is strongest on validation and still competitive on test, which makes the
              next milestone less about inventing a new approach and more about tightening
              generalization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
