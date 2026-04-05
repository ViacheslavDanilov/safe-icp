import Image from 'next/image';

export default function SlideBackup() {
  return (
    <section className="slide slide-backup" aria-labelledby="backup-title">
      <div className="slide-content backup-layout">
        <div className="backup-copy">
          <p className="hero-meta animate-in stagger-1">Reference Material</p>

          <h2 className="backup-title animate-in stagger-2" id="backup-title">
            Patient 48 is a useful stress test
            <span className="backup-title-accent">Shape fits. Coverage fails.</span>
          </h2>

          <p className="backup-lead animate-in stagger-3">
            Two claims that often get conflated: waveform tracking can look reasonable while
            predictive coverage remains critically under-calibrated.
          </p>
        </div>

        <div className="backup-gallery" aria-label="Patient 48 prediction figures">
          <p className="backup-gallery-label animate-in stagger-4">
            Patient 48 — prediction traces
          </p>

          <figure className="backup-card animate-in stagger-5">
            <div className="backup-card-head">
              <span>InceptionTime</span>
            </div>
            <Image
              className="backup-image"
              src="/slide-backup/prediction-inception-subject-48.png"
              alt="InceptionTime prediction versus true ICP for patient 48"
              width={6366}
              height={1567}
            />
          </figure>

          <figure className="backup-card animate-in stagger-6">
            <div className="backup-card-head">
              <span>mWDN</span>
            </div>
            <Image
              className="backup-image"
              src="/slide-backup/prediction-mwdn-subject-48.png"
              alt="mWDN prediction versus true ICP for patient 48"
              width={6366}
              height={1567}
            />
          </figure>

          <figure className="backup-card animate-in stagger-7">
            <div className="backup-card-head">
              <span>TCN</span>
            </div>
            <Image
              className="backup-image"
              src="/slide-backup/prediction-tcn-subject-48.png"
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
