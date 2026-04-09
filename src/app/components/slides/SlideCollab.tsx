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
            Each partner covers a part of the pipeline the others cannot.
          </p>

          <div className="collab-status animate-in stagger-4">
            <p className="collab-status-label">Already operational</p>
            <p className="collab-status-copy">
              The collaboration is already operating across data, devices, and bedside validation.
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
              <p className="collab-org-desc">SCOS hardware and optical sensing</p>
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
              <p className="collab-org-desc">Time-series models and uncertainty analysis</p>
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
              <p className="collab-org-desc">Recruitment, validation, and bedside workflow</p>
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
              <p className="collab-org-desc">Safety engineering and product validation</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
