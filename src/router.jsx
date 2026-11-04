import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

// A tiny client-side router: the site only has two pages ("/" and "/projects"),
// so a dependency like react-router is not needed.
const RouterContext = createContext(null);

const normalize = path => (path.replace(/\/+$/, '') || '/');

export function RouterProvider({ children }) {
  const [path, setPath] = useState(() => normalize(window.location.pathname));

  useEffect(() => {
    const onPop = () => setPath(normalize(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = useCallback((to) => {
    const url = new URL(to, window.location.href);
    const next = normalize(url.pathname);
    window.history.pushState({}, '', url.pathname + url.search + url.hash);
    setPath(next);
    // Go to the top of the new page, or to the section named in the hash once it has rendered.
    requestAnimationFrame(() => {
      const target = url.hash && document.getElementById(url.hash.slice(1));
      if (target) target.scrollIntoView();
      else window.scrollTo(0, 0);
    });
  }, []);

  const value = useMemo(() => ({ path, navigate }), [path, navigate]);
  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used inside <RouterProvider>');
  return ctx;
}

// <a> that changes page without reloading. Plain hash links on the same page keep their default behaviour.
export function Link({ to, onClick, ...props }) {
  const { navigate } = useRouter();
  const handle = (e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    navigate(to);
  };
  return <a href={to} onClick={handle} {...props} />;
}

// A link to a home-page section that works from any page: a plain hash link on home,
// a page change to "/#section" elsewhere.
export function SectionLink({ hash, ...props }) {
  const { path } = useRouter();
  return path === '/' ? <a href={hash} {...props} /> : <Link to={'/' + hash} {...props} />;
}
