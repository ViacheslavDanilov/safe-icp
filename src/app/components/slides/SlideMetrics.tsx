import Image from 'next/image';

const kpis = [
  {
    label: 'Best overall MAE',
    value: '5.3\u00a0mmHg',
    note: 'mWDN on the right hemisphere',
  },
  { label: 'Low-error zone', value: '52%', note: 'Predictions within 0–4\u00a0mmHg' },
  {
    label: 'PICP coverage',
    value: '37%',
    note: 'Too low for trustworthy confidence',
  },
];

// MAE in mmHg for each hemisphere
const rows = [
  { model: 'InceptionTime', left: '6.0', right: '5.4', read: 'Competitive' },
  { model: 'mWDN', left: '6.3', right: '5.3', read: 'Strongest overall', best: true },
  { model: 'TCN', left: '7.1', right: '5.6', read: 'Useful baseline' },
];

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
            {kpis.map(({ label, value, note }) => (
              <article key={label} className="card lift metrics-kpi">
                <p className="label metrics-kpi-label">{label}</p>
                <h3>{value}</h3>
                <p>{note}</p>
              </article>
            ))}
          </div>

          <div
            className="metrics-board animate-in stagger-5"
            role="table"
            aria-label="Model comparison summary"
            // Scrolls sideways on phones; focusable so the keyboard can scroll it too.
            tabIndex={0}
          >
            <div className="metrics-board-head" role="row">
              <span role="columnheader">Model</span>
              <span role="columnheader">MAE Left</span>
              <span role="columnheader">MAE Right</span>
              <span role="columnheader">Read</span>
            </div>

            {rows.map(({ model, left, right, read, best }) => (
              <div
                key={model}
                className={best ? 'metrics-row metrics-row-best' : 'metrics-row'}
                role="row"
              >
                <span className="metrics-row-model" role="rowheader">
                  {model}
                </span>
                <span className="metrics-row-value" role="cell">
                  {left}
                </span>
                <span className="metrics-row-value" role="cell">
                  {right}
                </span>
                <span className="metrics-row-read" role="cell">
                  {read}
                </span>
              </div>
            ))}
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
              <p className="label metrics-figure-summary-label">Read of the chart</p>
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
