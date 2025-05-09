// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvQywGZkNpsKqIke4X1DpVTLE6EItvvoY",
  authDomain: "temp-71148.firebaseapp.com",
  projectId: "temp-71148",
  storageBucket: "temp-71148.firebasestorage.app",
  messagingSenderId: "312953690222",
  appId: "1:312953690222:web:8b030196ad652a1f2e6e7f",
  measurementId: "G-X5ZW44VYFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // or getFirestore(app)

export { db, ref, set };