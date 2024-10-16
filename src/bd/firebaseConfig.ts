// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeRvY5kt8h7Wtsy5Wiocm0mHJKZLHObXQ",
  authDomain: "previ-pmj.firebaseapp.com",
  projectId: "previ-pmj",
  storageBucket: "previ-pmj.appspot.com",
  messagingSenderId: "608647635223",
  appId: "1:608647635223:web:163e4cf6ed868c89d81752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export { app, auth };
export const db = getFirestore(app);
export const storage = getStorage(app)