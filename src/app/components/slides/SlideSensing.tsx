import Image from 'next/image';

const steps = [
  {
    label: 'Placement',
    title: 'Forehead probe',
    desc: 'The optical interface sits outside the head, at the bedside.',
  },
  {
    label: 'Illumination',
    title: 'Near-infrared light',
    desc: 'Light travels through tissue and interacts with moving blood cells.',
  },
  {
    label: 'Readout',
    title: 'Speckle and flow dynamics',
    desc: 'Fluctuation patterns become a non-invasive signal linked to cerebral blood flow.',
  },
];

export default function SlideSensing() {
  return (
    <section className="slide slide-sensing" aria-labelledby="sensing-title">
      <div className="slide-content sensing-layout">
        <figure className="sensing-figure animate-in stagger-1">
          <div className="sensing-figure-frame zoomable">
            <span className="figure-badge">Probe Context</span>
            <Image
              className="sensing-image"
              src="/slide-sensing/safeicp-sensing-device.jpg"
              alt="Scientific illustration showing external optical sensing and invasive ICP reference context"
              width={2730}
              height={1536}
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          <figcaption className="sensing-caption">
            A probe-context figure showing the key sensing logic: optical measurement from outside
            the skull, with ICP referenced from the inside.
          </figcaption>
        </figure>

        <div className="slide-copy">
          <p className="hero-meta animate-in stagger-2">Device Logic</p>

          <h2 className="slide-title animate-in stagger-3" id="sensing-title">
            Light goes in
            <span className="slide-title-accent">Useful dynamics come back</span>
          </h2>

          <p className="slide-lead animate-in stagger-4">
            SafeICP uses safe near-infrared illumination and a forehead probe to read out
            blood-flow-related behavior without placing the sensing hardware inside the skull.
          </p>

          <div role="group" className="sensing-steps" aria-label="Sensing steps">
            {steps.map(({ label, title, desc }) => (
              <article key={label} className="card lift sensing-step animate-in">
                <p className="label sensing-step-label">{label}</p>
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
