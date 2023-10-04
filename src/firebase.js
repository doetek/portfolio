
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
import 'firebase/firestore';

const firebaseConfig = {
  
    apiKey: "AIzaSyClqokU8c88n1pon0mbUQ9zf7jwyNNxC5Y",
    authDomain: "react-portfolio-dashbord-2b41e.firebaseapp.com",
    projectId: "react-portfolio-dashbord-2b41e",
    storageBucket: "react-portfolio-dashbord-2b41e.appspot.com",
    messagingSenderId: "1067545136058",
    appId: "1:1067545136058:web:36dcbd016f5e2b8724eb83"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);