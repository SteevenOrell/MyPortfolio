import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations, LANGUAGES } from './translations';

const STORAGE_KEY = 'portfolio-lang';
const LanguageContext = createContext(null);

// Order of preference: ?lang= in the URL, the visitor's saved choice, the browser language, English.
function initialLanguage() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('lang');
    if (LANGUAGES.includes(fromUrl)) return fromUrl;
  } catch { /* ignore */ }
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (LANGUAGES.includes(saved)) return saved;
  } catch { /* storage can be blocked */ }
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return LANGUAGES.includes(browser) ? browser : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLanguage);
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
    // The tab title is set in App, since it depends on the page too.
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description);
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch { /* ignore */ }
  }, [lang, t]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
