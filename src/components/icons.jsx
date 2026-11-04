// Arrows drawn as SVG: the ↗ character is shown as an emoji on iPhone/Safari.
export const ArrowUpRight = () => (
  <svg className="sw-arrow" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowRight = ({ className = 'sw-arrow' }) => (
  <svg className={className} viewBox="0 0 12 12" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M1 6h9M6.5 2.5 10 6l-3.5 3.5" />
  </svg>
);

export const ArrowLeft = () => (
  <svg className="sw-arrow" viewBox="0 0 12 12" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 6H2M5.5 2.5 2 6l3.5 3.5" />
  </svg>
);
