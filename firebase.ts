// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbgNzFY7sNDEeJkMJTXqBxK31qFK6UBng",
  authDomain: "insta-cloe.firebaseapp.com",
  projectId: "insta-cloe",
  storageBucket: "insta-cloe.appspot.com",
  messagingSenderId: "584195413407",
  appId: "1:584195413407:web:48bb708bbc8c674a67d9aa"
};

// Initialize Firebase
const app = !getApps().length ?  initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };