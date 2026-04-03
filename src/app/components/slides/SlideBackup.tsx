import Image from 'next/image';

export default function SlideBackup() {
  return (
    <section className="slide slide-backup" aria-labelledby="backup-title">
      <div className="slide-content backup-layout">
        <div className="backup-copy">
          <p className="hero-meta animate-in stagger-1">Reference / Extra Results and Figures</p>

          <h2 className="backup-title animate-in stagger-2" id="backup-title">
            Patient 48 is a useful stress test
            <span className="backup-title-accent">
              The waveforms look plausible before the intervals become trustworthy
            </span>
          </h2>

          <p className="backup-lead animate-in stagger-3">
            This backup page holds the stricter uncertainty example from the report. It is useful
            during discussion because it separates two claims that can otherwise get conflated:
            waveform tracking can be reasonable while predictive coverage remains too low.
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
                Architecture-specific prediction traces belong in the reference layer, not the live
                core.
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
              src="/images/results/prediction-inception-subject-48.png"
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
              src="/images/results/prediction-mwdn-subject-48.png"
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
              src="/images/results/prediction-tcn-subject-48.png"
              alt="TCN prediction versus true ICP for patient 48"
              width={6366}
              height={1567}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
