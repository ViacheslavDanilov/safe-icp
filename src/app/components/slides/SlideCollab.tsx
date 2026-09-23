import Image from 'next/image';
import { partners } from './partners';

export default function SlideCollab() {
  return (
    <section className="slide slide-collab" aria-labelledby="collab-title">
      <div className="slide-content collab-layout">
        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-1">The Consortium</p>

          <h2 className="slide-title animate-in stagger-2" id="collab-title">
            Four partners covering
            <span className="slide-title-accent">the whole translation chain</span>
          </h2>

          <p className="slide-lead collab-lead animate-in stagger-3">
            Each partner covers a part of the pipeline the others cannot.
          </p>

          <div className="collab-status animate-in stagger-4">
            <p className="label collab-status-label">Already operational</p>
            <p className="collab-status-copy">
              The collaboration is already operating across data, devices, and bedside validation.
            </p>
          </div>
        </div>

        <div role="group" className="collab-org-grid" aria-label="Consortium partners">
          {partners.map((partner, index) => (
            <article
              key={partner.short}
              className={`card lift collab-org-card animate-in stagger-${index + 4}`}
            >
              <div className="collab-org-logo-frame">
                <Image
                  className="collab-org-logo"
                  src={partner.logo}
                  alt={`${partner.short} logo`}
                  width={400}
                  height={200}
                />
              </div>
              <div className="collab-org-info">
                <p className="label collab-org-role">{partner.role}</p>
                <p className="collab-org-desc">{partner.contribution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
