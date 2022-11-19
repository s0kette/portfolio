// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPSzaEcmGsCTYpgPtlM9lin7sTF37zS-M",
    authDomain: "portfolio-39b6a.firebaseapp.com",
    projectId: "portfolio-39b6a",
    storageBucket: "portfolio-39b6a.appspot.com",
    messagingSenderId: "4685854423",
    appId: "1:4685854423:web:a30a1f6ee5dae8d97e2292",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
