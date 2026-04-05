export default function SlideInference() {
  return (
    <section className="slide slide-inference slide-alt" aria-labelledby="inference-title">
      <div className="slide-content inference-layout">
        <div className="inference-copy animate-in stagger-1">
          <p className="hero-meta">From Optical Signal To ICP</p>
          <h2 className="inference-title" id="inference-title">
            The device does not read pressure directly
            <span className="inference-title-accent">It learns the mapping</span>
          </h2>
        </div>

        <p className="inference-lead animate-in stagger-2">
          SafeICP measures optical dynamics tied to blood flow, not ICP itself. To produce a
          pressure estimate, the system needs a learned time-series translation from signal behavior
          to pressure behavior.
        </p>

        <div className="inference-board animate-in stagger-3" aria-label="Inference pipeline">
          <article className="inference-panel">
            <p className="inference-panel-label">Measured</p>
            <h3>Optical time series</h3>
            <div className="waveform" aria-hidden="true">
              <img src="/slide-inference/cbf-signal.png" alt="" />
            </div>
            <p className="inference-panel-copy">
              Flow-related fluctuations, speckle behavior, and temporal signal structure.
            </p>
          </article>

          <div className="inference-bridge" aria-hidden="true">
            <span className="inference-bridge-arm" />
            <div className="inference-bridge-core">ML</div>
            <span className="inference-bridge-arm" />
          </div>

          <article className="inference-panel">
            <p className="inference-panel-label">Predicted</p>
            <h3>Intracranial pressure estimate</h3>
            <div className="waveform" aria-hidden="true">
              <img src="/slide-inference/icp-signal.png" alt="" />
            </div>
            <p className="inference-panel-copy">
              Clinically meaningful pressure output aligned to paired invasive reference data.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
