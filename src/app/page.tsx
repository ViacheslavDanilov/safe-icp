import Image from 'next/image';

export default function Home() {
  return (
    <main className="deck presentation-shell">
      <section className="slide slide-hero" aria-labelledby="page-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">01 / 10</span>
        </div>

        <div className="slide-content">
          <div className="hero-copy">
            <p className="hero-meta">Seminar Opening / SafeICP</p>

            <h1 className="hero-title" id="page-title">
              A Safe Window Into
              <span className="hero-title-accent">Brain Pressure</span>
            </h1>

            <p className="hero-subtitle">
              Non-invasive intracranial pressure estimation through optical sensing and machine
              learning.
            </p>

            <p className="hero-tagline">A talk-first site about turning light into ICP insight.</p>
          </div>

          <figure
            className="hero-visual"
            aria-label="Abstract optical visualization of SafeICP sensing"
          >
            <div className="hero-visual-frame">
              <div className="optical-core">
                <div className="signal-pulse" />
              </div>

              <figcaption className="hero-legend">
                <span>Light</span>
                <span>Flow</span>
                <span>Pressure</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      <section className="slide slide-problem" aria-labelledby="problem-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">02 / 10</span>
        </div>

        <div className="slide-content problem-layout">
          <div className="problem-copy">
            <p className="hero-meta">Clinical Stakes / Why ICP Matters</p>

            <h2 className="problem-title" id="problem-title">
              The pressure matters.
              <span className="problem-title-accent">The measurement still hurts.</span>
            </h2>

            <p className="problem-lead">
              Intracranial pressure is a critical brain-health signal, but the gold standard still
              relies on invasive monitoring through a surgically placed sensor.
            </p>

            <p className="problem-support">
              That creates a hard clinical trade-off: the patients who most need visibility are
              often the same patients for whom infection, bleeding, tissue damage, or prolonged
              monitoring risk matter most.
            </p>

            <div className="problem-conditions" aria-label="Clinical contexts">
              <span>TBI</span>
              <span>Stroke</span>
              <span>Hydrocephalus</span>
              <span>Pediatrics</span>
            </div>
          </div>

          <div className="problem-panel" aria-label="Consequences of invasive ICP monitoring">
            <article className="problem-card">
              <p className="problem-card-index">01</p>
              <h3>Invasive by default</h3>
              <p>
                Direct ICP measurement still begins with intracranial access, not with a bedside
                sensor.
              </p>
            </article>

            <article className="problem-card">
              <p className="problem-card-index">02</p>
              <h3>Risk changes eligibility</h3>
              <p>
                Infection, bleeding, and tissue injury are not abstract side effects. They shape
                who gets monitored and for how long.
              </p>
            </article>

            <article className="problem-card">
              <p className="problem-card-index">03</p>
              <h3>Access becomes selective</h3>
              <p>
                Longitudinal follow-up, lower-acuity settings, and vulnerable populations lose
                access to continuous pressure insight.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="slide slide-system" aria-labelledby="system-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">03 / 10</span>
        </div>

        <div className="slide-content system-layout">
          <div className="system-copy">
            <p className="hero-meta">System View / What SafeICP Is</p>

            <h2 className="system-title" id="system-title">
              SafeICP is not only a device.
              <span className="system-title-accent">It is a measurement pipeline.</span>
            </h2>

            <p className="system-lead">
              SafeICP combines bedside optical sensing, signal interpretation, and machine
              learning-based ICP estimation into one non-invasive monitoring approach.
            </p>

            <p className="system-support">
              Instead of placing a pressure sensor inside the skull, the system captures
              hemodynamic dynamics optically and turns those temporal patterns into ICP-relevant
              insight.
            </p>

            <div className="consortium-strip" aria-label="Consortium contributors">
              <span>ICFO</span>
              <span>UPF</span>
              <span>VHIR</span>
              <span>Procarelight</span>
            </div>
          </div>

          <div className="system-board" aria-label="SafeICP system pipeline">
            <figure className="system-figure">
              <span className="system-figure-badge">Report Figure / SCOS Setup</span>
              <Image
                className="system-image"
                src="/safeicp-device.png"
                alt="Essential components of a fiber-coupled SCOS setup used in the SafeICP project"
                width={5342}
                height={3000}
                priority
              />
              <figcaption className="system-figure-caption">
                Real hardware context from the SafeICP report: a compact SCOS setup rather than a
                conceptual-only mockup.
              </figcaption>
            </figure>

            <div className="system-flow">
              <article className="system-card">
                <p className="system-card-label">Sense</p>
                <h3>Bedside optical capture</h3>
                <p>
                  Safe near-infrared light and a forehead probe acquire blood-flow-related signal.
                </p>
              </article>

              <article className="system-card">
                <p className="system-card-label">Read</p>
                <h3>Dynamic signal patterns</h3>
                <p>
                  Speckle and flow dynamics provide a non-invasive window into brain-related
                  behavior.
                </p>
              </article>

              <article className="system-card">
                <p className="system-card-label">Infer</p>
                <h3>ICP-relevant output</h3>
                <p>
                  Machine learning translates temporal structure into clinically meaningful pressure
                  insight.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="slide slide-sensing" aria-labelledby="sensing-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">04 / 10</span>
        </div>

        <div className="slide-content sensing-layout">
          <figure className="sensing-figure">
            <div className="sensing-figure-frame">
              <span className="sensing-figure-badge">Report Figure / Probe Context</span>
              <Image
                className="sensing-image"
                src="/safeicp-platform.png"
                alt="Illustration of an optical probe and an invasive ICP probe from the SafeICP report"
                width={640}
                height={360}
              />

              <div className="sensing-callout sensing-callout-optical">
                <span className="sensing-callout-index">01</span>
                <span className="sensing-callout-label">Optical probe</span>
              </div>

              <div className="sensing-callout sensing-callout-light">
                <span className="sensing-callout-index">02</span>
                <span className="sensing-callout-label">Light in</span>
              </div>

              <div className="sensing-callout sensing-callout-reference">
                <span className="sensing-callout-index">03</span>
                <span className="sensing-callout-label">Invasive reference</span>
              </div>
            </div>

            <figcaption className="sensing-caption">
              The report’s early device figure already frames the key contrast: optical sensing on
              the outside, pressure reference on the inside.
            </figcaption>
          </figure>

          <div className="sensing-copy">
            <p className="hero-meta">Device Logic / How It Sees Through the Skull</p>

            <h2 className="sensing-title" id="sensing-title">
              Light goes in.
              <span className="sensing-title-accent">Useful dynamics come back.</span>
            </h2>

            <p className="sensing-lead">
              SafeICP uses safe near-infrared illumination and a forehead probe to read out
              blood-flow-related behavior without placing the sensing hardware inside the skull.
            </p>

            <div className="sensing-steps" aria-label="Sensing steps">
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
                <p>Fluctuation patterns become a non-invasive signal linked to cerebral blood flow.</p>
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

      <section className="slide slide-inference" aria-labelledby="inference-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">05 / 10</span>
        </div>

        <div className="slide-content inference-layout">
          <div className="inference-copy">
            <p className="hero-meta">Inference Bridge / From Optical Signal To ICP</p>

            <h2 className="inference-title" id="inference-title">
              The device does not read pressure directly.
              <span className="inference-title-accent">It learns the mapping.</span>
            </h2>

            <p className="inference-lead">
              SafeICP measures optical dynamics tied to blood flow, not ICP itself. To produce a
              pressure estimate, the system needs a learned time-series translation from signal
              behavior to pressure behavior.
            </p>

            <div className="inference-note">
              <span className="inference-note-kicker">Why ML is needed</span>
              <p>
                The relationship is temporal, indirect, and patient-dependent enough that a simple
                one-to-one formula is not the point of the system.
              </p>
            </div>
          </div>

          <div className="inference-board" aria-label="Inference pipeline">
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

          <div className="inference-footer" aria-label="Inference summary">
            <span>Optical recording</span>
            <span>Temporal pattern</span>
            <span>Learned mapping</span>
            <span>ICP estimate</span>
          </div>
        </div>
      </section>

      <section className="slide slide-data" aria-labelledby="data-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">06 / 10</span>
        </div>

        <div className="slide-content data-layout">
          <div className="data-copy">
            <p className="hero-meta">ML Setup / Data And Models</p>

            <h2 className="data-title" id="data-title">
              The models learn from paired optical and invasive data.
              <span className="data-title-accent">The cohort is the setup.</span>
            </h2>

            <p className="data-lead">
              The learning problem is only credible because the optical recordings are paired with
              invasive ICP measurements. The dataset is centered on iNPH and expanded with Katzman
              infusion data to expose the models to broader pressure variation.
            </p>

            <div className="data-tags" aria-label="Setup tags">
              <span>iNPH-centered</span>
              <span>Paired optical + ICP</span>
              <span>Katzman expansion</span>
              <span>Time-series models</span>
            </div>
          </div>

          <div className="data-board" aria-label="ML setup overview">
            <div className="data-top">
              <article className="data-card data-card-core">
                <p className="data-card-label">Core analysis cohort</p>
                <h3>58 iNPH recordings</h3>
                <p>
                  The report frames the main analysis around 58 iNPH recordings with synchronized
                  optical and invasive measurements.
                </p>
              </article>

              <article className="data-card data-card-coverage">
                <p className="data-card-label">Training expansion</p>
                <h3>68 subjects / 52 valid</h3>
                <p>
                  The extended ML dataset adds curated subject filtering and Katzman infusion tests
                  to broaden ICP coverage.
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
                <p>Strong temporal feature extraction and the best overall accuracy in the report.</p>
              </article>

              <article className="model-card">
                <p className="model-card-label">Model family</p>
                <h3>mWDN</h3>
                <p>Wavelet-informed temporal modeling with a strong concentration of low-error predictions.</p>
              </article>

              <article className="model-card">
                <p className="model-card-label">Model family</p>
                <h3>TCN</h3>
                <p>Dilated temporal convolutions as a complementary baseline in the comparison set.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="slide slide-qualitative" aria-labelledby="qualitative-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">07 / 10</span>
        </div>

        <div className="slide-content qualitative-layout">
          <div className="qualitative-header">
            <div className="qualitative-copy">
              <p className="hero-meta">Qualitative Evidence / Model Behavior</p>

              <h2 className="qualitative-title" id="qualitative-title">
                The prediction tracks the shape,
                <span className="qualitative-title-accent">not just the average.</span>
              </h2>

              <p className="qualitative-lead">
                A representative InceptionTime example shows that the model follows the overall
                temporal behavior of invasive ICP well enough to make the learned relationship
                visually credible.
              </p>
            </div>

            <div className="qualitative-tags" aria-label="Key interpretation points">
              <span>Subject 08</span>
              <span>InceptionTime</span>
              <span>MAE 2.8 mmHg</span>
            </div>
          </div>

          <figure className="qualitative-figure">
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
                <span>The blue trace follows the broad temporal structure of the green ICP reference.</span>
              </div>

              <div className="qualitative-callout qualitative-callout-spike">
                <strong>Where it remains hard</strong>
                <span>Sharp transitions and spikes are still more difficult than baseline tracking.</span>
              </div>
            </div>

            <figcaption className="qualitative-caption">
              Real local result from the report materials: `predictions_InceptionTime_subject_08`.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="slide slide-metrics" aria-labelledby="metrics-title">
        <div className="hero-progress" aria-hidden="true">
          <span className="hero-progress-label">Slide</span>
          <span className="hero-progress-value">08 / 10</span>
        </div>

        <div className="slide-content metrics-layout">
          <div className="metrics-copy">
            <p className="hero-meta">Quantitative Evidence / Results And Metrics</p>

            <h2 className="metrics-title" id="metrics-title">
              Competitive error.
              <span className="metrics-title-accent">Cautious confidence.</span>
            </h2>

            <p className="metrics-lead">
              Across the main model comparison, SafeICP reaches clinically competitive error levels
              around 5.3 to 6.0 mmHg MAE. The stronger caution is uncertainty: the prediction
              intervals stay too narrow and miss the true ICP more often than they should.
            </p>

            <div className="metrics-kpi-strip" aria-label="Key quantitative takeaways">
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

            <div className="metrics-board" aria-label="Model comparison summary">
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

          <div className="metrics-visual">
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
                  <span>It has the highest share of low-error predictions in the report comparison.</span>
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
    </main>
  );
}
