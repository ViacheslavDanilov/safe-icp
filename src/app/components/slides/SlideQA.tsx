import Image from 'next/image';

export default function SlideQA() {
  const qna = [
    {
      q: 'Is it possible to directly measure ICP non-invasively?',
      a: 'Not reliably. A direct ICP sensor must communicate with the intracranial CSF/brain compartment, so non-invasive signals can only estimate or trend ICP.',
    },
    {
      q: 'How can ICP be estimated without measuring pressure directly?',
      a: 'The device captures optical dynamics tied to cerebral blood flow, then learns a mapping from synchronized optical windows to invasive ICP references.',
    },
    {
      q: 'Which model is strongest in the current comparison?',
      a: 'mWDN is the strongest overall in the reported results, reaching 5.3 mmHg MAE on the right hemisphere and the highest concentration of low-error predictions.',
    },
    {
      q: 'What makes the current result clinically credible already?',
      a: 'The models are trained and evaluated against invasive ICP, not a proxy label, and they reach competitive error in the 5-6 mmHg range while tracking temporal ICP behavior.',
    },
    {
      q: 'What is the main limitation today?',
      a: 'The hardest problem is elevated ICP and trustworthy uncertainty. Coverage stays well below the nominal target, so confidence estimates are still too optimistic.',
    },
    {
      q: 'Why compare several model families instead of picking one architecture first?',
      a: 'Because this is a time-series translation problem. InceptionTime, mWDN, and TCN test different temporal biases and reveal which one fits the paired signal-to-ICP mapping best.',
    },
  ];

  return (
    <section className="slide slide-qa slide-alt" aria-labelledby="qa-title">
      <div className="slide-content qa-layout">
        <div className="qa-header">
          <p className="hero-meta animate-in stagger-1">SafeICP</p>

          <h2 className="qa-title animate-in stagger-2" id="qa-title">
            Questions & <span className="qa-title-accent">Answers</span>
          </h2>
        </div>

        <div className="qa-grid">
          {qna.map((item, idx) => (
            <article
              key={idx}
              className={`qa-card animate-in stagger-${Math.min(idx + 3, 7)}`}
              aria-label={`Question: ${item.q}`}
            >
              <h3 className="qa-card-question">{item.q}</h3>
              <p className="qa-card-answer">{item.a}</p>
            </article>
          ))}
        </div>

        <div className="qa-footer animate-in stagger-7">
          <div className="qa-contact">
            <p className="qa-contact-label">Get in touch</p>
            <div className="qa-contact-grid">
              <div className="qa-contact-item">
                <span className="qa-contact-icon">Email</span>
                <a className="qa-contact-value" href="mailto:viacheslav.v.danilov@gmail.com">
                  viacheslav.v.danilov@gmail.com
                </a>
              </div>
              <div className="qa-contact-item">
                <span className="qa-contact-icon">Web</span>
                <a
                  className="qa-contact-value"
                  href="https://www.safeicp.es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.safeicp.es
                </a>
              </div>
            </div>
          </div>

          <div className="qa-institutions">
            <Image
              src="/slide-collab/icfo.png"
              alt="ICFO logo"
              width={100}
              height={32}
              className="qa-logo"
            />
            <Image
              src="/slide-collab/upf.png"
              alt="UPF logo"
              width={100}
              height={32}
              className="qa-logo"
            />
            <Image
              src="/slide-collab/vhir.png"
              alt="VHIR logo"
              width={100}
              height={32}
              className="qa-logo"
            />
            <Image
              src="/slide-collab/pcl.png"
              alt="PCL logo"
              width={100}
              height={32}
              className="qa-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
