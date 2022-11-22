import firebase from "firebase";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAL-OS4cChAFYRHtTuGoaUIzqVdPQhRIV8",
  authDomain: "fir-4d495.firebaseapp.com",
  projectId: "fir-4d495",
  storageBucket: "fir-4d495.appspot.com",
  messagingSenderId: "1078149849469",
  appId: "1:1078149849469:web:d9e9615fe6d89683da6c14",
  measurementId: "G-FTHBBZXHWL",
};

const Firebase = firebase.initializeApp(firebaseConfig);

const db = Firebase.firestore();
const auth = firebase.auth();

export { auth, db, Firebase };
