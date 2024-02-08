
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "../public/css/bootstrap.min.css",
    'vuetify/lib/styles/main.sass'
  ],
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  plugins: [
    { src: "../public/js/bootstrap.bundle.min.js", mode: "client" }
  ],
  components: [
    {
      path: '@components/',
      pathPrefix: false,
    },
  ],
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    /* module options */
  }
})
