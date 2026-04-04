import Image from 'next/image';

export default function SlideCollab() {
  return (
    <section className="slide slide-collab slide-alt" aria-labelledby="collab-title">
      <div className="slide-content collab-layout">
        <div className="collab-header">
          <p className="hero-meta animate-in stagger-1">The Consortium</p>

          <h2 className="collab-title animate-in stagger-2" id="collab-title">
            Four partners covering
            <span className="collab-title-accent">the whole translation chain</span>
          </h2>
        </div>

        <div className="collab-org-grid animate-in stagger-3" aria-label="Consortium partners">
          <article className="collab-org-card">
            <div className="collab-org-logo-frame">
              <Image
                className="collab-org-logo"
                src="/slide-collab/icfo.png"
                alt="ICFO logo"
                width={400}
                height={200}
              />
            </div>
            <div className="collab-org-info">
              <p className="collab-org-role">Photonics &amp; Device</p>
              <h3>ICFO</h3>
              <p className="collab-org-desc">
                SCOS hardware, optical sensing, and compact prototype design.
              </p>
            </div>
          </article>

          <article className="collab-org-card">
            <div className="collab-org-logo-frame">
              <Image
                className="collab-org-logo"
                src="/slide-collab/upf.png"
                alt="UPF logo"
                width={400}
                height={200}
              />
            </div>
            <div className="collab-org-info">
              <p className="collab-org-role">Machine Learning</p>
              <h3>UPF</h3>
              <p className="collab-org-desc">
                Time-series models, evaluation logic, and uncertainty analysis.
              </p>
            </div>
          </article>

          <article className="collab-org-card">
            <div className="collab-org-logo-frame">
              <Image
                className="collab-org-logo"
                src="/slide-collab/vhir.png"
                alt="VHIR logo"
                width={400}
                height={200}
              />
            </div>
            <div className="collab-org-info">
              <p className="collab-org-role">Clinical Translation</p>
              <h3>VHIR</h3>
              <p className="collab-org-desc">
                Bedside recruitment, validation protocols, and hospital workflows.
              </p>
            </div>
          </article>

          <article className="collab-org-card">
            <div className="collab-org-logo-frame">
              <Image
                className="collab-org-logo"
                src="/slide-collab/pcl.png"
                alt="ProCareLight logo"
                width={400}
                height={200}
              />
            </div>
            <div className="collab-org-info">
              <p className="collab-org-role">Industrial Validation</p>
              <h3>ProCareLight</h3>
              <p className="collab-org-desc">
                Safety engineering and product-oriented device validation.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
