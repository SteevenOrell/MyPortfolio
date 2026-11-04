import { useEffect, useRef, useState } from 'react';
import LogoImg from './assets-copy/SteevenWeminLogo.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import { SectionLink, useRouter } from '../router';

const SECTIONS = ['about', 'experience', 'work', 'skills', 'goals'];

function LanguageSwitch({ className = '' }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className={`sw-lang ${className}`} role="group" aria-label={t.nav.language}>
      {LANGUAGES.map(code => (
        <button
          key={code}
          type="button"
          className={code === lang ? 'is-active' : ''}
          aria-pressed={code === lang}
          lang={code}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function NavB() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const menuButton = useRef(null);
  const { path } = useRouter();

  // Solid background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    // On /projects the "Work" link stays highlighted.
    if (path !== '/') { setActive('work'); return; }
    setActive('');
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [path]);

  // Full-screen menu: lock page scroll and close with Escape.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = e => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      menuButton.current?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="sw-skip" href="#main">{t.nav.skip}</a>

      <header className={`sw-nav${scrolled ? ' is-scrolled' : ''}`}>
        {/* Shown on tablet/mobile only: Menu on the left, logo centred, "Let's talk" on the right. */}
        <button
          ref={menuButton}
          type="button"
          className="sw-nav__menu"
          aria-expanded={open}
          aria-controls="sw-overlay"
          onClick={() => setOpen(true)}
        >
          <span className="sw-nav__burger" aria-hidden="true"><i /><i /></span>
          {t.nav.menu}
        </button>

        <SectionLink className="sw-nav__logo" hash="#top" aria-label={t.nav.home}>
          <img src={LogoImg} alt="" width="44" height="44" />
        </SectionLink>

        <nav className="sw-nav__links" aria-label="Main">
          {SECTIONS.map((id, i) => (
            <SectionLink key={id} hash={`#${id}`} className={active === id ? 'is-active' : ''} aria-current={active === id ? 'true' : undefined}>
              <span className="sw-nav__num">0{i + 1}</span>
              {t.nav.links[id]}
            </SectionLink>
          ))}
        </nav>

        <div className="sw-nav__right">
          <LanguageSwitch className="sw-nav__lang" />
          <a className="sw-btn sw-btn--pill sw-nav__cta" href="#ContactForm">{t.nav.cta}</a>
        </div>
      </header>

      <div id="sw-overlay" className={`sw-overlay${open ? ' is-open' : ''}`} aria-hidden={!open} inert={open ? undefined : ''}>
        <div className="sw-overlay__top">
          <LanguageSwitch />
          <button type="button" className="sw-overlay__close" onClick={close} autoFocus={open}>
            {t.nav.close} <span aria-hidden="true">✕</span>
          </button>
        </div>
        <nav className="sw-overlay__nav" aria-label="Mobile">
          {SECTIONS.map((id, i) => (
            <SectionLink key={id} hash={`#${id}`} onClick={close} style={{ transitionDelay: open ? `${0.08 + i * 0.05}s` : '0s' }}>
              <span className="sw-overlay__num">0{i + 1}</span>
              {t.nav.links[id]}
            </SectionLink>
          ))}
        </nav>
        <a className="sw-btn sw-btn--primary sw-overlay__cta" href="#ContactForm" onClick={close}>{t.nav.cta} →</a>
      </div>
    </>
  );
}

export default NavB;
