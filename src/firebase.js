import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZH36SSWvu5CDMdNFFg-4UOP22cV0Onc8",
  authDomain: "sample1-7a23d.firebaseapp.com",
  projectId: "sample1-7a23d",
  storageBucket: "sample1-7a23d.appspot.com",
  messagingSenderId: "543643939472",
  appId: "1:543643939472:web:8a059877e961df2fe09e15",
  measurementId: "G-KN5P5JDS3T",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider, storage };
export default db;
