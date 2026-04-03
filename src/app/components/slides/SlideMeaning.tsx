export default function SlideMeaning() {
  return (
    <section className="slide slide-meaning slide-alt" aria-labelledby="meaning-title">
      <div className="slide-content meaning-layout">
        <div className="meaning-copy">
          <p className="hero-meta animate-in stagger-1">Interpretation</p>

          <h2 className="meaning-title animate-in stagger-2" id="meaning-title">
            The pipeline is credible.
            <span className="meaning-title-accent">
              The hard clinical edge case is not solved yet.
            </span>
          </h2>

          <p className="meaning-lead animate-in stagger-3">
            SafeICP has already shown something substantial: non-invasive optical recordings can be
            turned into ICP-relevant estimates with competitive error and meaningful temporal
            tracking. What remains incomplete is the part that matters most for high-stakes
            deployment: elevated-ICP coverage and trustworthy uncertainty.
          </p>

          <div className="meaning-verdict animate-in stagger-4">
            <p className="meaning-verdict-label">Balanced read</p>
            <p className="meaning-verdict-copy">
              This is a strong proof-of-principle translational result, not a finished clinical
              monitor.
            </p>

            <div className="meaning-tag-strip" aria-label="Interpretation tags">
              <span>5-6 mmHg MAE</span>
              <span>120+ synchronized patients</span>
              <span>70% B-wave expert agreement</span>
            </div>
          </div>
        </div>

        <div className="meaning-grid animate-in stagger-5" aria-label="Interpretation summary">
          <article className="meaning-card meaning-card-demonstrated">
            <p className="meaning-card-label">Demonstrated</p>
            <h3>What is already real</h3>

            <div className="meaning-points">
              <p>Clinically competitive ICP estimation accuracy around 5 to 6 mmHg MAE.</p>
              <p>
                Meaningful tracking of temporal ICP behavior rather than static value guessing.
              </p>
              <p>The largest synchronized optical-ICP dataset in the project materials.</p>
            </div>
          </article>

          <article className="meaning-card meaning-card-limited">
            <p className="meaning-card-label">Still Limited</p>
            <h3>Where caution is still required</h3>

            <div className="meaning-points">
              <p>
                High-ICP cases remain too sparse for robust intracranial hypertension
                classification.
              </p>
              <p>
                Prediction intervals are under-calibrated, with coverage well below the 95% target.
              </p>
              <p>
                Sharp spikes and elevated-range behavior are harder than baseline dynamics.
              </p>
            </div>
          </article>

          <article className="meaning-card meaning-card-impact">
            <p className="meaning-card-label">Why It Matters</p>
            <h3>Why this still changes the field</h3>

            <div className="meaning-points">
              <p>
                It makes bedside, repeatable, non-invasive ICP monitoring technically credible.
              </p>
              <p>It creates a platform that can improve through broader multi-center data.</p>
              <p>
                It gives clinical translation a foundation in devices, data, and partnerships.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
