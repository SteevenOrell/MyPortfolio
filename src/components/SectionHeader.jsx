import { Reveal } from './motion';

// Editorial section heading: "(02) — Experience" label, an optional big title and a counter like "/ 04".
function SectionHeader({ index, label, title, count }) {
  return (
    <header className="sw-sechead">
      <Reveal className="sw-sechead__label">
        <span className="sw-sechead__num">({index})</span>
        <span className="sw-sechead__rule" aria-hidden="true" />
        <span>{label}</span>
      </Reveal>
      {title && (
        <Reveal as="h2" className="sw-sechead__title" delay={0.05}>
          {title}
          {count && <sup className="sw-sechead__count">/ {String(count).padStart(2, '0')}</sup>}
        </Reveal>
      )}
    </header>
  );
}

export default SectionHeader;
