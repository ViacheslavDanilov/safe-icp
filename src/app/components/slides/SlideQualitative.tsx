import Image from 'next/image';

export default function SlideQualitative() {
  return (
    <section className="slide slide-qualitative slide-alt" aria-labelledby="qualitative-title">
      <div className="slide-content qualitative-layout">
        <div className="qualitative-header">
          <div className="qualitative-copy">
            <p className="hero-meta animate-in stagger-1">Qualitative Evidence / Model Behavior</p>

            <h2 className="qualitative-title animate-in stagger-2" id="qualitative-title">
              The prediction tracks the shape,
              <span className="qualitative-title-accent">not just the average</span>
            </h2>

            <p className="qualitative-lead animate-in stagger-3">
              A representative InceptionTime example shows that the model follows the overall
              temporal behavior of invasive ICP well enough to make the learned relationship
              visually credible.
            </p>
          </div>

          <div className="qualitative-tags animate-in stagger-4" aria-label="Example metadata">
            <span>Subject 08</span>
            <span>InceptionTime</span>
            <span className="qualitative-tag-metric">MAE 2.8 mmHg</span>
          </div>
        </div>

        <figure className="qualitative-figure animate-in stagger-5">
          <div className="qualitative-figure-frame">
            <Image
              className="qualitative-image"
              src="/slide-qualitative/prediction-subject-08.png"
              alt="Prediction versus true ICP for subject 08 using the InceptionTime model"
              width={6366}
              height={1567}
            />
          </div>

          <div className="qualitative-callouts">
            <div className="qualitative-callout">
              <strong>What to notice</strong>
              <span>
                The solid blue line is the mean prediction averaged across five cross-validation
                folds. The shaded blue band is the 95% confidence interval across those folds.
                Together they follow the broad temporal structure of the green invasive ICP
                reference.
              </span>
            </div>

            <div className="qualitative-callout">
              <strong>Where it remains hard</strong>
              <span>
                Sharp transitions and sudden ICP spikes are still more difficult to capture than
                slower baseline trends. The confidence interval widens noticeably around these rapid
                changes, reflecting higher model disagreement at the hardest moments.
              </span>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
}
