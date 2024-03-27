// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@formkit/nuxt"],
  css: ["~/assets/main.css", "@fortawesome/fontawesome-svg-core/styles.css"],
  devtools: { enabled: true },
  build: {
    transpile: ["@fawmi/vue-google-maps"],
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API,
      gmapsId: process.env.NUXT_GMAPS,
      cookiebot: process.env.NUXT_COOKIEBOT,
    },
  },
  formkit: {
    autoImport: true,
  },
  gtag: {
    id: process.env.NUXT_GTAG,
  },
});
