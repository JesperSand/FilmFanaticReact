// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';  



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-PI0ZJCrWuIkTr7RVSofJdgcXBR21r18",
  authDomain: "filmfanatic-7d265.firebaseapp.com",
  projectId: "filmfanatic-7d265",
  storageBucket: "filmfanatic-7d265.firebasestorage.app",
  messagingSenderId: "1031117293329",
  appId: "1:1031117293329:web:1e7633dc533e44a15deeb0",
  measurementId: "G-FF32LYE65B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // This creates the Firebase app instance

// Initialize Firebase Authentication
const auth = getAuth(app);

const db = getFirestore(app); // Firebase initialization

// Initialize Firebase Analytics (optional)
const analytics = getAnalytics(app);

// Export auth to use in other components
export { auth, analytics, db };
