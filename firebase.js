import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDB92EWET2uRZOOJd2larJNV2n-9Ar1byQ",
    authDomain: "admin-dashboard-36741.firebaseapp.com",
    projectId: "admin-dashboard-36741",
    storageBucket: "admin-dashboard-36741.firebasestorage.app",
    messagingSenderId: "99723168707",
    appId: "1:99723168707:web:482e99e3d160d8a12b0b76",
    measurementId: "G-6M8010T2WS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut, onAuthStateChanged };
