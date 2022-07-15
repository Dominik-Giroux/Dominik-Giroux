import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWw0gdskFArHW0Clo89sRGhXvhtEQKZnk",
  authDomain: "eloise-giroux.firebaseapp.com",
  projectId: "eloise-giroux",
  storageBucket: "eloise-giroux.appspot.com",
  messagingSenderId: "779625996730",
  appId: "1:779625996730:web:e1b79e70207275b2e8bd83",
  measurementId: "G-V5YEFPTVG7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
