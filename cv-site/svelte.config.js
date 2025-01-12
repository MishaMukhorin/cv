import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import * as process from ".svelte-kit/ambient.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
      		base: process.env.NODE_ENV === 'production' ? '/<repository-name>' : '',
    	},
	}
};

export default config;
