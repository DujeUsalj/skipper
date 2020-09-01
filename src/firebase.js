import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIR7pvWmLI9lmzlFzTpgIzunDMBA6NhBo",
  authDomain: "skipper-d8416.firebaseapp.com",
  databaseURL: "https://skipper-d8416.firebaseio.com",
  projectId: "skipper-d8416",
  storageBucket: "skipper-d8416.appspot.com",
  messagingSenderId: "195395855611",
  appId: "1:195395855611:web:42ac1389c696885efafc5e",
  measurementId: "G-H1XRTDXR7B",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
