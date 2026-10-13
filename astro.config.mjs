// @ts-check
import { defineConfig } from 'astro/config';

// Fully static build: every page is pre-rendered to plain HTML in /dist.
// No server, no adapter needed — Cloudflare serves the files from its edge.
export default defineConfig({
  site: 'https://www.skybarge.in',
  output: 'static',
  // Keep the same URL shape as the old WordPress site (/about-us/) so
  // existing Google rankings and bookmarks keep working.
  trailingSlash: 'always',
  build: { format: 'directory' },
});
