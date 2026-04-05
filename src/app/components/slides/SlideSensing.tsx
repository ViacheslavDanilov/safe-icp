import Image from 'next/image';

export default function SlideSensing() {
  return (
    <section className="slide slide-sensing" aria-labelledby="sensing-title">
      <div className="slide-content sensing-layout">
        <figure className="sensing-figure animate-in stagger-1">
          <div className="sensing-figure-frame">
            <span className="sensing-figure-badge">Probe Context</span>
            <Image
              className="sensing-image"
              src="/slide-sensing/safeicp-sensing-device.jpg"
              alt="Scientific illustration showing external optical sensing and invasive ICP reference context"
              width={2730}
              height={1536}
            />
          </div>

          <figcaption className="sensing-caption">
            A probe-context figure showing the key sensing logic: optical measurement from outside
            the skull, with ICP referenced from the inside.
          </figcaption>
        </figure>

        <div className="sensing-copy">
          <p className="hero-meta animate-in stagger-2">Device Logic</p>

          <h2 className="sensing-title animate-in stagger-3" id="sensing-title">
            Light goes in
            <span className="sensing-title-accent">Useful dynamics come back</span>
          </h2>

          <p className="sensing-lead animate-in stagger-4">
            SafeICP uses safe near-infrared illumination and a forehead probe to read out
            blood-flow-related behavior without placing the sensing hardware inside the skull.
          </p>

          <div className="sensing-steps animate-in stagger-5" aria-label="Sensing steps">
            <article className="sensing-step">
              <p className="sensing-step-label">Placement</p>
              <h3>Forehead probe</h3>
              <p>The optical interface sits outside the head, at the bedside.</p>
            </article>

            <article className="sensing-step">
              <p className="sensing-step-label">Illumination</p>
              <h3>Near-infrared light</h3>
              <p>Light travels through tissue and interacts with moving blood cells.</p>
            </article>

            <article className="sensing-step">
              <p className="sensing-step-label">Readout</p>
              <h3>Speckle and flow dynamics</h3>
              <p>
                Fluctuation patterns become a non-invasive signal linked to cerebral blood flow.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
