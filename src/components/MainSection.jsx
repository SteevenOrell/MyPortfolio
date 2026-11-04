import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import heroBg from './assets-copy/ElevenLabs_video_seedance-2-0_the wind sho..._2026-05-08T15_08_32.mp4';
import { useLanguage } from '../i18n/LanguageContext';
import { useSiteReady } from '../loading';

const ease = [0.22, 1, 0.36, 1];
const PHONE = '(max-width: 640px)';

function useIsPhone() {
  const [phone, setPhone] = useState(() => window.matchMedia(PHONE).matches);
  useEffect(() => {
    const mq = window.matchMedia(PHONE);
    const onChange = () => setPhone(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return phone;
}

function MainSection() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const small = useIsPhone();
  // The entrance plays when the loading screen lifts.
  const ready = useSiteReady();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Parallax: the video sinks and zooms, the text rises faster and fades out.
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const shade = useTransform(scrollYProgress, [0, 1], [0.1, 0.8]);

  const intro = (delay) => reduce ? {} : {
    initial: { opacity: 0, y: 60 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
    transition: { duration: 1, delay: delay + 0.15, ease },
  };

  return (
    <section id="top" className="sw-hero" ref={ref} aria-label={t.hero.line2}>
      <motion.div className="sw-hero__media" style={reduce ? undefined : { y: videoY, scale: videoScale }}>
        <video autoPlay loop muted playsInline src={heroBg} />
      </motion.div>
      <motion.div className="sw-hero__shade" style={reduce ? { opacity: 0.1 } : { opacity: shade }} />

      {/* On phones the text stays in place while scrolling; only the video moves. */}
      <motion.div className="sw-hero__content" style={reduce || small ? undefined : { y: textY, opacity: textOpacity }}>
        <motion.p className="sw-eyebrow" {...intro(0.1)}>
          <span className="sw-eyebrow__num">(00)</span> {t.hero.eyebrow}
        </motion.p>

        {/* key={lang} replays the entrance animation when the language changes */}
        <h1 className="sw-hero__title" key={lang}>
          <span className="sw-hero__line"><motion.span {...intro(0.2)}>{t.hero.line1}</motion.span></span>
          <span className="sw-hero__line sw-hero__line--accent"><motion.span {...intro(0.32)}>{t.hero.line2}</motion.span></span>
        </h1>

        <div className="sw-hero__bottom">
          <motion.p className="sw-hero__intro" {...intro(0.5)}>{t.hero.intro}</motion.p>
          <motion.div className="sw-hero__actions" {...intro(0.6)}>
            <a className="sw-btn sw-btn--primary" href="#work">{t.hero.primary} <span aria-hidden="true">↓</span></a>
          </motion.div>
        </div>
      </motion.div>

      <div className="sw-hero__footer">
        <p className="sw-status"><span className="sw-status__dot" aria-hidden="true" />{t.hero.status}</p>
        <a className="sw-hero__scroll" href="#about">{t.hero.scroll}<span aria-hidden="true" /></a>
      </div>
    </section>
  );
}

export default MainSection;
