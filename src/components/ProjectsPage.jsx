import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { withText } from '../data/projects';
import { Link } from '../router';
import { ArrowLeft, ArrowUpRight } from './icons';
import { Reveal } from './motion';
import SectionHeader from './SectionHeader';
import ProjectSheet from './ProjectSheet';

const pad = n => String(n).padStart(2, '0');

// /projects — every project, with a category filter. Built to hold many projects (20+).
function ProjectsPage() {
  const { t } = useLanguage();
  const w = t.work;
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);

  const all = withText(w.items);
  const categories = [...new Set(all.map(p => p.category))];
  const shown = filter === 'all' ? all : all.filter(p => p.category === filter);

  // Category names change with the language; go back to "All" when the current one disappears.
  const categoryKey = categories.join('|');
  useEffect(() => {
    if (filter !== 'all' && !categoryKey.split('|').includes(filter)) setFilter('all');
  }, [filter, categoryKey]);

  const current = open ? all.find(p => p.id === open) : null;

  return (
    <section id="top" className="sw-section sw-pp">
      <div className="sw-container">
        <Link to="/" className="sw-link sw-pp__back"><ArrowLeft /> {w.back}</Link>

        <SectionHeader index={w.index} label={w.pageLabel} title={w.pageTitle} />
        <Reveal as="p" className="sw-pp__intro">{w.pageIntro}</Reveal>

        <div className="sw-pp__filters" role="group" aria-label={w.filterLabel}>
          {[['all', w.filterAll], ...categories.map(c => [c, c])].map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={filter === value ? 'is-active' : ''}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {label}
              <span className="sw-pp__filter-count">
                {value === 'all' ? all.length : all.filter(p => p.category === value).length}
              </span>
            </button>
          ))}
        </div>

        <ul className="sw-pp__grid">
          {shown.map(p => {
            const number = pad(all.indexOf(p) + 1);
            return (
              <li key={p.id} className="sw-ppc">
                <button type="button" className="sw-ppc__media" onClick={() => setOpen(p.id)} aria-label={`${w.details} — ${p.title}`}>
                  {/* Images only on this page (video projects show their first screenshot), filling the whole frame. */}
                  <img src={p.cover === 'video' ? p.images[0] : p.cover} alt="" loading="lazy" />
                  <span className="sw-card__view" aria-hidden="true">{w.details} <ArrowUpRight /></span>
                </button>
                <p className="sw-card__meta"><span>{number}</span><span>{p.category}</span></p>
                <h3 className="sw-ppc__title">
                  <span className="sw-ppc__title-full">{p.title}</span>
                  <span className="sw-ppc__title-short">{p.shortTitle || p.title}</span>
                </h3>
                <div className="sw-card__links">
                  <button type="button" className="sw-link" onClick={() => setOpen(p.id)}>{w.details}</button>
                  <a className="sw-link" href={p.link} target="_blank" rel="noreferrer">{w.github} <ArrowUpRight /></a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <ProjectSheet
        project={current}
        number={current ? pad(all.indexOf(current) + 1) : ''}
        onClose={() => setOpen(null)}
      />
    </section>
  );
}

export default ProjectsPage;
