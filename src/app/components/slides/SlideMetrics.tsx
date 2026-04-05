import Image from 'next/image';

export default function SlideMetrics() {
  return (
    <section className="slide slide-metrics" aria-labelledby="metrics-title">
      <div className="slide-content metrics-layout">
        <div className="metrics-copy">
          <p className="hero-meta animate-in stagger-1">Quantitative Evidence / Results</p>

          <h2 className="metrics-title animate-in stagger-2" id="metrics-title">
            Competitive error
            <span className="metrics-title-accent">Cautious confidence</span>
          </h2>

          <p className="metrics-lead animate-in stagger-3">
            Across the main model comparison, SafeICP reaches clinically competitive error levels
            around 5.3 to 6.0 mmHg MAE. The stronger caution is uncertainty: the prediction
            intervals stay too narrow and miss the true ICP more often than they should.
          </p>

          <div
            className="metrics-kpi-strip animate-in stagger-4"
            aria-label="Key quantitative takeaways"
          >
            <article className="metrics-kpi metrics-kpi-cool">
              <p className="metrics-kpi-label">Best overall MAE</p>
              <h3>5.3 mmHg</h3>
              <p>mWDN, right hemisphere</p>
            </article>

            <article className="metrics-kpi metrics-kpi-warm">
              <p className="metrics-kpi-label">Low-error concentration</p>
              <h3>52%</h3>
              <p>mWDN predictions fall within 0–4 mmHg</p>
            </article>

            <article className="metrics-kpi metrics-kpi-neutral">
              <p className="metrics-kpi-label">Calibration warning</p>
              <h3>PICP 8–37%</h3>
              <p>Far below the nominal 95% interval target</p>
            </article>
          </div>

          <div className="metrics-board animate-in stagger-5" aria-label="Model comparison summary">
            <div className="metrics-board-head">
              <span>Model</span>
              <span>MAE L</span>
              <span>MAE R</span>
              <span>Reading</span>
            </div>

            <article className="metrics-row">
              <h3>InceptionTime</h3>
              <p>6.0</p>
              <p>5.4</p>
              <span>Strong temporal features, competitive accuracy</span>
            </article>

            <article className="metrics-row metrics-row-best">
              <h3>mWDN</h3>
              <p>6.3</p>
              <p>5.3</p>
              <span>Best overall MAE and densest low-error zone</span>
            </article>

            <article className="metrics-row">
              <h3>TCN</h3>
              <p>7.1</p>
              <p>5.6</p>
              <span>Useful comparator, but weaker accuracy</span>
            </article>
          </div>

        </div>

        <div className="metrics-visual animate-in stagger-5">
          <figure className="metrics-figure">
            <div className="metrics-figure-frame">
<Image
                className="metrics-image"
                src="/slide-metrics/error-distribution-mwdn.png"
                alt="mWDN error distribution histogram and cumulative accuracy curve from the SafeICP report"
                width={2800}
                height={2800}
              />
            </div>

            <div className="metrics-figure-callouts">
              <div className="metrics-figure-callout">
                <strong>Why show mWDN here</strong>
                <span>
                  It has the highest share of low-error predictions in the report comparison
                </span>
              </div>

              <div className="metrics-figure-callout">
                <strong>52% within 0–4 mmHg</strong>
                <span>And 100% within 0–14 mmHg in the reported distribution</span>
              </div>
            </div>
          </figure>

          <div className="metric-chip-strip" aria-label="Metric definitions">
            <div className="metric-chip">
              <p className="metric-chip-label">MAE</p>
              <p>Typical absolute ICP error in mmHg.</p>
            </div>
            <div className="metric-chip">
              <p className="metric-chip-label">PICP</p>
              <p>How often the true ICP falls inside the predicted interval.</p>
            </div>
            <div className="metric-chip">
              <p className="metric-chip-label">MPIW</p>
              <p>How wide that uncertainty band is on average.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
