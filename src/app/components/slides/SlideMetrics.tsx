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
            SafeICP reaches competitive MAE, but its uncertainty remains under-calibrated.
          </p>

          <div
            className="metrics-kpi-strip animate-in stagger-4"
            aria-label="Key quantitative takeaways"
          >
            <article className="metrics-kpi metrics-kpi-cool">
              <p className="metrics-kpi-label">Best overall MAE</p>
              <h3>5.3 mmHg</h3>
              <p>mWDN on the right hemisphere</p>
            </article>

            <article className="metrics-kpi metrics-kpi-warm">
              <p className="metrics-kpi-label">Low-error zone</p>
              <h3>52%</h3>
              <p>Predictions within 0–4 mmHg</p>
            </article>

            <article className="metrics-kpi metrics-kpi-neutral">
              <p className="metrics-kpi-label">PICP coverage</p>
              <h3>37%</h3>
              <p>Too low for trustworthy confidence</p>
            </article>
          </div>

          <div className="metrics-board animate-in stagger-5" aria-label="Model comparison summary">
            <div className="metrics-board-head">
              <span>Model</span>
              <span>MAE Left</span>
              <span>MAE Right</span>
              <span>Read</span>
            </div>

            <article className="metrics-row">
              <h3>InceptionTime</h3>
              <p>6.0</p>
              <p>5.4</p>
              <span>Competitive</span>
            </article>

            <article className="metrics-row metrics-row-best">
              <h3>mWDN</h3>
              <p>6.3</p>
              <p>5.3</p>
              <span>Strongest overall</span>
            </article>

            <article className="metrics-row">
              <h3>TCN</h3>
              <p>7.1</p>
              <p>5.6</p>
              <span>Useful baseline</span>
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

            <div className="metrics-figure-summary" aria-label="Chart takeaway">
              <p className="metrics-figure-summary-label">Read of the chart</p>
              <div className="metrics-figure-summary-strip">
                <span>Dense low-error region</span>
                <span>52% within 0–4 mmHg</span>
                <span>Coverage still lags</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
