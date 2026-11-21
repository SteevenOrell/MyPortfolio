import { useLanguage } from '../i18n/LanguageContext';
import { ArrowUpRight } from './icons';

// A project's outside links: the live site (`live`) and/or the GitHub repository (`link`).
// Private repositories only get `live`; mobile apps with a public repository only get `link`.
// `primary` styles the first link as the main button (details panel).
function ProjectLinks({ project, className = 'sw-link', primary }) {
  const { t } = useLanguage();
  const w = t.work;
  const links = [
    project.live && [project.live, w.live],
    project.link && [project.link, w.github],
  ].filter(Boolean);

  return links.map(([href, label], i) => (
    <a
      key={href}
      className={primary ? `sw-btn ${i === 0 ? 'sw-btn--primary' : 'sw-btn--ghost'}` : className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {label} <ArrowUpRight />
    </a>
  ));
}

export default ProjectLinks;
