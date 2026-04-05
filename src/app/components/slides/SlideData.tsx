export default function SlideData() {
  return (
    <section className="slide slide-data" aria-labelledby="data-title">
      <div className="slide-content data-layout">
        <div className="data-copy">
          <p className="hero-meta animate-in stagger-1">ML Setup</p>

          <h2 className="data-title animate-in stagger-2" id="data-title">
            The models learn from paired optical and invasive data
            <span className="data-title-accent">The cohort is the setup</span>
          </h2>

          <p className="data-lead animate-in stagger-3">
            The learning problem is only credible because the optical recordings are paired with
            invasive ICP measurements. The dataset is centered on iNPH and expanded with Katzman
            infusion data to expose the models to broader pressure variation.
          </p>
        </div>

        <div className="data-board animate-in stagger-4" aria-label="ML setup overview">
          <div className="data-top">
            <article className="data-card">
              <p className="data-card-label">Core analysis cohort</p>
              <h3>58 iNPH recordings</h3>
              <p>
                Synchronized optical and invasive measurements form the main analysis baseline.
              </p>
            </article>

            <article className="data-card">
              <p className="data-card-label">Training expansion</p>
              <h3>68 subjects / 52 valid</h3>
              <p>
                Katzman infusion tests broaden ICP coverage beyond the core iNPH cohort.
              </p>
            </article>
          </div>

          <article className="data-pairing">
            <p className="data-card-label">What each training sample needs</p>
            <div className="data-pairing-row">
              <span className="data-pill data-pill-optical">Optical signal window</span>
              <span className="data-pairing-link">paired with</span>
              <span className="data-pill data-pill-icp">Invasive ICP reference</span>
            </div>
          </article>

          <div className="model-list" aria-label="Model families evaluated">
            <p className="model-list-header">Model families evaluated</p>
            <div className="model-row">
              <span className="model-row-name">InceptionTime</span>
              <span className="model-row-desc">Strong temporal feature extraction, best overall accuracy</span>
            </div>
            <div className="model-row">
              <span className="model-row-name">mWDN</span>
              <span className="model-row-desc">Wavelet-informed modeling, strong low-error concentration</span>
            </div>
            <div className="model-row">
              <span className="model-row-name">TCN</span>
              <span className="model-row-desc">Dilated temporal convolutions, complementary baseline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
