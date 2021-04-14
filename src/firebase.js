import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa_2nZJa0RB-W60baRoNNQeHckZ-YLUmg",
  authDomain: "ecommerce-site-b5a83.firebaseapp.com",
  projectId: "ecommerce-site-b5a83",
  storageBucket: "ecommerce-site-b5a83.appspot.com",
  messagingSenderId: "382496435764",
  appId: "1:382496435764:web:70528caba07c5b84f2e461",
  measurementId: "G-R8L6NVEM46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
export default db;
