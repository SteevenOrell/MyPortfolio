import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './motion';
import SectionHeader from './SectionHeader';
import Marquee from './Marquee';

// On mobile the grid becomes a swipeable carousel (CSS scroll-snap); these controls drive it.
function Skills() {
  const { t } = useLanguage();
  const s = t.skills;
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const slideCount = s.items.length + 1; // the skill cards plus the "Let's talk" card

  // Keep the counter/dots in sync with swiping.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slide = track.children[0];
      if (!slide) return;
      const step = slide.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
      setActive(Math.min(slideCount - 1, Math.max(0, Math.round(track.scrollLeft / step))));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [slideCount]);

  function goTo(index) {
    const track = trackRef.current;
    const slide = track?.children[index];
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: 'smooth' });
  }

  const num = n => String(n).padStart(2, '0');

  return (
    <section id="skills" className="sw-section sw-skills">
      <div className="sw-container">
        <SectionHeader index={s.index} label={s.label} title={s.title} count={s.items.length} />

        <div
          className="sw-skills__grid"
          ref={trackRef}
          role="region"
          aria-roledescription="carousel"
          aria-label={s.label}
          tabIndex={0}
        >
          {s.items.map((skill, i) => (
            <Reveal as="article" key={skill.title} className="sw-skill" delay={(i % 3) * 0.08}>
              <div className="sw-skill__top">
                <span className="sw-skill__num">{num(i + 1)}</span>
                <span className="sw-skill__label">{skill.label}</span>
              </div>
              <h3 className="sw-skill__title">{skill.title}</h3>
              <dl className="sw-skill__groups">
                {skill.groups.map(([name, list]) => (
                  <div key={name}>
                    <dt>{name}</dt>
                    <dd>{list}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
          <Reveal className="sw-skill sw-skill--cta" delay={0.16}>
            <span className="sw-skill__num">({num(s.items.length + 1)})</span>
            <p className="sw-skill__cta-title">{s.ctaTitle}</p>
            <a className="sw-btn sw-btn--primary" href="#ContactForm">{s.cta} <span aria-hidden="true">→</span></a>
          </Reveal>
        </div>

        <div className="sw-carousel-ctrl">
          <button type="button" className="sw-carousel-ctrl__arrow" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={s.prev}>←</button>
          <div className="sw-carousel-ctrl__dots">
            {Array.from({ length: slideCount }, (_, i) => (
              <button
                key={i}
                type="button"
                className={i === active ? 'is-active' : ''}
                aria-label={`${i + 1} / ${slideCount}`}
                aria-current={i === active ? 'true' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <span className="sw-carousel-ctrl__count" aria-live="polite">{num(active + 1)} / {num(slideCount)}</span>
          <button type="button" className="sw-carousel-ctrl__arrow" onClick={() => goTo(active + 1)} disabled={active === slideCount - 1} aria-label={s.next}>→</button>
        </div>
      </div>

      <Marquee items={t.marquee} reverse className="sw-marquee--outline" />
    </section>
  );
}

export default Skills;
