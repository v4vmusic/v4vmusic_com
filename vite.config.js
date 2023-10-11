import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			$functions: path.resolve('src', 'lib', 'functions'),
			$: path.resolve('src'),
			$icons: path.resolve('src', 'lib', 'icons'),
			$lib: path.resolve('src', 'lib'),
			$routes: path.resolve('src', 'routes')
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
