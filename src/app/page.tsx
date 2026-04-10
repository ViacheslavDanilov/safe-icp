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
import SlideDataSplit from './components/slides/SlideDataSplit';
import SlideModelZoo from './components/slides/SlideModelZoo';
import SlideCrossVal from './components/slides/SlideCrossVal';
import SlideQualitative from './components/slides/SlideQualitative';
import SlideMetrics from './components/slides/SlideMetrics';
import SlideMeaning from './components/slides/SlideMeaning';
import SlideFuture from './components/slides/SlideFuture';
import SlideCollab from './components/slides/SlideCollab';
import SlideTeam from './components/slides/SlideTeam';
import SlideConclusion from './components/slides/SlideConclusion';
import SlideQA from './components/slides/SlideQA';
// import SlideFinal from './components/slides/SlideFinal';

export default function Home() {
  return (
    <main className="presentation-shell">
      <PresentationController totalSlides={20}>
        <div className="deck">
          <SlidePrelude />
          <SlideHero />
          <SlideProblem />
          <SlideContrast />
          <SlideSystem />
          <SlideHardware />
          <SlideSensing />
          <SlideData />
          <SlideDataSplit />
          <SlideModelZoo />
          <SlideCrossVal />
          <SlideInference />
          <SlideQualitative />
          <SlideMetrics />
          <SlideMeaning />
          <SlideFuture />
          <SlideConclusion />
          <SlideCollab />
          <SlideTeam />
          <SlideQA />
          {/* <SlideFinal /> */}
        </div>
      </PresentationController>
    </main>
  );
}
