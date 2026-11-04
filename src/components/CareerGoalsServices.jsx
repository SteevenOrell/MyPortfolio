import stepsImg from './assets-copy/Wooden_Steps_Made_Of_Blocks_As_An_Idea_O_original_2526881.jpg';
import learnShareImg from './assets-copy/LearnAndShareImg.png';
import createImg from './assets-copy/The_Chalk-drawn_Staircase_Goes_Up_original_1877682.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { ParallaxMedia, Reveal } from './motion';
import SectionHeader from './SectionHeader';

const IMAGES = [stepsImg, learnShareImg, createImg];

function CareerGoalsServices() {
  const { t } = useLanguage();
  const g = t.goals;

  return (
    <section id="goals" className="sw-section sw-goals">
      <div className="sw-container">
        <SectionHeader index={g.index} label={g.label} title={g.title} count={g.items.length} />

        <ol className="sw-goals__list">
          {g.items.map((goal, i) => (
            <li key={goal.title} className={`sw-goal${i % 2 ? ' sw-goal--flip' : ''}`}>
              <ParallaxMedia className="sw-goal__media" strength={14}>
                <img src={IMAGES[i]} alt="" loading="lazy" />
              </ParallaxMedia>
              <Reveal className="sw-goal__text">
                <span className="sw-goal__num">({String(i + 1).padStart(2, '0')})</span>
                <h3 className="sw-goal__title">{goal.title}</h3>
                <p>{goal.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CareerGoalsServices;
