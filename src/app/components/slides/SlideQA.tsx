import Image from 'next/image';

export default function SlideQA() {
  return (
    <section className="slide slide-qa slide-alt" aria-labelledby="qa-title">
      <div className="slide-content qa-layout">
        <div className="qa-header">
          <p className="hero-meta animate-in stagger-1">SafeICP</p>

          <h2 className="qa-title animate-in stagger-2" id="qa-title">
            Questions & <span className="qa-title-accent">Answers</span>
          </h2>

          <p className="qa-lead animate-in stagger-3">
            Thank you for your attention. We are happy to discuss our findings and explore future
            collaborations.
          </p>
        </div>

        <div className="qa-footer animate-in stagger-4">
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
              width={120}
              height={40}
              className="qa-logo"
            />
            <Image
              src="/slide-collab/upf.png"
              alt="UPF logo"
              width={120}
              height={40}
              className="qa-logo"
            />
            <Image
              src="/slide-collab/vhir.png"
              alt="VHIR logo"
              width={120}
              height={40}
              className="qa-logo"
            />
            <Image
              src="/slide-collab/pcl.png"
              alt="PCL logo"
              width={120}
              height={40}
              className="qa-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
