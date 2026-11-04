import { useLanguage } from '../i18n/LanguageContext';
import { DriftText, Reveal } from './motion';
import SectionHeader from './SectionHeader';

function Experiences() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="sw-section sw-exp">
      <DriftText className="sw-exp__drift">{e.bigTitle}</DriftText>

      <div className="sw-container">
        <SectionHeader index={e.index} label={e.label} title={e.title} />

        <ol className="sw-exp__list">
          {e.items.map((item, i) => (
            <Reveal as="li" key={item.role} className="sw-exp__item" delay={i * 0.1}>
              <div className="sw-exp__meta">
                <span className="sw-exp__num">{String(i + 1).padStart(2, '0')}</span>
                <span className="sw-exp__period">{item.period}</span>
              </div>

              <div className="sw-exp__main">
                <h3 className="sw-exp__role">{item.role}</h3>
                <ul className="sw-exp__points">
                  {item.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>

              <div className="sw-exp__tech">
                <span className="sw-exp__tech-label">{e.techLabel}</span>
                <ul className="sw-tags">
                  {item.tech.map(tech => <li key={tech}>{tech}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experiences;
