// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration main
const firebaseConfig = {
  apiKey: "AIzaSyDeRvY5kt8h7Wtsy5Wiocm0mHJKZLHObXQ",
  authDomain: "previ-pmj.firebaseapp.com",
  projectId: "previ-pmj",
  storageBucket: "previ-pmj.appspot.com",
  messagingSenderId: "608647635223",
  appId: "1:608647635223:web:163e4cf6ed868c89d81752"
};

/* banco de testes
const firebaseConfig = {//banco de testes
  apiKey: "AIzaSyBxSJK-OOBCB1aUnNz2Ei3LBKGedPCu-uc",
  authDomain: "previ-teste-defd6.firebaseapp.com",
  projectId: "previ-teste-defd6",
  storageBucket: "previ-teste-defd6.appspot.com",
  messagingSenderId: "202746977225",
  appId: "1:202746977225:web:78bf4b8f37a526011c2618"
};
 */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app);

export { app, auth };
export const db = getFirestore(app);
export const storage = getStorage(app)