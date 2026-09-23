import Image from 'next/image';

export default function SlideMetrics() {
  return (
    <section className="slide slide-metrics" aria-labelledby="metrics-title">
      <div className="slide-content metrics-layout">
        <div className="slide-copy metrics-copy">
          <p className="hero-meta animate-in stagger-1">Quantitative Evidence</p>

          <h2 className="slide-title animate-in stagger-2" id="metrics-title">
            Competitive error
            <span className="slide-title-accent">Cautious confidence</span>
          </h2>

          <p className="slide-lead metrics-lead animate-in stagger-3">
            SafeICP reaches competitive MAE, but its uncertainty remains under-calibrated.
          </p>

          <div
            role="group"
            className="metrics-kpi-strip animate-in stagger-4"
            aria-label="Key quantitative takeaways"
          >
            <article className="metrics-kpi metrics-kpi-cool">
              <p className="metrics-kpi-label">Best overall MAE</p>
              <h3>5.3&nbsp;mmHg</h3>
              <p>mWDN on the right hemisphere</p>
            </article>

            <article className="metrics-kpi metrics-kpi-warm">
              <p className="metrics-kpi-label">Low-error zone</p>
              <h3>52%</h3>
              <p>Predictions within 0–4&nbsp;mmHg</p>
            </article>

            <article className="metrics-kpi metrics-kpi-neutral">
              <p className="metrics-kpi-label">PICP coverage</p>
              <h3>37%</h3>
              <p>Too low for trustworthy confidence</p>
            </article>
          </div>

          <div
            className="metrics-board animate-in stagger-5"
            role="table"
            aria-label="Model comparison summary"
          >
            <div className="metrics-board-head" role="row">
              <span role="columnheader">Model</span>
              <span role="columnheader">MAE Left</span>
              <span role="columnheader">MAE Right</span>
              <span role="columnheader">Read</span>
            </div>

            <div className="metrics-row" role="row">
              <span className="metrics-row-model" role="rowheader">
                InceptionTime
              </span>
              <span className="metrics-row-value" role="cell">
                6.0
              </span>
              <span className="metrics-row-value" role="cell">
                5.4
              </span>
              <span className="metrics-row-read" role="cell">
                Competitive
              </span>
            </div>

            <div className="metrics-row metrics-row-best" role="row">
              <span className="metrics-row-model" role="rowheader">
                mWDN
              </span>
              <span className="metrics-row-value" role="cell">
                6.3
              </span>
              <span className="metrics-row-value" role="cell">
                5.3
              </span>
              <span className="metrics-row-read" role="cell">
                Strongest overall
              </span>
            </div>

            <div className="metrics-row" role="row">
              <span className="metrics-row-model" role="rowheader">
                TCN
              </span>
              <span className="metrics-row-value" role="cell">
                7.1
              </span>
              <span className="metrics-row-value" role="cell">
                5.6
              </span>
              <span className="metrics-row-read" role="cell">
                Useful baseline
              </span>
            </div>
          </div>
        </div>

        <div className="metrics-visual animate-in stagger-5">
          <figure className="metrics-figure">
            <div className="metrics-figure-frame zoomable">
              <Image
                className="metrics-image"
                src="/slide-metrics/error-distribution-mwdn.png"
                alt="mWDN error distribution histogram and cumulative accuracy curve from the SafeICP report"
                width={2800}
                height={2800}
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div role="group" className="metrics-figure-summary" aria-label="Chart takeaway">
              <p className="metrics-figure-summary-label">Read of the chart</p>
              <div className="metrics-figure-summary-strip">
                <span>Dense low-error region</span>
                <span>52% within 0–4&nbsp;mmHg</span>
                <span>Coverage still lags</span>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
