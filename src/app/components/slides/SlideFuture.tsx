import type { ReactNode } from 'react';

const steps: { title: ReactNode; desc: string }[] = [
  {
    // Forced break so the first title wraps like its longer neighbours
    title: (
      <>
        Broaden
        <br />
        data
      </>
    ),
    desc: 'Expand high-ICP and multi-hospital cohorts.',
  },
  { title: 'Calibrate confidence', desc: 'Improve uncertainty and elevated-range reliability.' },
  { title: 'Refine workflow', desc: 'Improve use-case fit and anatomical correction logic.' },
  { title: 'Translate clinically', desc: 'Prepare for trials, validation, and bedside adoption.' },
];

export default function SlideFuture() {
  return (
    <section className="slide slide-future" aria-labelledby="future-title">
      <div className="slide-content future-layout">
        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-1">Impact And Next Steps</p>

          <h2 className="slide-title animate-in stagger-2" id="future-title">
            SafeICP makes non-invasive ICP monitoring
            <span className="slide-title-accent">a realistic clinical path</span>
          </h2>

          <p className="slide-lead future-lead animate-in stagger-3">
            The foundation is in place; the next gains come from data, calibration, and translation.
          </p>

          <div
            role="group"
            className="card lift future-status animate-in stagger-4"
            aria-label="Current project status"
          >
            <p className="label future-status-label">Already established</p>
            <div className="future-status-list">
              <p>Paired optical and invasive datasets</p>
              <p>Working bedside-oriented prototypes</p>
              <p>Active hospital and clinical partners</p>
            </div>
          </div>
        </div>

        <div role="group" className="future-board" aria-label="Impact and roadmap">
          <div className="card lift future-roadmap animate-in stagger-5">
            <p className="label future-roadmap-label">Next-step roadmap</p>

            <div className="future-roadmap-track" aria-hidden="true" />

            <div className="future-roadmap-steps">
              {steps.map(({ title, desc }, index) => (
                <article key={desc} className="future-step">
                  <p className="future-step-index">{String(index + 1).padStart(2, '0')}</p>
                  <h3 className="card-title">{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
