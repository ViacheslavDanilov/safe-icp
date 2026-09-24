import Image from 'next/image';

const stages = [
  {
    label: 'Sense',
    title: 'Bedside optical capture',
    desc: 'NIR light and a forehead probe acquire blood-flow signal',
  },
  {
    label: 'Read',
    title: 'Dynamic signal patterns',
    desc: 'Speckle dynamics reveal cerebral hemodynamic behavior',
  },
  {
    label: 'Infer',
    title: 'ICP-relevant output',
    desc: 'ML maps temporal patterns to pressure estimates',
  },
];

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
            {stages.map(({ label, title, desc }) => (
              <article key={label} className="card lift system-card animate-in">
                <p className="label system-card-label">{label}</p>
                <h3 className="card-title">{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
