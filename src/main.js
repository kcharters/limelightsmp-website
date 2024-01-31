import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from './firebase'
import { VueFire, VueFireAuth } from 'vuefire'
//import bootstrap


// Import Bootstrap  CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'



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
