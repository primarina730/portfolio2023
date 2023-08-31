import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDGv8Ux0mQOLoE_Ycn81oJL032e80v07JI",
  authDomain: "deliverable-69fe8.firebaseapp.com",
  projectId: "deliverable-69fe8",
  storageBucket: "deliverable-69fe8.appspot.com",
  messagingSenderId: "1063129565856",
  appId: "1:1063129565856:web:2f76faa40802fe66be17c5",
});

const db = firebaseApp.firestore();

export { db };
