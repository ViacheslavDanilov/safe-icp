import PresentationController from './components/PresentationController';
import SlidePrelude from './components/slides/SlidePrelude';
import SlideHero from './components/slides/SlideHero';
import SlideProblem from './components/slides/SlideProblem';
import SlideContrast from './components/slides/SlideContrast';
import SlideSystem from './components/slides/SlideSystem';
import SlideHardware from './components/slides/SlideHardware';
import SlideSensing from './components/slides/SlideSensing';
import SlideInference from './components/slides/SlideInference';
import SlideData from './components/slides/SlideData';
import SlideQualitative from './components/slides/SlideQualitative';
import SlideMetrics from './components/slides/SlideMetrics';
import SlideMeaning from './components/slides/SlideMeaning';
import SlideFuture from './components/slides/SlideFuture';
import SlideCollab from './components/slides/SlideCollab';
import SlideTeam from './components/slides/SlideTeam';
import SlideBackup from './components/slides/SlideBackup';

export default function Home() {
  return (
    <main className="presentation-shell">
      <PresentationController totalSlides={16}>
        <div className="deck">
          <SlidePrelude />
          <SlideHero />
          <SlideProblem />
          <SlideContrast />
          <SlideSystem />
          <SlideHardware />
          <SlideSensing />
          <SlideInference />
          <SlideData />
          <SlideQualitative />
          <SlideMetrics />
          <SlideMeaning />
          <SlideFuture />
          <SlideCollab />
          <SlideTeam />
          <SlideBackup />
        </div>
      </PresentationController>
    </main>
  );
}
