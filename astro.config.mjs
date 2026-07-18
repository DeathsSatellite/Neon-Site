// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` to the real production domain before launch (used for canonical URLs).
export default defineConfig({
  site: 'https://deathssatellite.github.io',
  base: '/my-portfolio/'

  build: {
    inlineStylesheets: 'auto',
  },
});
