import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // This is important to set the base path when deployed to GitHub Pages
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/repository-name' : ''
    },
    // Add the adapter to deploy to GitHub Pages
    adapter: {
      name: 'adapter-static',
      options: {
        pages: 'build',
        assets: 'build',
        fallback: null,
      },
    },
  },
  preprocess: sveltePreprocess(),
};

export default config;
