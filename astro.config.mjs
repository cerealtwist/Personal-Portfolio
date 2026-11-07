// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project sites live under /<repo-name>/. The deploy workflow sets
// BASE_PATH; locally it stays "/". If the repo is renamed to cerealtwist.github.io
// or a custom domain is added, set BASE_PATH to "/" in the workflow.
export default defineConfig({
  site: 'https://cerealtwist.github.io',
  base: process.env.BASE_PATH ?? '/',
});
