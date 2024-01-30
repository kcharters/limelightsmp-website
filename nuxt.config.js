// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ... other modules
    'nuxt-vuefire',
  ],
  vuefire: {
    config: {
      apiKey: "AIzaSyACcIijnFLdNigR_6LC7In2Cr6zhT0GPPs",
      authDomain: "limelightwebsite-8910b.firebaseapp.com",
      databaseURL: "https://limelightwebsite-8910b-default-rtdb.firebaseio.com",
      projectId: "limelightwebsite-8910b",
      storageBucket: "limelightwebsite-8910b.appspot.com",
      messagingSenderId: "954982813342",
      appId: "1:954982813342:web:8ab3f1c70faf0746cfb58f",
      measurementId: "G-V3L60E7RCQ"
      // there could be other properties depending on the project
    },
  },
  devtools: { enabled: true }
})
