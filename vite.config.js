import { defineConfig } from 'vite';

export default defineConfig({
  base: '/', // Change to '/your-repo-name/' if deploying to GitHub Pages
  build: {
    outDir: 'dist', // Netlify/StackBlitz expect this
    emptyOutDir: true, // Clears old files on build
  },
  server: {
    open: true // Optional: Opens browser on dev server start
  }
});
