// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-04-10",
  devtools: { enabled: true },
  modules: ["@nuxtjs/eslint-module", "@nuxt/fonts"],
  css: ["~/assets/css/main.css"],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },
  builder: "vite",
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
      hmr: {
        protocol: "ws",
        host: "localhost",
        overlay: false,
      },
    },
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});
