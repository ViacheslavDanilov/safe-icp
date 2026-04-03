import Image from 'next/image';
import PresentationController from './components/PresentationController';

export default function Home() {
  return (
    <main className="presentation-shell">
      <PresentationController totalSlides={16}>
        <div className="deck">
          <section className="slide slide-prelude" aria-labelledby="prelude-title">
            <div className="slide-content prelude-layout">
              <div className="prelude-copy">
                <p className="hero-meta animate-in stagger-1">Presented By</p>

                <h1 className="prelude-title animate-in stagger-2" id="prelude-title">
                  Viacheslav Danilov, PhD
                </h1>

                <p className="prelude-role animate-in stagger-3">
                  ML/AI Engineer and Research Scientist
                </p>

                <p className="prelude-bio animate-in stagger-4">
                  Working at the intersection of AI, optical sensing, and translational health
                  technology.
                </p>

                <div className="prelude-strip animate-in stagger-5" aria-label="Speaker domains">
                  <span>AI Systems</span>
                  <span>Optical Sensing</span>
                  <span>Clinical ML</span>
                </div>
              </div>

              <figure className="prelude-visual animate-in stagger-4" aria-hidden="true">
                <div className="prelude-visual-shell">
                  <div className="prelude-video-frame">
                    <video
                      className="prelude-video"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      poster="/presenter-hero-poster.webp"
                    >
                      <source src="/presenter-hero-video.mp4" type="video/mp4" />
                    </video>
                  </div>

                  <figcaption className="prelude-affiliation">
                    <span>Pompeu Fabra University</span>
                    <span>Barcelona, Spain 🇪🇸</span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </section>

          <section className="slide slide-hero slide-alt" aria-labelledby="page-title">
            <div className="slide-content">
              <div className="hero-copy">
                <p className="hero-meta animate-in stagger-1">SafeICP</p>

                <h1 className="hero-title animate-in stagger-2" id="page-title">
                  A Safe Window Into
                  <span className="hero-title-accent">Brain Pressure</span>
                </h1>

                <p className="hero-subtitle animate-in stagger-3">
                  Non-invasive intracranial pressure estimation through optical sensing and machine
                  learning.
                </p>
              </div>

              <figure
                className="hero-visual animate-in stagger-4"
                aria-label="Optical forehead probe concept visual for SafeICP sensing"
              >
                <div className="hero-visual-frame">
                  <Image
                    className="hero-image"
                    src="/title-hero-visual.jpg"
                    alt="Close-up conceptual view of a compact optical probe placed on the forehead"
                    width={2048}
                    height={2048}
                    priority
                  />

                  <figcaption className="hero-legend">
                    <span>Optical</span>
                    <span>External</span>
                    <span>Non-invasive</span>
                  </figcaption>
                </div>
              </figure>
            </div>
          </section>

          <section className="slide slide-problem" aria-labelledby="problem-title">
            <div className="slide-content problem-layout">
              <div className="problem-copy">
                <p className="hero-meta animate-in stagger-1">Why ICP Matters</p>

                <h2 className="problem-title animate-in stagger-2" id="problem-title">
                  The pressure matters.
                  <span className="problem-title-accent">The measurement still hurts.</span>
                </h2>

                <p className="problem-lead animate-in stagger-3">
                  Intracranial pressure is a critical brain-health signal, but the gold standard
                  still relies on invasive monitoring through a surgically placed sensor.
                </p>

                <div
                  className="problem-conditions animate-in stagger-4"
                  aria-label="Clinical contexts"
                >
                  <span>TBI</span>
                  <span>Stroke</span>
                  <span>Hydrocephalus</span>
                  <span>Pediatrics</span>
                </div>
              </div>

              <div
                className="problem-cascade"
                aria-label="Cascade of invasive ICP monitoring consequences"
              >
                <div className="problem-cascade-step cascade-reveal cascade-reveal-1">
                  <div className="problem-cascade-marker" aria-hidden="true">
                    <span className="problem-cascade-dot" />
                  </div>
                  <div className="problem-cascade-content">
                    <h3 className="problem-cascade-title">Surgical Access</h3>
                    <p className="problem-cascade-desc">
                      Measurement requires drilling into the skull.
                    </p>
                  </div>
                </div>

                <div className="problem-cascade-step cascade-reveal cascade-reveal-2">
                  <div className="problem-cascade-marker" aria-hidden="true">
                    <span className="problem-cascade-dot" />
                  </div>
                  <div className="problem-cascade-content">
                    <h3 className="problem-cascade-title">Infection Risk</h3>
                    <p className="problem-cascade-desc">
                      Every inserted sensor carries bleeding and contamination risk.
                    </p>
                  </div>
                </div>

                <div className="problem-cascade-step cascade-reveal cascade-reveal-3">
                  <div className="problem-cascade-marker" aria-hidden="true">
                    <span className="problem-cascade-dot" />
                  </div>
                  <div className="problem-cascade-content">
                    <h3 className="problem-cascade-title">Limited Eligibility</h3>
                    <p className="problem-cascade-desc">
                      Procedural risk decides who gets monitored and for how long.
                    </p>
                  </div>
                </div>

                <div className="problem-cascade-step problem-cascade-step-end cascade-reveal cascade-reveal-4">
                  <div className="problem-cascade-marker" aria-hidden="true">
                    <span className="problem-cascade-dot problem-cascade-dot-end" />
                  </div>
                  <div className="problem-cascade-content">
                    <h3 className="problem-cascade-title problem-cascade-title-end">
                      Reduced Monitoring
                    </h3>
                    <p className="problem-cascade-desc">
                      Vulnerable patients and lower-acuity settings lose continuous insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide slide-contrast slide-alt" aria-labelledby="contrast-title">
            <div className="slide-content contrast-layout">
              <div className="contrast-header">
                <p className="hero-meta animate-in stagger-1">Clinical Contrast</p>

                <h2 className="contrast-title animate-in stagger-2" id="contrast-title">
                  The gold standard goes in.
                  <span className="contrast-title-accent">The safer vision stays outside.</span>
                </h2>
              </div>

              <div
                className="contrast-board animate-in stagger-3"
                aria-label="Comparison between invasive and non-invasive monitoring"
              >
                <figure className="contrast-card contrast-card-invasive">
                  <div className="contrast-image-frame">
                    <video
                      className="contrast-image contrast-image-invasive"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/measurement-invasive.jpg"
                    >
                      <source src="/measurement-invasive.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="contrast-card-copy">
                    <p className="contrast-card-label">Gold Standard</p>
                    <h3>Invasive intracranial sensor placement</h3>
                    <p className="contrast-card-desc">
                      Direct ICP sensing is clinically trusted because it measures from inside the
                      skull, but that same access makes the workflow invasive, resource-heavy, and
                      unsuitable for many monitoring scenarios.
                    </p>
                  </figcaption>
                </figure>

                <figure className="contrast-card contrast-card-noninvasive">
                  <div className="contrast-image-frame">
                    <video
                      className="contrast-image contrast-image-noninvasive"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      poster="/measurement-noninvasive.jpg"
                    >
                      <source src="/measurement-noninvasive.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="contrast-card-copy">
                    <p className="contrast-card-label">SafeICP Direction</p>
                    <h3>External optical sensing at the bedside</h3>
                    <p className="contrast-card-desc">
                      SafeICP reframes the measurement problem: keep the signal outside the skull,
                      at the bedside, and recover ICP-relevant information through optical sensing
                      plus machine learning.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="slide slide-system" aria-labelledby="system-title">
            <div className="slide-content system-layout">
              <div className="system-copy">
                <p className="hero-meta animate-in stagger-1">What SafeICP Is</p>

                <h2 className="system-title animate-in stagger-2" id="system-title">
                  SafeICP is not only a device.
                  <span className="system-title-accent">It is a measurement pipeline.</span>
                </h2>

                <p className="system-lead animate-in stagger-3">
                  SafeICP combines bedside optical sensing, signal interpretation, and machine
                  learning-based ICP estimation into one non-invasive monitoring approach.
                </p>
              </div>

              <div
                className="system-board animate-in stagger-5"
                aria-label="SafeICP system pipeline"
              >
                <figure className="system-figure">
                  <span className="system-figure-badge">SCOS Sensing Principle</span>
                  <Image
                    className="system-image"
                    src="/safeicp-device.png"
                    alt="Diagram of fiber-coupled SCOS setup: NIR laser, optical fiber, forehead probe, tissue interaction zone, and CMOS sensor"
                    width={5342}
                    height={3000}
                    priority
                  />
                </figure>

                <div className="system-flow">
                  <article className="system-card">
                    <p className="system-card-label">Sense</p>
                    <h3>Bedside optical capture</h3>
                    <p>NIR light and a forehead probe acquire blood-flow signal.</p>
                  </article>

                  <article className="system-card">
                    <p className="system-card-label">Read</p>
                    <h3>Dynamic signal patterns</h3>
                    <p>Speckle dynamics reveal cerebral hemodynamic behavior.</p>
                  </article>

                  <article className="system-card">
                    <p className="system-card-label">Infer</p>
                    <h3>ICP-relevant output</h3>
                    <p>ML maps temporal patterns to pressure estimates.</p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="slide slide-hardware slide-alt" aria-labelledby="hardware-title">
            <div className="slide-content hardware-layout">
              <div className="hardware-header">
                <p className="hero-meta animate-in stagger-1">Hardware Translation</p>

                <h2 className="hardware-title animate-in stagger-2" id="hardware-title">
                  From lab rig to bedside device.
                  <span className="hardware-title-accent">The form factor changed.</span>
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
                      poster="/legacy-dcs-device.jpg"
                    >
                      <source src="/legacy-dcs-device.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="hardware-card-copy">
                    <p className="hardware-card-label">Legacy platform</p>
                    <h3>Rack-based DCS research system</h3>
                    <p className="hardware-card-body">
                      Large footprint, exposed instrumentation, and cable-heavy integration make the
                      setup scientifically capable but operationally hard to translate.
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
                      poster="/compact-scos-device.jpg"
                    >
                      <source src="/compact-scos-device.mp4" type="video/mp4" />
                    </video>
                  </div>
                  <figcaption className="hardware-card-copy">
                    <p className="hardware-card-label">SafeICP direction</p>
                    <h3>Compact SCOS bedside-oriented device</h3>
                    <p className="hardware-card-body">
                      Smaller, more integrated hardware moves the same sensing ambition toward a
                      form factor that feels more credible for bedside and longitudinal use.
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section className="slide slide-sensing" aria-labelledby="sensing-title">
            <div className="slide-content sensing-layout">
              <figure className="sensing-figure animate-in stagger-1">
                <div className="sensing-figure-frame">
                  <span className="sensing-figure-badge">Probe Context</span>
                  <Image
                    className="sensing-image"
                    src="/safeicp-sensing-device.jpg"
                    alt="Scientific illustration showing external optical sensing and invasive ICP reference context"
                    width={2730}
                    height={1536}
                  />
                </div>

                <figcaption className="sensing-caption">
                  A probe-context figure showing the key sensing logic: optical measurement from
                  outside the skull, with ICP referenced from the inside.
                </figcaption>
              </figure>

              <div className="sensing-copy">
                <p className="hero-meta animate-in stagger-2">Device Logic</p>

                <h2 className="sensing-title animate-in stagger-3" id="sensing-title">
                  Light goes in.
                  <span className="sensing-title-accent">Useful dynamics come back.</span>
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
                      Fluctuation patterns become a non-invasive signal linked to cerebral blood
                      flow.
                    </p>
                  </article>
                </div>

                <div className="sensing-signal-bar" aria-hidden="true">
                  <span>Probe</span>
                  <span>Light</span>
                  <span>Speckle</span>
                  <span>Flow Signal</span>
                </div>
              </div>
            </div>
          </section>

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
                    The relationship is temporal, indirect, and patient-dependent enough that a
                    simple one-to-one formula is not the point of the system.
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

          <section className="slide slide-data" aria-labelledby="data-title">
            <div className="slide-content data-layout">
              <div className="data-copy">
                <p className="hero-meta animate-in stagger-1">ML Setup</p>

                <h2 className="data-title animate-in stagger-2" id="data-title">
                  The models learn from paired optical and invasive data.
                  <span className="data-title-accent">The cohort is the setup.</span>
                </h2>

                <p className="data-lead animate-in stagger-3">
                  The learning problem is only credible because the optical recordings are paired
                  with invasive ICP measurements. The dataset is centered on iNPH and expanded with
                  Katzman infusion data to expose the models to broader pressure variation.
                </p>

                <div className="data-tags animate-in stagger-4" aria-label="Setup tags">
                  <span>iNPH-centered</span>
                  <span>Paired optical + ICP</span>
                  <span>Katzman expansion</span>
                  <span>Time-series models</span>
                </div>
              </div>

              <div className="data-board animate-in stagger-5" aria-label="ML setup overview">
                <div className="data-top">
                  <article className="data-card data-card-core">
                    <p className="data-card-label">Core analysis cohort</p>
                    <h3>58 iNPH recordings</h3>
                    <p>
                      The report frames the main analysis around 58 iNPH recordings with
                      synchronized optical and invasive measurements.
                    </p>
                  </article>

                  <article className="data-card data-card-coverage">
                    <p className="data-card-label">Training expansion</p>
                    <h3>68 subjects / 52 valid</h3>
                    <p>
                      The extended ML dataset adds curated subject filtering and Katzman infusion
                      tests to broaden ICP coverage.
                    </p>
                  </article>
                </div>

                <article className="data-pairing">
                  <p className="data-card-label">What each training sample needs</p>
                  <div className="data-pairing-row">
                    <span className="data-pill data-pill-optical">Optical signal window</span>
                    <span className="data-pairing-link">paired with</span>
                    <span className="data-pill data-pill-icp">Invasive ICP reference</span>
                  </div>
                </article>

                <div className="model-strip" aria-label="Model families">
                  <article className="model-card">
                    <p className="model-card-label">Model family</p>
                    <h3>InceptionTime</h3>
                    <p>
                      Strong temporal feature extraction and the best overall accuracy in the
                      report.
                    </p>
                  </article>

                  <article className="model-card">
                    <p className="model-card-label">Model family</p>
                    <h3>mWDN</h3>
                    <p>
                      Wavelet-informed temporal modeling with a strong concentration of low-error
                      predictions.
                    </p>
                  </article>

                  <article className="model-card">
                    <p className="model-card-label">Model family</p>
                    <h3>TCN</h3>
                    <p>
                      Dilated temporal convolutions as a complementary baseline in the comparison
                      set.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section
            className="slide slide-qualitative slide-alt"
            aria-labelledby="qualitative-title"
          >
            <div className="slide-content qualitative-layout">
              <div className="qualitative-header">
                <div className="qualitative-copy">
                  <p className="hero-meta animate-in stagger-1">
                    Qualitative Evidence / Model Behavior
                  </p>

                  <h2 className="qualitative-title animate-in stagger-2" id="qualitative-title">
                    The prediction tracks the shape,
                    <span className="qualitative-title-accent">not just the average.</span>
                  </h2>

                  <p className="qualitative-lead animate-in stagger-3">
                    A representative InceptionTime example shows that the model follows the overall
                    temporal behavior of invasive ICP well enough to make the learned relationship
                    visually credible.
                  </p>
                </div>

                <div
                  className="qualitative-tags animate-in stagger-4"
                  aria-label="Key interpretation points"
                >
                  <span>Subject 08</span>
                  <span>InceptionTime</span>
                  <span>MAE 2.8 mmHg</span>
                </div>
              </div>

              <figure className="qualitative-figure animate-in stagger-5">
                <div className="qualitative-figure-frame">
                  <Image
                    className="qualitative-image"
                    src="/prediction-subject-08.png"
                    alt="Prediction versus true ICP for subject 08 using the InceptionTime model"
                    width={6366}
                    height={1567}
                  />

                  <div className="qualitative-callout qualitative-callout-track">
                    <strong>What to notice</strong>
                    <span>
                      The blue trace follows the broad temporal structure of the green ICP
                      reference.
                    </span>
                  </div>

                  <div className="qualitative-callout qualitative-callout-spike">
                    <strong>Where it remains hard</strong>
                    <span>
                      Sharp transitions and spikes are still more difficult than baseline tracking.
                    </span>
                  </div>
                </div>

                <figcaption className="qualitative-caption">
                  Real local result from the report materials:
                  `predictions_InceptionTime_subject_08`.
                </figcaption>
              </figure>
            </div>
          </section>

          <section className="slide slide-metrics" aria-labelledby="metrics-title">
            <div className="slide-content metrics-layout">
              <div className="metrics-copy">
                <p className="hero-meta animate-in stagger-1">Quantitative Evidence / Results</p>

                <h2 className="metrics-title animate-in stagger-2" id="metrics-title">
                  Competitive error.
                  <span className="metrics-title-accent">Cautious confidence.</span>
                </h2>

                <p className="metrics-lead animate-in stagger-3">
                  Across the main model comparison, SafeICP reaches clinically competitive error
                  levels around 5.3 to 6.0 mmHg MAE. The stronger caution is uncertainty: the
                  prediction intervals stay too narrow and miss the true ICP more often than they
                  should.
                </p>

                <div
                  className="metrics-kpi-strip animate-in stagger-4"
                  aria-label="Key quantitative takeaways"
                >
                  <article className="metrics-kpi metrics-kpi-cool">
                    <p className="metrics-kpi-label">Best overall MAE</p>
                    <h3>5.3 mmHg</h3>
                    <p>InceptionTime, right hemisphere.</p>
                  </article>

                  <article className="metrics-kpi metrics-kpi-warm">
                    <p className="metrics-kpi-label">Low-error concentration</p>
                    <h3>52%</h3>
                    <p>mWDN predictions fall within 0 to 4 mmHg.</p>
                  </article>

                  <article className="metrics-kpi metrics-kpi-neutral">
                    <p className="metrics-kpi-label">Calibration warning</p>
                    <h3>PICP 8% to 37%</h3>
                    <p>Far below the nominal 95% interval target.</p>
                  </article>
                </div>

                <div
                  className="metrics-board animate-in stagger-5"
                  aria-label="Model comparison summary"
                >
                  <div className="metrics-board-head">
                    <span>Model</span>
                    <span>MAE L</span>
                    <span>MAE R</span>
                    <span>Reading</span>
                  </div>

                  <article className="metrics-row">
                    <h3>InceptionTime</h3>
                    <p>6.3</p>
                    <p>5.3</p>
                    <span>Best overall MAE.</span>
                  </article>

                  <article className="metrics-row">
                    <h3>mWDN</h3>
                    <p>6.0</p>
                    <p>5.4</p>
                    <span>Most dense low-error zone.</span>
                  </article>

                  <article className="metrics-row">
                    <h3>TCN</h3>
                    <p>7.1</p>
                    <p>5.6</p>
                    <span>Useful comparator, but weaker accuracy.</span>
                  </article>
                </div>

                <div className="metrics-calibration" aria-label="Uncertainty interpretation">
                  <div className="metrics-calibration-copy">
                    <p className="metrics-calibration-label">Uncertainty read</p>
                    <p>
                      Narrow intervals look precise, but low PICP means they are under-covering the
                      truth. The system is promising on accuracy before it is mature on calibration.
                    </p>
                  </div>

                  <div className="metrics-calibration-scale" aria-hidden="true">
                    <span className="metrics-calibration-target">95% target coverage</span>
                    <div className="metrics-calibration-bar">
                      <span className="metrics-calibration-observed">Observed 8% to 37%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="metrics-visual animate-in stagger-5">
                <figure className="metrics-figure">
                  <div className="metrics-figure-frame">
                    <span className="metrics-figure-badge">Report Figure / Error Distribution</span>
                    <Image
                      className="metrics-image"
                      src="/error-distribution-mwdn.png"
                      alt="mWDN error distribution histogram and cumulative accuracy curve from the SafeICP report"
                      width={2800}
                      height={2800}
                    />

                    <div className="metrics-figure-callout metrics-figure-callout-main">
                      <strong>Why show mWDN here</strong>
                      <span>
                        It has the highest share of low-error predictions in the report comparison.
                      </span>
                    </div>

                    <div className="metrics-figure-callout metrics-figure-callout-highlight">
                      <strong>52% within 0-4 mmHg</strong>
                      <span>And 100% within 0-14 mmHg in the reported distribution.</span>
                    </div>
                  </div>

                  <figcaption className="metrics-caption">
                    Real local figure from the report materials: `error_distributions_mWDN_fold_3`.
                  </figcaption>
                </figure>

                <div className="metric-chip-strip" aria-label="Metric explainer chips">
                  <article className="metric-chip">
                    <p className="metric-chip-label">MAE</p>
                    <p>Typical absolute ICP error in mmHg.</p>
                  </article>

                  <article className="metric-chip">
                    <p className="metric-chip-label">PICP</p>
                    <p>How often the true ICP lands inside the predicted interval.</p>
                  </article>

                  <article className="metric-chip">
                    <p className="metric-chip-label">MPIW</p>
                    <p>How wide that uncertainty band is on average.</p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          <section className="slide slide-meaning slide-alt" aria-labelledby="meaning-title">
            <div className="slide-content meaning-layout">
              <div className="meaning-copy">
                <p className="hero-meta animate-in stagger-1">Interpretation</p>

                <h2 className="meaning-title animate-in stagger-2" id="meaning-title">
                  The pipeline is credible.
                  <span className="meaning-title-accent">
                    The hard clinical edge case is not solved yet.
                  </span>
                </h2>

                <p className="meaning-lead animate-in stagger-3">
                  SafeICP has already shown something substantial: non-invasive optical recordings
                  can be turned into ICP-relevant estimates with competitive error and meaningful
                  temporal tracking. What remains incomplete is the part that matters most for
                  high-stakes deployment: elevated-ICP coverage and trustworthy uncertainty.
                </p>

                <div className="meaning-verdict animate-in stagger-4">
                  <p className="meaning-verdict-label">Balanced read</p>
                  <p className="meaning-verdict-copy">
                    This is a strong proof-of-principle translational result, not a finished
                    clinical monitor.
                  </p>

                  <div className="meaning-tag-strip" aria-label="Interpretation tags">
                    <span>5-6 mmHg MAE</span>
                    <span>120+ synchronized patients</span>
                    <span>70% B-wave expert agreement</span>
                  </div>
                </div>
              </div>

              <div
                className="meaning-grid animate-in stagger-5"
                aria-label="Interpretation summary"
              >
                <article className="meaning-card meaning-card-demonstrated">
                  <p className="meaning-card-label">Demonstrated</p>
                  <h3>What is already real</h3>

                  <div className="meaning-points">
                    <p>Clinically competitive ICP estimation accuracy around 5 to 6 mmHg MAE.</p>
                    <p>
                      Meaningful tracking of temporal ICP behavior rather than static value
                      guessing.
                    </p>
                    <p>The largest synchronized optical-ICP dataset in the project materials.</p>
                  </div>
                </article>

                <article className="meaning-card meaning-card-limited">
                  <p className="meaning-card-label">Still Limited</p>
                  <h3>Where caution is still required</h3>

                  <div className="meaning-points">
                    <p>
                      High-ICP cases remain too sparse for robust intracranial hypertension
                      classification.
                    </p>
                    <p>
                      Prediction intervals are under-calibrated, with coverage well below the 95%
                      target.
                    </p>
                    <p>
                      Sharp spikes and elevated-range behavior are harder than baseline dynamics.
                    </p>
                  </div>
                </article>

                <article className="meaning-card meaning-card-impact">
                  <p className="meaning-card-label">Why It Matters</p>
                  <h3>Why this still changes the field</h3>

                  <div className="meaning-points">
                    <p>
                      It makes bedside, repeatable, non-invasive ICP monitoring technically
                      credible.
                    </p>
                    <p>It creates a platform that can improve through broader multi-center data.</p>
                    <p>
                      It gives clinical translation a foundation in devices, data, and partnerships.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="slide slide-future" aria-labelledby="future-title">
            <div className="slide-content future-layout">
              <div className="future-copy">
                <p className="hero-meta animate-in stagger-1">Impact And Next Steps</p>

                <h2 className="future-title animate-in stagger-2" id="future-title">
                  SafeICP makes non-invasive ICP monitoring
                  <span className="future-title-accent">a realistic clinical path.</span>
                </h2>

                <p className="future-lead animate-in stagger-3">
                  The project already established the hard foundations: working bedside prototypes,
                  synchronized optical and invasive datasets, clinically competitive accuracy, and a
                  multi-center collaboration path. The next gains are now less about invention and
                  more about scaling, calibration, and translation.
                </p>

                <div className="future-anchor animate-in stagger-4">
                  <p className="future-anchor-label">Closing idea</p>
                  <p className="future-anchor-copy">
                    The question is no longer whether optical ICP estimation is worth taking
                    seriously. It is how fast the field can turn this foundation into a safer
                    monitoring option.
                  </p>
                </div>

                <div
                  className="future-tag-strip animate-in stagger-5"
                  aria-label="Core impact tags"
                >
                  <span>Bedside prototypes</span>
                  <span>Multi-center expansion</span>
                  <span>Path to 3 mmHg target</span>
                </div>
              </div>

              <div className="future-board animate-in stagger-5" aria-label="Impact and roadmap">
                <div className="future-impact-grid">
                  <article className="future-impact-card">
                    <p className="future-impact-label">Scientific</p>
                    <h3>New measurement class</h3>
                    <p>
                      Optical waveforms carry ICP-relevant information and support data-driven
                      estimation.
                    </p>
                  </article>

                  <article className="future-impact-card">
                    <p className="future-impact-label">Clinical</p>
                    <h3>Safer access to monitoring</h3>
                    <p>
                      Bedside, repeatable monitoring becomes plausible beyond only invasive
                      settings.
                    </p>
                  </article>

                  <article className="future-impact-card">
                    <p className="future-impact-label">Translational</p>
                    <h3>Built to continue</h3>
                    <p>
                      Prototypes, hospital partnerships, and validated workflows already exist for
                      the next phase.
                    </p>
                  </article>
                </div>

                <div className="future-roadmap">
                  <div className="future-roadmap-head">
                    <p className="future-roadmap-label">Next-step roadmap</p>
                    <p>From proof-of-principle to deployable monitor.</p>
                  </div>

                  <div className="future-roadmap-track" aria-hidden="true">
                    <span />
                  </div>

                  <div className="future-roadmap-steps">
                    <article className="future-step">
                      <p className="future-step-index">01</p>
                      <h3>Broaden the data</h3>
                      <p>Expand high-ICP and multi-hospital cohorts.</p>
                    </article>

                    <article className="future-step">
                      <p className="future-step-index">02</p>
                      <h3>Improve confidence</h3>
                      <p>Calibrate uncertainty and strengthen elevated-range behavior.</p>
                    </article>

                    <article className="future-step">
                      <p className="future-step-index">03</p>
                      <h3>Refine the product</h3>
                      <p>Sharpen use cases, anatomical corrections, and workflow fit.</p>
                    </article>

                    <article className="future-step">
                      <p className="future-step-index">04</p>
                      <h3>Translate clinically</h3>
                      <p>Fund regulatory steps and clinical-trial readiness.</p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide slide-collab slide-alt" aria-labelledby="collab-title">
            <div className="slide-content collab-layout">
              <div className="collab-header">
                <p className="hero-meta animate-in stagger-1">The Consortium</p>

                <h2 className="collab-title animate-in stagger-2" id="collab-title">
                  Four partners covering
                  <span className="collab-title-accent">the whole translation chain.</span>
                </h2>
              </div>

              <div
                className="collab-org-grid animate-in stagger-3"
                aria-label="Consortium partners"
              >
                <article className="collab-org-card">
                  <div className="collab-org-logo-frame">
                    <Image
                      className="collab-org-logo"
                      src="/icfo.png"
                      alt="ICFO logo"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="collab-org-info">
                    <p className="collab-org-role">Photonics &amp; Device</p>
                    <h3>ICFO</h3>
                    <p className="collab-org-desc">
                      SCOS hardware, optical sensing, and compact prototype design.
                    </p>
                  </div>
                </article>

                <article className="collab-org-card">
                  <div className="collab-org-logo-frame">
                    <Image
                      className="collab-org-logo"
                      src="/upf.png"
                      alt="UPF logo"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="collab-org-info">
                    <p className="collab-org-role">Machine Learning</p>
                    <h3>UPF</h3>
                    <p className="collab-org-desc">
                      Time-series models, evaluation logic, and uncertainty analysis.
                    </p>
                  </div>
                </article>

                <article className="collab-org-card">
                  <div className="collab-org-logo-frame">
                    <Image
                      className="collab-org-logo"
                      src="/vhir.png"
                      alt="VHIR logo"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="collab-org-info">
                    <p className="collab-org-role">Clinical Translation</p>
                    <h3>VHIR</h3>
                    <p className="collab-org-desc">
                      Bedside recruitment, validation protocols, and hospital workflows.
                    </p>
                  </div>
                </article>

                <article className="collab-org-card">
                  <div className="collab-org-logo-frame">
                    <Image
                      className="collab-org-logo"
                      src="/pcl.png"
                      alt="ProCareLight logo"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="collab-org-info">
                    <p className="collab-org-role">Industrial Validation</p>
                    <h3>ProCareLight</h3>
                    <p className="collab-org-desc">
                      Safety engineering and product-oriented device validation.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          <section className="slide slide-team slide-alt" aria-labelledby="team-title">
            <div className="slide-content team-layout">
              <div className="team-header">
                <p className="hero-meta animate-in stagger-1">The Team</p>

                <h2 className="team-title animate-in stagger-2" id="team-title">
                  The people behind{' '}
                  <span className="team-title-accent">SafeICP</span>
                </h2>
              </div>

              <div className="team-grid animate-in stagger-3" aria-label="Team members">
                <div className="team-group">
                  <p className="team-group-label">Institute of Photonic Sciences</p>
                  <div className="team-members">
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/turgut-durduran.png"
                        alt="Turgut Durduran"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Turgut<br />Durduran</p>
                        <p className="team-role">Principal Investigator</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/mirko-fornasier.png"
                        alt="Mirko Fornasier"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Mirko<br />Fornasier</p>
                        <p className="team-role">Doctoral Researcher</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/carolina-vega.png"
                        alt="Carolina Vega"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Carolina<br />Vega</p>
                        <p className="team-role">Doctoral Researcher</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/monica-torrecilla.png"
                        alt="Monica Torrecilla"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Monica<br />Torrecilla</p>
                        <p className="team-role">Doctoral Researcher</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="team-group">
                  <p className="team-group-label">Pompeu Fabra University</p>
                  <div className="team-members">
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/viacheslav-danilov.png"
                        alt="Viacheslav Danilov"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Viacheslav<br />Danilov</p>
                        <p className="team-role">Research Scientist</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/gemma-piella.png"
                        alt="Gemma Piella"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Gemma<br />Piella</p>
                        <p className="team-role">Professor</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/anton-makoveev.png"
                        alt="Anton Makoveev"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Anton<br />Makoveev</p>
                        <p className="team-role">Postdoctoral Researcher</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="team-group">
                  <p className="team-group-label">Vall d'Hebron Hospital</p>
                  <div className="team-members">
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/maria-poca.png"
                        alt="Maria A. Poca"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Maria<br />Poca</p>
                        <p className="team-role">Head of Neurosurgery</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/juan-sahuquillo.png"
                        alt="Juan Sahuquillo"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Juan<br />Sahuquillo</p>
                        <p className="team-role">Neurosurgeon</p>
                      </figcaption>
                    </figure>
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/murad-al-nusaif.png"
                        alt="Murad Al-Nusaif"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Murad<br />Al-Nusaif</p>
                        <p className="team-role">Doctoral Researcher</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>

                <div className="team-group">
                  <p className="team-group-label">ProCareLight</p>
                  <div className="team-members">
                    <figure className="team-member">
                      <Image
                        className="team-avatar"
                        src="/team/youcef-lebour.png"
                        alt="Youcef Lebour"
                        width={200}
                        height={200}
                      />
                      <figcaption>
                        <p className="team-name">Youcef<br />Lebour</p>
                        <p className="team-role">Research Engineer</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="slide slide-backup" aria-labelledby="backup-title">
            <div className="slide-content backup-layout">
              <div className="backup-copy">
                <p className="hero-meta animate-in stagger-1">
                  Reference / Extra Results and Figures
                </p>

                <h2 className="backup-title animate-in stagger-2" id="backup-title">
                  Patient 48 is a useful stress test.
                  <span className="backup-title-accent">
                    The waveforms look plausible before the intervals become trustworthy.
                  </span>
                </h2>

                <p className="backup-lead animate-in stagger-3">
                  This backup page holds the stricter uncertainty example from the report. It is
                  useful during discussion because it separates two claims that can otherwise get
                  conflated: waveform tracking can be reasonable while predictive coverage remains
                  too low.
                </p>

                <div
                  className="backup-metric-board animate-in stagger-4"
                  aria-label="Patient 48 backup metrics"
                >
                  <article className="backup-metric">
                    <p className="backup-metric-label">InceptionTime</p>
                    <h3>MAE 4.4</h3>
                    <p>MPIW 2.5 mmHg, but PICP only 8%.</p>
                  </article>

                  <article className="backup-metric">
                    <p className="backup-metric-label">mWDN</p>
                    <h3>PICP 19%</h3>
                    <p>Coverage improves slightly, still far below the 95% target.</p>
                  </article>

                  <article className="backup-metric">
                    <p className="backup-metric-label">Why keep this page</p>
                    <h3>Post-talk comparison</h3>
                    <p>
                      Architecture-specific prediction traces belong in the reference layer, not the
                      live core.
                    </p>
                  </article>
                </div>
              </div>

              <div
                className="backup-gallery animate-in stagger-5"
                aria-label="Additional prediction figures"
              >
                <figure className="backup-card">
                  <div className="backup-card-head">
                    <span>InceptionTime</span>
                    <span>Patient 48</span>
                  </div>
                  <Image
                    className="backup-image"
                    src="/prediction-inception-subject-48.png"
                    alt="InceptionTime prediction versus true ICP for patient 48"
                    width={6366}
                    height={1567}
                  />
                </figure>

                <figure className="backup-card">
                  <div className="backup-card-head">
                    <span>mWDN</span>
                    <span>Patient 48</span>
                  </div>
                  <Image
                    className="backup-image"
                    src="/prediction-mwdn-subject-48.png"
                    alt="mWDN prediction versus true ICP for patient 48"
                    width={6366}
                    height={1567}
                  />
                </figure>

                <figure className="backup-card">
                  <div className="backup-card-head">
                    <span>TCN</span>
                    <span>Patient 48</span>
                  </div>
                  <Image
                    className="backup-image"
                    src="/prediction-tcn-subject-48.png"
                    alt="TCN prediction versus true ICP for patient 48"
                    width={6366}
                    height={1567}
                  />
                </figure>
              </div>
            </div>
          </section>
        </div>
      </PresentationController>
    </main>
  );
}
