export default function SlideFuture() {
  return (
    <section className="slide slide-future" aria-labelledby="future-title">
      <div className="slide-content future-layout">
        <div className="future-copy">
          <p className="hero-meta animate-in stagger-1">Impact And Next Steps</p>

          <h2 className="future-title animate-in stagger-2" id="future-title">
            SafeICP makes non-invasive ICP monitoring
            <span className="future-title-accent">a realistic clinical path</span>
          </h2>

          <p className="future-lead animate-in stagger-3">
            The foundation is in place; the next gains come from data, calibration, and translation.
          </p>

          <div className="future-status animate-in stagger-4" aria-label="Current project status">
            <p className="future-status-label">Already established</p>
            <div className="future-status-list">
              <p>Paired optical and invasive datasets</p>
              <p>Working bedside-oriented prototypes</p>
              <p>Active hospital and clinical partners</p>
            </div>
          </div>
        </div>

        <div className="future-board" aria-label="Impact and roadmap">
          <div className="future-roadmap animate-in stagger-5">
            <p className="future-roadmap-label">Next-step roadmap</p>

            <div className="future-roadmap-track" aria-hidden="true" />

            <div className="future-roadmap-steps">
              <article className="future-step">
                <p className="future-step-index">01</p>
                <h3>
                  Broaden
                  <br />
                  data
                </h3>
                <p>Expand high-ICP and multi-hospital cohorts.</p>
              </article>

              <article className="future-step">
                <p className="future-step-index">02</p>
                <h3>Calibrate confidence</h3>
                <p>Improve uncertainty and elevated-range reliability.</p>
              </article>

              <article className="future-step">
                <p className="future-step-index">03</p>
                <h3>Refine workflow</h3>
                <p>Improve use-case fit and anatomical correction logic.</p>
              </article>

              <article className="future-step">
                <p className="future-step-index">04</p>
                <h3>Translate clinically</h3>
                <p>Prepare for trials, validation, and bedside adoption.</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
