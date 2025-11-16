// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj60S9fgASTONegie5Lqi5Ufc0ozreOJY",
  authDomain: "mental-health-problem.firebaseapp.com",
  projectId: "mental-health-problem",
  storageBucket: "mental-health-problem.appspot.com", // ✅ Correct
  messagingSenderId: "227841329328",
  appId: "1:227841329328:web:2a08a1e1870c6316a55375",
  measurementId: "G-H9N02J90RY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export const db = getFirestore(app);
