import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [],
	build: {
		rollupOptions: {
			input: './src/working.html'
		}
	}
};

export default config;
