// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2026-04-10',
	devtools: { enabled: true },
	modules: ['@nuxtjs/eslint-module', '@nuxt/fonts'],
	css: ['~/assets/css/main.css'],
	nitro: {
		prerender: {
			autoSubfolderIndex: false,
		},
	},
	builder: 'vite',
	vite: {
		server: {
			watch: {
				usePolling: true,
			},
			hmr: {
				protocol: 'ws',
				host: 'localhost',
				overlay: false,
			},
		},
		optimizeDeps: {
			include: ['@vue/devtools-core', '@vue/devtools-kit'],
		},
	},
	runtimeConfig: {
		sudoku: {
			apiUrl: 'https://sugoku.onrender.com/board',
			apiTimeout: 5000,
			validDifficulties: ['easy', 'medium', 'hard'],
		},
		public: {
			apiBase: '/api',
		},
	},
});
