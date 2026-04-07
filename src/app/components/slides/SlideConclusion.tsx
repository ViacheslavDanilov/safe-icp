import Image from 'next/image';

export default function SlideConclusion() {
  return (
    <section className="slide slide-conclusion" aria-labelledby="conclusion-title">
      <div className="slide-content conclusion-layout">
        <div className="conclusion-header">
          <p className="hero-meta animate-in stagger-1">Conclusion</p>
          <h1 className="conclusion-title animate-in stagger-2" id="conclusion-title">
            <span className="conclusion-title-accent">Improvements & Evaluation</span>
          </h1>
        </div>

        <div className="conclusion-grid">
          <article className="conclusion-card animate-in stagger-3">
            <div className="conclusion-card-image-frame">
              <Image
                src="/slide-conclusion/who-logo.png"
                alt="WHO logo for medical standards"
                width={120}
                height={120}
                className="conclusion-image"
              />
            </div>
            <h3 className="conclusion-card-title">Standards</h3>
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

          <article className="conclusion-card conclusion-card-error animate-in stagger-4">
            <div className="conclusion-card-image-frame">
              <Image
                src="/slide-conclusion/network.png"
                alt="Neural network icon for machine learning error"
                width={120}
                height={120}
                className="conclusion-image"
              />
            </div>
            <h3 className="conclusion-card-title">Error</h3>
            <div className="conclusion-metrics">
              <div className="conclusion-metric-row">
                <span className="conclusion-metric-label">Validation</span>
                <span className="conclusion-metric-value">2.6 mmHg</span>
              </div>
              <div className="conclusion-metric-row">
                <span className="conclusion-metric-label">Test</span>
                <span className="conclusion-metric-value">5.8 mmHg</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
