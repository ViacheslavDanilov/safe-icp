import LoopVideo from '../LoopVideo';

export default function SlideHardware() {
  return (
    <section className="slide slide-hardware" aria-labelledby="hardware-title">
      <div className="slide-content hardware-layout">
        <div className="hardware-header">
          <p className="hero-meta animate-in stagger-1">Hardware Translation</p>

          <h2 className="slide-title animate-in stagger-2" id="hardware-title">
            From lab rig to bedside device
            <span className="slide-title-accent">The form factor changed</span>
          </h2>
        </div>

        <div
          role="group"
          className="hardware-board animate-in stagger-3"
          aria-label="Comparison between legacy and compact optical monitoring devices"
        >
          <figure className="card lift hardware-card">
            <div className="hardware-image-frame">
              <LoopVideo
                className="hardware-image"
                src="/slide-hardware/legacy-dcs-device-loop.mp4"
                poster="/slide-hardware/legacy-dcs-device.webp"
              />
            </div>
            <figcaption className="hardware-card-copy">
              <p className="label">Legacy platform</p>
              <h3 className="card-title">Rack-based DCS research system</h3>
              <p className="hardware-card-body">
                Large footprint, exposed instrumentation, and cable-heavy integration make the setup
                scientifically capable but operationally hard to translate.
              </p>
            </figcaption>
          </figure>

          <figure className="card lift hardware-card">
            <div className="hardware-image-frame">
              <LoopVideo
                className="hardware-image"
                src="/slide-hardware/compact-scos-device-loop.mp4"
                poster="/slide-hardware/compact-scos-device.webp"
              />
            </div>
            <figcaption className="hardware-card-copy">
              <p className="label">SafeICP direction</p>
              <h3 className="card-title">Compact SCOS bedside-oriented device</h3>
              <p className="hardware-card-body">
                Smaller, more integrated hardware moves the same sensing ambition toward a form
                factor that feels more credible for bedside and longitudinal use.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
