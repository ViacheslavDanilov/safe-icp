import Image from 'next/image';

export default function SlideSystem() {
  return (
    <section className="slide slide-system" aria-labelledby="system-title">
      <div className="slide-content system-layout">
        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-1">What SafeICP Is</p>

          <h2 className="slide-title animate-in stagger-2" id="system-title">
            SafeICP is not only a device
            <span className="slide-title-accent">It is a measurement pipeline</span>
          </h2>

          <p className="slide-lead slide-lead-lg animate-in stagger-3">
            SafeICP combines bedside optical sensing, signal interpretation, and machine
            learning-based ICP estimation into one non-invasive monitoring approach.
          </p>
        </div>

        <div role="group" className="system-board" aria-label="SafeICP system pipeline">
          <figure className="system-figure zoomable animate-in stagger-4">
            <span className="figure-badge">SCOS Sensing Principle</span>
            <Image
              className="system-image"
              src="/slide-system/safeicp-device.png"
              alt="Diagram of fiber-coupled SCOS setup: NIR laser, optical fiber, forehead probe, tissue interaction zone, and CMOS sensor"
              width={2816}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </figure>

          <div className="system-flow">
            <article className="card lift system-card animate-in">
              <p className="label system-card-label">Sense</p>
              <h3 className="card-title">Bedside optical capture</h3>
              <p>NIR light and a forehead probe acquire blood-flow signal</p>
            </article>

            <article className="card lift system-card animate-in">
              <p className="label system-card-label">Read</p>
              <h3 className="card-title">Dynamic signal patterns</h3>
              <p>Speckle dynamics reveal cerebral hemodynamic behavior</p>
            </article>

            <article className="card lift system-card animate-in">
              <p className="label system-card-label">Infer</p>
              <h3 className="card-title">ICP-relevant output</h3>
              <p>ML maps temporal patterns to pressure estimates</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
