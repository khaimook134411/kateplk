import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'
import 'firebase/compat/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxleZLwn-nxQ64-92YIWt4D9t_17Cgh2M",
    authDomain: "kateplk.firebaseapp.com",
    projectId: "kateplk",
    storageBucket: "kateplk.appspot.com",
    messagingSenderId: "198774215688",
    appId: "1:198774215688:web:da5a55cefa5d63fcb9edbd",
    measurementId: "G-PL4P48VYFM"
});

export const firestore = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage = firebaseApp.storage();
// export const googleProvider = new firebase.auth.GoogleAuthProvider();
// export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export default firebaseApp;