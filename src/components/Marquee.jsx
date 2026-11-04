// An endlessly scrolling strip of words. The list is rendered twice so the loop is seamless;
// the copy is hidden from screen readers.
// Drawn as SVG: the ✳ character is shown as a coloured emoji on iPhone/Safari.
const Star = () => (
  <svg className="sw-marquee__star" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

function Marquee({ items, reverse = false, className = '' }) {
  const row = (hidden) => (
    <ul className="sw-marquee__row" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={i}>{item}<Star /></li>
      ))}
    </ul>
  );
  return (
    <div className={`sw-marquee${reverse ? ' sw-marquee--reverse' : ''} ${className}`}>
      <div className="sw-marquee__track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

export default Marquee;
