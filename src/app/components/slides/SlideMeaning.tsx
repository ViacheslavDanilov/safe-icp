export default function SlideMeaning() {
  return (
    <section className="slide slide-meaning" aria-labelledby="meaning-title">
      <div className="slide-content meaning-layout">
        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-1">Interpretation</p>

          <h2 className="slide-title animate-in stagger-2" id="meaning-title">
            The pipeline is credible
            <span className="slide-title-accent">
              The hard clinical edge case is not solved yet
            </span>
          </h2>

          <p className="slide-lead meaning-lead animate-in stagger-3">
            The method is credible, but the hardest clinical regime is still unresolved.
          </p>

          <div className="meaning-verdict animate-in stagger-4">
            <p className="label meaning-verdict-label">Balanced read</p>
            <p className="meaning-verdict-copy">
              Strong proof of principle, not yet a finished clinical monitor.
            </p>

            <div role="group" className="meaning-tag-strip" aria-label="Interpretation tags">
              <span className="tag tag-sm">5–6&nbsp;mmHg MAE</span>
              <span className="tag tag-sm">120+ synchronized patients</span>
            </div>
          </div>
        </div>

        <div role="group" className="meaning-grid" aria-label="Interpretation summary">
          <article className="card lift meaning-card meaning-card-demonstrated animate-in stagger-5">
            <p className="label meaning-card-label">Demonstrated</p>

            <div className="meaning-points">
              <p>Competitive ICP estimation around 5–6&nbsp;mmHg MAE.</p>
              <p>Tracks temporal ICP behavior, not just static levels.</p>
            </div>
          </article>

          <article className="card lift meaning-card meaning-card-limited animate-in stagger-6">
            <p className="label meaning-card-label">Still Limited</p>

            <div className="meaning-points">
              <p>Too few high-ICP cases for robust edge-case behavior.</p>
              <p>Uncertainty remains under-calibrated and too optimistic.</p>
            </div>
          </article>

          <article className="card lift meaning-card meaning-card-impact animate-in stagger-7">
            <p className="label meaning-card-label">Why It Matters</p>

            <div className="meaning-points">
              <p>Makes non-invasive ICP monitoring technically credible.</p>
              <p>Creates a stronger base for broader clinical validation.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
