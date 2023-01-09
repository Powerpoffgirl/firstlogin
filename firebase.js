// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ8W8p1QD6o6eARHfqLc6SPa3DYPR_MeE",
  authDomain: "firstlogin-12ca1.firebaseapp.com",
  projectId: "firstlogin-12ca1",
  storageBucket: "firstlogin-12ca1.appspot.com",
  messagingSenderId: "269003722032",
  appId: "1:269003722032:web:1cc74f4cafb61199840cf5",
  measurementId: "G-7HLNC3QNKN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
