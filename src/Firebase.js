// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore functions

const firebaseConfig = {
    apiKey: "AIzaSyC_c4LES3GP-wpVVob2f_JSA_lWaDd9J0I",
    authDomain: "thinkmore-12025.firebaseapp.com",
    projectId: "thinkmore-12025",
    storageBucket: "thinkmore-12025.appspot.com",
    messagingSenderId: "983876683557",
    appId: "1:983876683557:web:a3f75daf1703cd62177ccc",
    measurementId: "G-W35CF1DCXY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app); // Initialize Firestore

export { auth, provider, signInWithPopup, db }; // Export Firestore
