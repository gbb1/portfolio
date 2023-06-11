// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAefFu324sZwMdBxEUgTxfs6THN_b8CZd0",
  authDomain: "folio-43185.firebaseapp.com",
  databaseURL: "https://folio-43185-default-rtdb.firebaseio.com",
  projectId: "folio-43185",
  storageBucket: "folio-43185.appspot.com",
  messagingSenderId: "542855791358",
  appId: "1:542855791358:web:ed25db51e303ce4afd5baf",
  measurementId: "G-V4K0Y2S165",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

export {
  db,
}