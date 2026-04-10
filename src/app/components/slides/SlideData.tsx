export default function SlideData() {
  return (
    <section className="slide slide-data slide-alt" aria-labelledby="data-title">
      <div className="slide-content data-layout">
        <div className="data-copy">
          <p className="hero-meta animate-in stagger-1">Dataset</p>

          <h2 className="data-title animate-in stagger-2" id="data-title">
            The models learn from paired optical and invasive data
            <span className="data-title-accent">Two cohorts, 68 subjects</span>
          </h2>

          <p className="data-lead animate-in stagger-3">
            The learning problem is only credible because the optical recordings are paired with
            invasive ICP measurements. The dataset is centered on iNPH and expanded with Katzman
            infusion data to expose the models to broader pressure variation.
          </p>
        </div>

        <div className="data-board" aria-label="ML setup overview">
          <div className="data-top">
            <article className="data-card animate-in">
              <p className="data-card-label">iNPH cohort</p>
              <h3>58 subjects</h3>
              <p>Idiopathic normal pressure hydrocephalus — a condition where cerebrospinal fluid accumulates in the brain, causing gait, cognitive, and urinary symptoms.</p>
            </article>

            <article className="data-card animate-in">
              <p className="data-card-label">Katzman cohort</p>
              <h3>10 subjects</h3>
              <p>Katzman infusion tests with controlled CSF pressure elevation, expanding the ICP range beyond baseline hydrocephalus levels.</p>
            </article>
          </div>

          <article className="data-pairing animate-in">
            <p className="data-card-label">What each training sample needs</p>
            <div className="data-pairing-row">
              <span className="data-pill data-pill-optical">Optical signal window</span>
              <span className="data-pairing-link">paired with</span>
              <span className="data-pill data-pill-icp">Invasive ICP reference</span>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}
