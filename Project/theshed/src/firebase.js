import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyANBHZ3ZJhqbX19QfL2JZOYgZyzUTO-RjM",
    authDomain: "theshed-fbc32.firebaseapp.com",
    databaseURL: "https://theshed-fbc32.firebaseio.com",
    projectId: "theshed-fbc32",
    storageBucket: "theshed-fbc32.appspot.com",
    messagingSenderId: "20614670918",
    appId: "1:20614670918:web:fc9b947906057c32d5b847",
    measurementId: "G-E9M8V45TXP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;
