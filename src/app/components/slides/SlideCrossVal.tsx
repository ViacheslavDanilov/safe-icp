import LoopVideo from '../LoopVideo';

export default function SlideCrossVal() {
  return (
    <section className="slide slide-crossval" aria-labelledby="crossval-title">
      <div className="slide-content crossval-layout">
        <div className="crossval-header">
          <div className="crossval-copy">
            <p className="hero-meta animate-in stagger-1">Cross-Validation</p>

            <h2 className="slide-title slide-title-sm animate-in stagger-2" id="crossval-title">
              Each fold sees different validation windows
              <span className="slide-title-accent">Same subject, different splits</span>
            </h2>

            <p className="slide-lead crossval-lead animate-in stagger-3">
              For each of the 5 folds, a different 20% of the recording is held out for validation.
              The animation below cycles through all folds for Subject 17.
            </p>
          </div>
        </div>

        <figure className="crossval-figure">
          <div className="crossval-video-frame animate-in stagger-4">
            <LoopVideo
              className="crossval-video"
              src="/slide-crossval/cv-s17.mp4"
              width={5832}
              height={1422}
              poster="/slide-crossval/cv-s17-poster.webp"
              label="Animation showing how validation windows shift across 5 folds for Subject 17"
            />
          </div>

          <div className="crossval-callouts">
            <div className="card lift side-note crossval-callout animate-in stagger-5">
              <strong>Pink regions</strong>
              <span>
                Validation windows for the current fold. The remaining signal is used for training.
              </span>
            </div>

            <div className="card lift side-note crossval-callout animate-in stagger-5">
              <strong>Dashed lines</strong>
              <span>
                Fragment boundaries within the recording session, preserved across all folds.
              </span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
