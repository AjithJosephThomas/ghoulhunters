import '../../styles/hero-story.css';
import { HeroStoryFigure } from './HeroStoryFigure';

const captions = [
  {
    className: 'hero-story-caption hero-story-caption--1',
    html: (
      <>
        <strong>Step 1:</strong> Tiny freshwater gold clams hide on <strong>ship hulls</strong> and travel across
        the ocean.
      </>
    ),
  },
  {
    className: 'hero-story-caption hero-story-caption--2',
    html: (
      <>
        <strong>Step 2:</strong> They arrive in <strong>Australia</strong> — a new home far from where they belong.
      </>
    ),
  },
  {
    className: 'hero-story-caption hero-story-caption--3',
    html: (
      <>
        <strong>Step 3:</strong> The clams spread in the <strong>Brisbane River</strong> and grow in huge numbers.
      </>
    ),
  },
  {
    className: 'hero-story-caption hero-story-caption--4',
    html: (
      <>
        <strong>Step 4:</strong> They use up oxygen. <strong>Plants and fish</strong> struggle — that is why{' '}
        <strong>biosecurity</strong> matters.
      </>
    ),
  },
];

/** Animated spread story — clams on ships, Australia, Brisbane River, oxygen impact */
export function HeroStory() {
  return (
    <div className="hero-story">
      <p id="hero-story-desc" className="hero-story__visually-hidden">
        Animated story: freshwater gold clams traveled on ship hulls to Australia, spread in the Brisbane River,
        and reduced oxygen which harms plants and fish. This is why biosecurity matters.
      </p>

      <div className="hero-story__figure" aria-describedby="hero-story-desc">
        <HeroStoryFigure />
      </div>

      <div className="hero-story-captions" aria-live="polite">
        {captions.map((caption) => (
          <p key={caption.className} className={caption.className}>
            {caption.html}
          </p>
        ))}
      </div>

      <ol className="hero-story-steps" aria-hidden="true">
        <li />
        <li />
        <li />
        <li />
      </ol>
    </div>
  );
}
