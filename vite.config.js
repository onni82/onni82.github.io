import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
	if (command === 'serve') {
		return {
			// dev specific config
			plugins: [react()],
		}
	} else {
		// command === 'build'
		return {
			//build specific config
			plugins: [react()],
			base: '/onniserver/',
			build: {
				rollupOptions: {
					input: {
						main: resolve(__dirname, "index.html"),
						404:  resolve(__dirname, "public/404.html"),
					}
				}
			},
		}
	}
});
