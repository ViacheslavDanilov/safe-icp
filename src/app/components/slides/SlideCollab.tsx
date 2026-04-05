import Image from 'next/image';

export default function SlideCollab() {
  return (
    <section className="slide slide-collab" aria-labelledby="collab-title">
      <div className="slide-content collab-layout">

        <div className="collab-copy">
          <p className="hero-meta animate-in stagger-1">The Consortium</p>

          <h2 className="collab-title animate-in stagger-2" id="collab-title">
            Four partners covering
            <span className="collab-title-accent">the whole translation chain</span>
          </h2>

          <p className="collab-lead animate-in stagger-3">
            Each partner addresses a gap the others cannot fill: photonics and hardware from ICFO,
            time-series models from UPF, clinical data access from VHIR, and device engineering from
            ProCareLight. Together they span the full path from optical signal to clinical monitor.
          </p>

          <div className="collab-status animate-in stagger-4">
            <p className="collab-status-label">Already operational</p>
            <p className="collab-status-copy">
              Datasets collected, prototypes tested at bedside, and hospital validation protocols
              established across all four partners.
            </p>
          </div>
        </div>

        <div className="collab-org-grid" aria-label="Consortium partners">
          <article className="collab-org-card animate-in stagger-4">
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
              <p className="collab-org-desc">
                SCOS hardware, optical sensing, and compact prototype design
              </p>
            </div>
          </article>

          <article className="collab-org-card animate-in stagger-5">
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
              <p className="collab-org-desc">
                Time-series models, evaluation logic, and uncertainty analysis
              </p>
            </div>
          </article>

          <article className="collab-org-card animate-in stagger-6">
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
              <p className="collab-org-desc">
                Bedside recruitment, validation protocols, and hospital workflows
              </p>
            </div>
          </article>

          <article className="collab-org-card animate-in stagger-7">
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
              <p className="collab-org-desc">
                Safety engineering and product-oriented device validation
              </p>
            </div>
          </article>
        </div>

      </div>
    </section>
  );
}
