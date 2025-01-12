import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
    },
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
