// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCM1vh1OIKwx-fUveRyIhDM-Kbr9AzyPlA",
  authDomain: "purity-test-3baff.firebaseapp.com",
  projectId: "purity-test-3baff",
  storageBucket: "purity-test-3baff.appspot.com",
  messagingSenderId: "614537214125",
  appId: "1:614537214125:web:ede5b034c3c4efdaa2ae24",
  measurementId: "G-VPQWWPP27R",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
