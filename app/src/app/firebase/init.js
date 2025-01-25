// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSUGJ-jwpxYXEvn6ErlUjTPNJbDDe2TXY",
  authDomain: "allusdb.firebaseapp.com",
  projectId: "allusdb",
  storageBucket: "allusdb.firebasestorage.app",
  messagingSenderId: "297667933701",
  appId: "1:297667933701:web:62a2bda6f7652bab3e4e6c",
  measurementId: "G-7FPC3T0ZWK"
};

const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);


export { app, auth, provider };