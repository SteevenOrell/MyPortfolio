import { useSyncExternalStore } from 'react';

// Shared "the loading screen has lifted" flag, so the hero can start its entrance animation
// at the right moment instead of playing hidden behind the loader.
let ready = false;
const listeners = new Set();

export function markSiteReady() {
  if (ready) return;
  ready = true;
  listeners.forEach(fn => fn());
}

export function useSiteReady() {
  return useSyncExternalStore(
    fn => { listeners.add(fn); return () => listeners.delete(fn); },
    () => ready,
  );
}
