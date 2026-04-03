export default function SlideProblem() {
  return (
    <section className="slide slide-problem" aria-labelledby="problem-title">
      <div className="slide-content problem-layout">
        <div className="problem-copy">
          <p className="hero-meta animate-in stagger-1">Why ICP Matters</p>

          <h2 className="problem-title animate-in stagger-2" id="problem-title">
            The pressure matters.
            <span className="problem-title-accent">The measurement still hurts.</span>
          </h2>

          <p className="problem-lead animate-in stagger-3">
            Intracranial pressure is a critical brain-health signal, but the gold standard still
            relies on invasive monitoring through a surgically placed sensor.
          </p>

          <div className="problem-conditions animate-in stagger-4" aria-label="Clinical contexts">
            <span>TBI</span>
            <span>Stroke</span>
            <span>Hydrocephalus</span>
            <span>Pediatrics</span>
          </div>
        </div>

        <div
          className="problem-cascade"
          aria-label="Cascade of invasive ICP monitoring consequences"
        >
          <div className="problem-cascade-step cascade-reveal cascade-reveal-1">
            <div className="problem-cascade-marker" aria-hidden="true">
              <span className="problem-cascade-dot" />
            </div>
            <div className="problem-cascade-content">
              <h3 className="problem-cascade-title">Surgical Access</h3>
              <p className="problem-cascade-desc">
                Measurement requires drilling into the skull.
              </p>
            </div>
          </div>

          <div className="problem-cascade-step cascade-reveal cascade-reveal-2">
            <div className="problem-cascade-marker" aria-hidden="true">
              <span className="problem-cascade-dot" />
            </div>
            <div className="problem-cascade-content">
              <h3 className="problem-cascade-title">Infection Risk</h3>
              <p className="problem-cascade-desc">
                Every inserted sensor carries bleeding and contamination risk.
              </p>
            </div>
          </div>

          <div className="problem-cascade-step cascade-reveal cascade-reveal-3">
            <div className="problem-cascade-marker" aria-hidden="true">
              <span className="problem-cascade-dot" />
            </div>
            <div className="problem-cascade-content">
              <h3 className="problem-cascade-title">Limited Eligibility</h3>
              <p className="problem-cascade-desc">
                Procedural risk decides who gets monitored and for how long.
              </p>
            </div>
          </div>

          <div className="problem-cascade-step problem-cascade-step-end cascade-reveal cascade-reveal-4">
            <div className="problem-cascade-marker" aria-hidden="true">
              <span className="problem-cascade-dot problem-cascade-dot-end" />
            </div>
            <div className="problem-cascade-content">
              <h3 className="problem-cascade-title problem-cascade-title-end">
                Reduced Monitoring
              </h3>
              <p className="problem-cascade-desc">
                Vulnerable patients and lower-acuity settings lose continuous insight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
