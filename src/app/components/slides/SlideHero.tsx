import Image from 'next/image';

export default function SlideHero() {
  return (
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
              src="/images/title-hero-visual.jpg"
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
  );
}
