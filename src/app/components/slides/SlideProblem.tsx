const consequences = [
  { title: 'Surgical Access', desc: 'Measurement requires drilling into the skull.' },
  {
    title: 'Infection Risk',
    desc: 'Every inserted sensor carries bleeding and contamination risk.',
  },
  {
    title: 'Limited Eligibility',
    desc: 'Procedural risk decides who gets monitored and for how long.',
  },
  {
    title: 'Reduced Monitoring',
    desc: 'Vulnerable patients and lower-acuity settings lose continuous insight.',
  },
];

export default function SlideProblem() {
  return (
    <section className="slide slide-problem" aria-labelledby="problem-title">
      <div className="slide-content problem-layout">
        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-1">Why ICP Matters</p>

          <h2 className="slide-title slide-title-lg animate-in stagger-2" id="problem-title">
            The pressure matters
            <span className="slide-title-accent">The measurement still hurts</span>
          </h2>

          <p className="slide-lead slide-lead-lg animate-in stagger-3">
            Intracranial pressure is a critical brain-health signal, but the gold standard still
            relies on invasive monitoring through a surgically placed sensor.
          </p>
        </div>

        <div
          role="group"
          className="problem-cascade"
          aria-label="Cascade of invasive ICP monitoring consequences"
        >
          {consequences.map(({ title, desc }, index) => {
            // The last step is the outcome, drawn in the warning colour.
            const end = index === consequences.length - 1 ? '-end' : '';
            return (
              <div
                key={title}
                className={`problem-cascade-step${end && ' problem-cascade-step-end'} cascade-reveal cascade-reveal-${index + 1}`}
              >
                <div className="problem-cascade-marker" aria-hidden="true">
                  <span className={`problem-cascade-dot${end && ' problem-cascade-dot-end'}`} />
                </div>
                <div className="problem-cascade-content">
                  <h3
                    className={`card-title problem-cascade-title${end && ' problem-cascade-title-end'}`}
                  >
                    {title}
                  </h3>
                  <p className="problem-cascade-desc">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
