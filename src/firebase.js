import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBnzA-eEbDRAI29QKorvniaSc6YY1q2LlY",
  authDomain: "clone-2cad8.firebaseapp.com",
  databaseURL: "https://clone-2cad8.firebaseio.com",
  projectId: "clone-2cad8",
  storageBucket: "clone-2cad8.appspot.com",
  messagingSenderId: "130403226382",
  appId: "1:130403226382:web:55eaa50705537481933d5f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };