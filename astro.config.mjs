// @ts-check
import { defineConfig } from 'astro/config';

// BASE_PATH is set in .github/workflows/deploy.yml (/Personal-Portfolio)
export default defineConfig({
  site: 'https://cerealtwist.github.io',
  base: process.env.BASE_PATH ?? '/',
});
