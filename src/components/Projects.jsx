import { createRef, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

import { useLanguage } from '../i18n/LanguageContext';
import { withText } from '../data/projects';
import { PHONE_QUERY, useMediaQuery } from '../hooks';
import { Link } from '../router';
import { ArrowRight, ArrowUpRight } from './icons';
import { Reveal } from './motion';
import SectionHeader from './SectionHeader';
import ProjectSheet from './ProjectSheet';

const pad = n => String(n).padStart(2, '0');

// The card's picture: the project video, or its cover image.
// Phones get the portrait recording only for "tall" projects (their frame is shaped for it).
export function ProjectCover({ project, phone }) {
  if (project.cover === 'video') {
    return <video autoPlay loop muted playsInline preload="metadata" poster={project.images[0]} src={phone && project.tall ? project.mobileVideo : project.video} />;
  }
  return <img src={project.cover} alt="" loading="lazy" />;
}

// One stacking card. On desktop it sticks under the nav; while the next card slides over it,
// it shrinks a little and darkens (scale 1 → 0.93, dim 0 → 0.55).
function StackCard({ project, index, total, nextRef, cardRef, stacking, phone, onOpen }) {
  const { t } = useLanguage();
  const w = t.work;
  const own = useRef(null);
  const { scrollYProgress } = useScroll({ target: nextRef ?? own, offset: ['start end', 'start 112px'] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const dim = useTransform(scrollYProgress, [0, 1], [0, 0.55]);
  const animated = stacking && nextRef;
  const portrait = project.tall && phone;

  return (
    <article ref={cardRef} className={`sw-wk${portrait ? ' sw-wk--portrait' : ''}`}>
      <motion.div className="sw-wk__in" style={animated ? { scale } : undefined}>
        <div className="sw-wk__tx">
          <p className="sw-wk__top">
            <span>{pad(index + 1)} / {pad(total)}</span>
            <span>{project.category}</span>
          </p>
          <div>
            <h3 className="sw-wk__title">
              <span className="sw-ppc__title-full">{project.title}</span>
              <span className="sw-ppc__title-short">{project.shortTitle || project.title}</span>
            </h3>
            <p className="sw-wk__desc">{project.description}</p>
            <ul className="sw-wk__tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </div>
          <div className="sw-wk__bot">
            <a className="sw-link" href={project.link} target="_blank" rel="noreferrer">{w.github} <ArrowUpRight /></a>
            <button type="button" className="sw-pillbtn" onClick={onOpen}>
              <span>{w.details}</span>
              <span className="sw-pillbtn__ic"><ArrowRight className="" /></span>
            </button>
          </div>
        </div>
        <button type="button" className={`sw-wk__media${project.fit === 'contain' ? ' sw-wk__media--contain' : ''}`} onClick={onOpen} tabIndex={-1} aria-hidden="true">
          <ProjectCover project={project} phone={phone} />
        </button>
        {animated && <motion.span className="sw-wk__dim" aria-hidden="true" style={{ opacity: dim }} />}
      </motion.div>
    </article>
  );
}

// Home page: the featured projects as stacking cards, then a link to the full list.
const Project = () => {
  const { t } = useLanguage();
  const w = t.work;
  const reduce = useReducedMotion();
  const phone = useMediaQuery(PHONE_QUERY);
  const stacking = useMediaQuery('(min-width: 1001px)') && !reduce;
  const [open, setOpen] = useState(null);

  const featured = withText(w.items).filter(p => p.featured);
  const allCount = withText(w.items).length;
  const refs = useMemo(() => featured.map(() => createRef()), [featured.length]);

  return (
    <section id="work" className="sw-section sw-work">
      <div className="sw-container">
        <SectionHeader index={w.index} label={w.label} title={w.title} count={featured.length} />

        <div className="sw-wks">
          {featured.map((p, i) => (
            <StackCard
              key={p.id}
              project={p}
              index={i}
              total={featured.length}
              cardRef={refs[i]}
              nextRef={refs[i + 1]}
              stacking={stacking}
              phone={phone}
              onOpen={() => setOpen(i)}
            />
          ))}
        </div>

        <Reveal className="sw-work__more">
          <Link to="/projects" className="sw-btn sw-btn--primary">
            {w.viewAll} <span className="sw-work__more-count">{pad(allCount)}</span> <ArrowRight />
          </Link>
        </Reveal>
      </div>

      <ProjectSheet
        project={open !== null ? featured[open] : null}
        number={open !== null ? pad(open + 1) : ''}
        onClose={() => setOpen(null)}
      />
    </section>
  );
};

export default Project;
