import { Sidebar } from 'primereact/sidebar';
import { useLanguage } from '../i18n/LanguageContext';
import { PHONE_QUERY, useMediaQuery } from '../hooks';
import { ArrowUpRight } from './icons';

// Full-screen details panel for one project: text, GitHub link, optional video and the screenshots.
function ProjectSheet({ project, number, onClose }) {
  const { t } = useLanguage();
  const w = t.work;
  const phone = useMediaQuery(PHONE_QUERY);

  return (
    <Sidebar
      visible={project !== null}
      onHide={onClose}
      className="sw-sheet"
      fullScreen
      blockScroll
      ariaCloseLabel={w.closeDetails}
    >
      {project && (
        <div className="sw-sheet__inner">
          <p className="sw-card__meta"><span>{number}</span><span>{project.category}</span></p>
          <h3 className="sw-sheet__title">{project.title}</h3>
          <p className="sw-sheet__text">{project.description}</p>
          <ul className="sw-tags">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          <a className="sw-btn sw-btn--primary" href={project.link} target="_blank" rel="noreferrer">{w.github} <ArrowUpRight /></a>
          {project.detailsVideo && (
            <video
              className="sw-sheet__video"
              src={phone ? project.mobileVideo : project.video}
              poster={project.images[0]}
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          )}
          <h4 className="sw-sheet__gallery-title">{w.gallery}</h4>
          <div className="sw-sheet__gallery">
            {project.images.map((img, i) => (
              <img key={img} src={img} alt={`${project.title} — ${i + 1}`} loading="lazy" />
            ))}
          </div>
        </div>
      )}
    </Sidebar>
  );
}

export default ProjectSheet;
