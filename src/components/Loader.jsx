import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import LogoImg from './assets-copy/SteevenWeminLogoWhite.png';
import { markSiteReady } from '../loading';

const MIN_TIME = 1400;  // the bar takes at least this long to fill, so the page visibly sharpens (ms)
const MAX_WAIT = 4000;  // never block: finish after this long even if something is still loading (ms)
const FADE_AT = 92;     // at this percentage the blur opens up and the logo fades; the bar keeps filling
const FADE_TIME = 1100; // opening duration (ms), matches the CSS
const MAX_BLUR = 30;    // blur of the page behind at 0% (px)
const END_BLUR = 8;     // blur left when the curtains open (enough for the opening to read)

// Resolves when the page's key assets are ready: fonts, window load and the hero video (if on the page).
function waitForAssets(onStep) {
  const steps = [
    document.fonts ? document.fonts.ready : Promise.resolve(),
    new Promise(resolve => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    }),
    new Promise(resolve => {
      const video = document.querySelector('.sw-hero video');
      if (!video || video.readyState >= 3) return resolve();
      video.addEventListener('canplay', resolve, { once: true });
      video.addEventListener('error', resolve, { once: true });
    }),
  ];
  steps.forEach(p => p.then(() => onStep(1 / steps.length)));
  return Promise.all(steps);
}

// Opening cover: the page behind starts fully blurred and sharpens as the loading bar fills,
// with the white logo and the orange loading bar sharp on top. Near the end the remaining blur splits and slides apart from the centre.
function Loader() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState(reduce ? 'done' : 'load'); // load → fade → done
  const [progress, setProgress] = useState(0);                   // 0–100
  const real = useRef(0);       // real loading progress (0–1)
  const finished = useRef(false);

  // Visitors who prefer less motion get no cover at all.
  useEffect(() => { if (reduce) markSiteReady(); }, [reduce]);

  // Track real loading (capped by MAX_WAIT) and animate the bar; it never runs faster than MIN_TIME
  // nor ahead of the real progress (apart from a small head start).
  useEffect(() => {
    if (reduce) return;
    const done = () => { real.current = 1; finished.current = true; };
    waitForAssets(step => { real.current = Math.min(1, real.current + step); }).then(done);
    const cap = setTimeout(done, MAX_WAIT);

    const start = performance.now();
    let value = 0;
    let fading = false;
    let raf;
    const tick = now => {
      const timeCap = Math.min(1, Math.max(0, (now - start) / MIN_TIME));
      const allowed = finished.current ? timeCap : Math.min(timeCap, 0.15 + real.current * 0.8);
      value += (allowed * 100 - value) * 0.12;
      if (finished.current && timeCap >= 1 && value > 99.5) value = 100;
      value = Math.max(0, Math.min(100, value));
      setProgress(value);
      if (!fading && finished.current && value >= FADE_AT) {
        fading = true;
        setPhase('fade');
      }
      if (value < 100) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { clearTimeout(cap); cancelAnimationFrame(raf); };
  }, [reduce]);

  // The page starts its entrance as the cover fades; remove the cover once it has faded.
  useEffect(() => {
    if (phase !== 'fade') return;
    markSiteReady();
    const timer = setTimeout(() => setPhase('done'), FADE_TIME);
    return () => clearTimeout(timer);
  }, [phase]);

  // No page scrolling while the cover is up.
  useEffect(() => {
    if (phase === 'done') return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = 'hidden';
    return () => { html.style.overflow = previous; };
  }, [phase]);

  if (phase === 'done') return null;

  // The blur shrinks as the bar fills, down to END_BLUR; that last bit of blur then opens like
  // curtains (see the two halves below) instead of just disappearing.
  const blurValue = phase === 'fade'
    ? END_BLUR
    : END_BLUR + (MAX_BLUR - END_BLUR) * (1 - Math.min(progress, FADE_AT) / FADE_AT);
  const blur = blurValue.toFixed(2);
  const blurStyle = { backdropFilter: `blur(${blur}px)`, WebkitBackdropFilter: `blur(${blur}px)` };

  return (
    <div className={`sw-loader-root${phase === 'fade' ? ' is-fading' : ''}`} aria-hidden="true">
      {phase === 'fade' ? (
        <>
          {/* Loading done: the blur splits into two halves with soft inner edges that slide apart from
              the centre, one to the left and one to the right, like waves opening onto the page. */}
          <div className="sw-loader__half sw-loader__half--left" style={blurStyle} />
          <div className="sw-loader__half sw-loader__half--right" style={blurStyle} />
        </>
      ) : (
        /* While loading: one solid blur layer over the whole page (no seam in the middle). */
        <div className="sw-loader__backdrop" style={blurStyle} />
      )}
      <div className="sw-loader">
        <img className="sw-loader__logo" src={LogoImg} alt="" width="580" height="386" />
        <div className="sw-loader__bar">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </div>
  );
}

export default Loader;
