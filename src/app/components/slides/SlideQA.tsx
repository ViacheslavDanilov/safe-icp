import Image from 'next/image';

export default function SlideQA() {
  const qna = [
    {
      q: 'Accuracy vs. Gold Standard?',
      a: 'Mean Absolute Error < 3.5 mmHg compared to invasive EVD across 50+ diverse subjects.',
    },
    {
      q: 'Sensitivity to Skin Tone?',
      a: 'SCOS multi-distance correlation is robust to varied superficial absorption and melanin levels.',
    },
    {
      q: 'Real-time Performance?',
      a: 'The pipeline runs at 10Hz with < 100ms inference latency for continuous clinical monitoring.',
    },
    {
      q: 'Handling Motion Artifacts?',
      a: 'Proprietary noise-canceling and secure adhesives minimize signal loss in busy ICU settings.',
    },
    {
      q: 'Universal Calibration?',
      a: 'Our zero-calibration approach generalizes instantly using models trained on large datasets.',
    },
    {
      q: 'Regulatory Roadmap?',
      a: 'Currently in Phase II clinical validation; ISO-13485 and CE Mark certification are in progress.',
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
                <p className="qa-contact-value">viacheslav.v.danilov@gmail.com</p>
              </div>
              <div className="qa-contact-item">
                <span className="qa-contact-icon">Web</span>
                <p className="qa-contact-value">www.safeicp.es</p>
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
