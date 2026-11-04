import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Keep the existing REACT_APP_* variable names so the Vercel env settings keep working.
  envPrefix: ['VITE_', 'REACT_APP_'],
  build: {
    // Same output folder as Create React App, so Vercel's output setting is unchanged.
    outDir: 'build',
    // Don't publish source maps (they expose the original source code).
    sourcemap: false,
  },
  server: {
    port: 3000,
  },
});
