import { initializeApp } from 'firebase/app'
import { getDatabase, ref as dbRef } from 'firebase/database'
import {useFirebaseStorage} from 'vuefire'

export const firebaseApp = initializeApp({
  // your application settings
  apiKey:  "AIzaSyACcIijnFLdNigR_6LC7In2Cr6zhT0GPPs",
  authDomain: "limelightwebsite-8910b.firebaseapp.com",
  databaseURL: "https://limelightwebsite-8910b-default-rtdb.firebaseio.com",
  projectId: "limelightwebsite-8910b",
  storageBucket: "limelightwebsite-8910b.appspot.com",
  messagingSenderId: "954982813342",
  appId: "1:954982813342:web:8ab3f1c70faf0746cfb58f",
  measurementId: "G-V3L60E7RCQ"
})

// used for the databas refs
export const db = getDatabase(firebaseApp)

// here we can export reusable database references
export const membersRef = dbRef(db, 'members')
export const imagesRef = useFirebaseStorage()
// ... other firebase imports
