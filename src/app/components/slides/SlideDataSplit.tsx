export default function SlideDataSplit() {
  return (
    <section className="slide slide-datasplit" aria-labelledby="datasplit-title">
      <div className="slide-content datasplit-layout">
        <div className="datasplit-copy">
          <p className="hero-meta animate-in stagger-1">Data Preparation</p>

          <h2 className="datasplit-title animate-in stagger-2" id="datasplit-title">
            Two-level stratified splitting
            <span className="datasplit-title-accent">No data leakage between subjects</span>
          </h2>

          <p className="datasplit-lead animate-in stagger-3">
            Subjects are first split at the patient level using K-means stratification on BFI and ICP
            statistics, then each training subject is internally split into 5 folds for
            cross-validation. Both hemispheres from the same patient always stay in the same set.
          </p>
        </div>

        <div className="datasplit-board" aria-label="Splitting pipeline">
          <article className="datasplit-stage animate-in stagger-3">
            <div className="datasplit-stage-header">
              <span className="datasplit-stage-number">1</span>
              <div>
                <p className="datasplit-stage-label">Subject-Level Split</p>
                <h3>Stratified K-means clustering</h3>
              </div>
            </div>
            <p className="datasplit-stage-copy">
              3 clusters are formed from per-subject statistics (mean, std, median, Q1, Q3, IQR of
              BFI and ICP). Subjects are then allocated 80/20 to train+val and test, preserving
              cohort distribution.
            </p>
            <div className="datasplit-stage-stats">
              <span className="datasplit-stat">
                <strong>54</strong> train+val subjects
              </span>
              <span className="datasplit-stat">
                <strong>14</strong> test subjects
              </span>
              <span className="datasplit-stat">
                <strong>3</strong> clusters
              </span>
            </div>
          </article>

          <div className="datasplit-arrow animate-in stagger-4" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>

          <article className="datasplit-stage animate-in stagger-5">
            <div className="datasplit-stage-header">
              <span className="datasplit-stage-number">2</span>
              <div>
                <p className="datasplit-stage-label">Within-Subject Split</p>
                <h3>5-fold random cross-validation</h3>
              </div>
            </div>
            <p className="datasplit-stage-copy">
              Each measurement in the train+val set is independently split into 5 folds with 80%
              training and 20% validation per fold. This produces 5 separate train/val assignments
              per recording.
            </p>
            <div className="datasplit-stage-stats">
              <span className="datasplit-stat">
                <strong>5</strong> folds
              </span>
              <span className="datasplit-stat">
                <strong>80/20</strong> train/val ratio
              </span>
              <span className="datasplit-stat">
                <strong>seed 11</strong> reproducible
              </span>
            </div>
          </article>

          <div className="datasplit-arrow animate-in stagger-6" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>

          <article className="datasplit-stage animate-in stagger-7">
            <div className="datasplit-stage-header">
              <span className="datasplit-stage-number">3</span>
              <div>
                <p className="datasplit-stage-label">Windowing</p>
                <h3>Sliding windows for model input</h3>
              </div>
            </div>
            <div className="datasplit-stage-stats">
              <span className="datasplit-stat">
                <strong>600</strong> samples/window
              </span>
              <span className="datasplit-stat">
                <strong>~15 s</strong> per window
              </span>
              <span className="datasplit-stat">
                <strong>stride 10</strong> overlap
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
