// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` to the real production domain before launch (used for canonical URLs).
export default defineConfig({
  site: 'https://neonconcrete.example',
  build: {
    inlineStylesheets: 'auto',
  },
});
