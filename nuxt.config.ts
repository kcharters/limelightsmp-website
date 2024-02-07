// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "../public/css/bootstrap.min.css"
  ],
  plugins: [
    { src: "../public/js/bootstrap.bundle.min.js", mode: "client" }
  ],
})
