// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyxZlRYbnwZQSKb31ISKCwhI0jnNKgEWo",
  authDomain: "upliftu-dd328.firebaseapp.com",
  projectId: "upliftu-dd328",
  storageBucket: "upliftu-dd328.appspot.com",
  messagingSenderId: "43401751966",
  appId: "1:43401751966:web:7d3a21d3a754bddd383a8f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;
