export default function SlideCrossVal() {
  return (
    <section className="slide slide-crossval slide-alt" aria-labelledby="crossval-title">
      <div className="slide-content crossval-layout">
        <div className="crossval-copy">
          <p className="hero-meta animate-in stagger-1">Data / Cross-Validation</p>

          <h2 className="crossval-title animate-in stagger-2" id="crossval-title">
            Each fold sees different validation windows
            <span className="crossval-title-accent">Same subject, different splits</span>
          </h2>

          <p className="crossval-lead animate-in stagger-3">
            For each of the 5 folds, a different 20% of the recording is held out for validation
            (pink regions). This ensures the model is tested on every part of the signal across
            folds, reducing evaluation bias from any single time segment.
          </p>

          <div className="crossval-details animate-in stagger-4">
            <div className="crossval-callout">
              <strong>Pink regions</strong>
              <span>
                Validation windows for the current fold. The remaining signal is used for training.
                Each fold selects a different 20% at random.
              </span>
            </div>

            <div className="crossval-callout">
              <strong>Dashed lines</strong>
              <span>
                Fragment boundaries within the recording session. These mark natural breaks in
                continuous monitoring, preserved across all folds.
              </span>
            </div>
          </div>

          <div className="crossval-tags animate-in stagger-4" aria-label="Example metadata">
            <span>Subject 17</span>
            <span>Train + Val</span>
            <span className="crossval-tag-accent">5 folds animated</span>
          </div>
        </div>

        <figure className="crossval-video-wrap animate-in stagger-5">
          <div className="crossval-video-frame">
            <video
              className="crossval-video"
              src="/slide-crossval/cv-s17.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Animation showing how validation windows shift across 5 folds for Subject 17"
            />
          </div>
          <figcaption className="crossval-caption">
            The animation cycles through all 5 folds, showing how the pink validation regions
            rotate across the full recording of Subject 17.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
