export default function SlideHardware() {
  return (
    <section className="slide slide-hardware slide-alt" aria-labelledby="hardware-title">
      <div className="slide-content hardware-layout">
        <div className="hardware-header">
          <p className="hero-meta animate-in stagger-1">Hardware Translation</p>

          <h2 className="hardware-title animate-in stagger-2" id="hardware-title">
            From lab rig to bedside device
            <span className="hardware-title-accent">The form factor changed</span>
          </h2>
        </div>

        <div
          className="hardware-board animate-in stagger-3"
          aria-label="Comparison between legacy and compact optical monitoring devices"
        >
          <figure className="hardware-card hardware-card-legacy">
            <div className="hardware-image-frame">
              <video
                className="hardware-image"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/videos/hardware/legacy-dcs-device.jpg"
              >
                <source src="/videos/hardware/legacy-dcs-device-loop.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="hardware-card-copy">
              <p className="hardware-card-label">Legacy platform</p>
              <h3>Rack-based DCS research system</h3>
              <p className="hardware-card-body">
                Large footprint, exposed instrumentation, and cable-heavy integration make the setup
                scientifically capable but operationally hard to translate.
              </p>
            </figcaption>
          </figure>

          <figure className="hardware-card hardware-card-compact">
            <div className="hardware-image-frame">
              <video
                className="hardware-image"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/videos/hardware/compact-scos-device.jpg"
              >
                <source src="/videos/hardware/compact-scos-device-loop.mp4" type="video/mp4" />
              </video>
            </div>
            <figcaption className="hardware-card-copy">
              <p className="hardware-card-label">SafeICP direction</p>
              <h3>Compact SCOS bedside-oriented device</h3>
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
