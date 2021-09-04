import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD-fHVtHoPeTTjt4C4F6Q3NPWkKQQfmJDs",
    authDomain: "facebook-66820.firebaseapp.com",
    projectId: "facebook-66820",
    storageBucket: "facebook-66820.appspot.com",
    messagingSenderId: "659572036707",
    appId: "1:659572036707:web:1ee2527af55575358d9456"
  };

  const app = !firebase.apps.length 
        ? firebase.initializeApp(firebaseConfig) 
        : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db , storage}