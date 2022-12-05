// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLRTyDeZUY2AhpIt7jF7e2Ajv5nvmr2YY",
  authDomain: "journal-app-c7fee.firebaseapp.com",
  projectId: "journal-app-c7fee",
  storageBucket: "journal-app-c7fee.appspot.com",
  messagingSenderId: "947213580907",
  appId: "1:947213580907:web:d8a60f2d35f0ba5e154f2e"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth( firebaseApp )
export const firebaseDB = getFirestore( firebaseApp )