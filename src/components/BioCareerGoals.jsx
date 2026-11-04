import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import bioBg from './assets-copy/ElevenLabs_video_seedance-2-0_the wind sho..._2026-05-08T21_21_14.mp4';
import { useLanguage } from '../i18n/LanguageContext';
import { Parallax, Reveal } from './motion';
import SectionHeader from './SectionHeader';

// Counts up from 0 the first time the number scrolls into view.
function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: v => setShown(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return <span ref={ref}>{shown}{suffix}</span>;
}

function BioCareerGoals() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="about" className="sw-section sw-about">
      <div className="sw-about__bg" aria-hidden="true">
        <Parallax speed={0.18} className="sw-about__bg-inner">
          <video autoPlay loop muted playsInline src={bioBg} />
        </Parallax>
      </div>

      <div className="sw-container">
        <SectionHeader index={a.index} label={a.label} />

        <Reveal as="p" className="sw-about__statement">{a.statement}</Reveal>

        <div className="sw-about__grid">
          <Reveal as="p" className="sw-about__body" delay={0.1}>{a.body}</Reveal>

          <dl className="sw-stats">
            {a.stats.map((s, i) => (
              <Reveal key={s.label} className="sw-stat" delay={0.15 + i * 0.1}>
                <dt>{s.label}</dt>
                <dd><Counter value={s.value} suffix={s.suffix} /></dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default BioCareerGoals;
