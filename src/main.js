import './assets/main.css'
import { VueFire, VueFireAuth } from 'vuefire'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from './firebase'

const app = createApp(App)
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
    ],
  })
app.use(router)

app.mount('#app')
