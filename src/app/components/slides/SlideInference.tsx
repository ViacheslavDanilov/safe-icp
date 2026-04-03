export default function SlideInference() {
  return (
    <section className="slide slide-inference slide-alt" aria-labelledby="inference-title">
      <div className="slide-content inference-layout">
        <div className="inference-copy">
          <p className="hero-meta animate-in stagger-1">From Optical Signal To ICP</p>

          <h2 className="inference-title animate-in stagger-2" id="inference-title">
            The device does not read pressure directly.
            <span className="inference-title-accent">It learns the mapping.</span>
          </h2>

          <p className="inference-lead animate-in stagger-3">
            SafeICP measures optical dynamics tied to blood flow, not ICP itself. To produce a
            pressure estimate, the system needs a learned time-series translation from signal
            behavior to pressure behavior.
          </p>

          <div className="inference-note animate-in stagger-4">
            <span className="inference-note-kicker">Why ML is needed</span>
            <p>
              The relationship is temporal, indirect, and patient-dependent enough that a simple
              one-to-one formula is not the point of the system.
            </p>
          </div>
        </div>

        <div className="inference-board animate-in stagger-4" aria-label="Inference pipeline">
          <article className="inference-panel">
            <p className="inference-panel-label">Measured</p>
            <h3>Optical time series</h3>
            <div className="waveform waveform-optical" aria-hidden="true">
              <span />
            </div>
            <p className="inference-panel-copy">
              Flow-related fluctuations, speckle behavior, and temporal signal structure.
            </p>
          </article>

          <div className="inference-bridge" aria-hidden="true">
            <div className="inference-bridge-core">ML</div>
            <div className="inference-bridge-line" />
          </div>

          <article className="inference-panel inference-panel-output">
            <p className="inference-panel-label">Predicted</p>
            <h3>ICP estimate</h3>
            <div className="waveform waveform-icp" aria-hidden="true">
              <span />
            </div>
            <p className="inference-panel-copy">
              Clinically meaningful pressure output aligned to paired invasive reference data.
            </p>
          </article>
        </div>

        <div className="inference-footer animate-in stagger-5" aria-label="Inference summary">
          <span>Optical recording</span>
          <span>Temporal pattern</span>
          <span>Learned mapping</span>
          <span>ICP estimate</span>
        </div>
      </div>
    </section>
  );
}
