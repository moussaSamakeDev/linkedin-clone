import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIx5xRQx8NQ3Ts6JNeiLQBxss-4Tp_Z4g",
    authDomain: "linkedin-262d0.firebaseapp.com",
    projectId: "linkedin-262d0",
    storageBucket: "linkedin-262d0.appspot.com",
    messagingSenderId: "230907228133",
    appId: "1:230907228133:web:54f173e01c8b3d1f8c490c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth};