import { initializeApp } from 'firebase/app'
import { getDatabase, dbRef } from 'firebase/database'
// ... other firebase imports

export default firebaseApp = initializeApp({
  // your application settings
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
})

// used for the databas refs
 db = getDatabase(firebaseApp)

// here we can export reusable database references
export const membersRef = dbRef(db, 'members')
