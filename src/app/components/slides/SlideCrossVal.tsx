import Image from 'next/image';

export default function SlideCrossVal() {
  return (
    <section className="slide slide-crossval" aria-labelledby="crossval-title">
      <div className="slide-content crossval-layout">
        <div className="crossval-header">
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
          </div>

          <div className="crossval-tags animate-in stagger-3" aria-label="Example metadata">
            <span>Subject 17</span>
            <span>Train + Val</span>
            <span className="crossval-tag-accent">mWDN model</span>
          </div>
        </div>

        <div className="crossval-folds">
          <figure className="crossval-fold animate-in stagger-4">
            <div className="crossval-fold-label">Fold 1</div>
            <div className="crossval-fold-frame">
              <Image
                className="crossval-image"
                src="/slide-crossval/fold-1.png"
                alt="Subject 17 ICP signal with fold 1 validation windows highlighted in pink"
                width={1600}
                height={300}
              />
            </div>
          </figure>

          <figure className="crossval-fold animate-in stagger-5">
            <div className="crossval-fold-label">Fold 2</div>
            <div className="crossval-fold-frame">
              <Image
                className="crossval-image"
                src="/slide-crossval/fold-2.png"
                alt="Subject 17 ICP signal with fold 2 validation windows highlighted in pink"
                width={1600}
                height={300}
              />
            </div>
          </figure>

          <figure className="crossval-fold animate-in stagger-6">
            <div className="crossval-fold-label">Fold 3</div>
            <div className="crossval-fold-frame">
              <Image
                className="crossval-image"
                src="/slide-crossval/fold-3.png"
                alt="Subject 17 ICP signal with fold 3 validation windows highlighted in pink"
                width={1600}
                height={300}
              />
            </div>
          </figure>
        </div>

        <div className="crossval-callouts">
          <div className="crossval-callout animate-in stagger-7">
            <strong>Pink regions</strong>
            <span>
              Validation windows for that fold. The remaining signal (white) is used for training.
              Each fold selects a different 20% at random.
            </span>
          </div>

          <div className="crossval-callout animate-in stagger-7">
            <strong>Dashed lines</strong>
            <span>
              Fragment boundaries within the recording session. These indicate natural breaks in the
              continuous monitoring, preserved across all folds.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
