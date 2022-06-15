import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAf2Fna2KJjBB27ll4zrX2NerBY-7C3cnQ",
    authDomain: "todo-demo-0-26fa7.firebaseapp.com",
    projectId: "todo-demo-0-26fa7",
    storageBucket: "todo-demo-0-26fa7.appspot.com",
    messagingSenderId: "539392816336",
    appId: "1:539392816336:web:3f1de9507b5cdd5a679ad5"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;