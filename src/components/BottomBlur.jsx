import { useEffect, useState } from 'react';

// Progressive blur fixed to the bottom of the screen: 8 stacked layers, each blurring twice as much
// as the one above and visible over a slightly lower band, so the page fades softly into blur
// towards the bottom edge. Purely decorative (no pointer events, hidden from screen readers).
const LAYERS = [0.5, 0.5625, 1.125, 2.25, 4.5, 9, 18, 36];

function BottomBlur() {
  // Fade it out at the very end of the page so the copyright line stays readable.
  const [atEnd, setAtEnd] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      setAtEnd(window.scrollY + window.innerHeight >= doc.scrollHeight - 140);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className={`sw-bblur${atEnd ? ' is-hidden' : ''}`} aria-hidden="true">
      {LAYERS.map((blur, i) => {
        const a = i * 12.5;
        // Each layer fades in, holds, then fades out over the next band; the last ones run to the bottom.
        const stops = i < 6
          ? `rgba(0,0,0,0) ${a}%, rgba(0,0,0,1) ${a + 12.5}%, rgba(0,0,0,1) ${a + 25}%, rgba(0,0,0,0) ${a + 37.5}%`
          : i === 6
            ? `rgba(0,0,0,0) ${a}%, rgba(0,0,0,1) ${a + 12.5}%, rgba(0,0,0,1) 100%`
            : `rgba(0,0,0,0) ${a}%, rgba(0,0,0,1) 100%`;
        const mask = `linear-gradient(to bottom, ${stops})`;
        return (
          <span
            key={blur}
            style={{
              backdropFilter: `blur(${blur}px)`,
              WebkitBackdropFilter: `blur(${blur}px)`,
              maskImage: mask,
              WebkitMaskImage: mask,
              zIndex: i + 1,
            }}
          />
        );
      })}
    </div>
  );
}

export default BottomBlur;
