// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			// these are the aliases and paths to them
			$functions: path.resolve('src', 'lib', 'functions'),
			$: path.resolve('src'),
			$icons: path.resolve('src', 'lib', 'icons'),
			$lib: path.resolve('src', 'lib'),
			$routes: path.resolve('src', 'routes')
		}
	}
};

export default config;
