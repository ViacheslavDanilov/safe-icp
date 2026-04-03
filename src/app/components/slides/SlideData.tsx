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

          <div className="data-tags animate-in stagger-4" aria-label="Setup tags">
            <span>iNPH-centered</span>
            <span>Paired optical + ICP</span>
            <span>Katzman expansion</span>
            <span>Time-series models</span>
          </div>
        </div>

        <div className="data-board animate-in stagger-5" aria-label="ML setup overview">
          <div className="data-top">
            <article className="data-card data-card-core">
              <p className="data-card-label">Core analysis cohort</p>
              <h3>58 iNPH recordings</h3>
              <p>
                The report frames the main analysis around 58 iNPH recordings with synchronized
                optical and invasive measurements.
              </p>
            </article>

            <article className="data-card data-card-coverage">
              <p className="data-card-label">Training expansion</p>
              <h3>68 subjects / 52 valid</h3>
              <p>
                The extended ML dataset adds curated subject filtering and Katzman infusion tests to
                broaden ICP coverage.
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

          <div className="model-strip" aria-label="Model families">
            <article className="model-card">
              <p className="model-card-label">Model family</p>
              <h3>InceptionTime</h3>
              <p>Strong temporal feature extraction and the best overall accuracy in the report.</p>
            </article>

            <article className="model-card">
              <p className="model-card-label">Model family</p>
              <h3>mWDN</h3>
              <p>
                Wavelet-informed temporal modeling with a strong concentration of low-error
                predictions.
              </p>
            </article>

            <article className="model-card">
              <p className="model-card-label">Model family</p>
              <h3>TCN</h3>
              <p>
                Dilated temporal convolutions as a complementary baseline in the comparison set.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
