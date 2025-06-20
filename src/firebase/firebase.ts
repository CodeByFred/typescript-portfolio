// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_FIRESTORE_API_KEY}`,
  authDomain: "fredjackportfolio.firebaseapp.com",
  projectId: "fredjackportfolio",
  storageBucket: "fredjackportfolio.firebasestorage.app",
  messagingSenderId: "985886338602",
  appId: "1:985886338602:web:68b3a43581235936481d53",
  measurementId: "G-GVGRXKVTFJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
