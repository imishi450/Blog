// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import  {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ84Nv9sshb2Ut-rL6-p58fEcW29mL2vI",
  authDomain: "blog-8fbb2.firebaseapp.com",
  projectId: "blog-8fbb2",
  storageBucket: "blog-8fbb2.appspot.com",
  messagingSenderId: "334349985619",
  appId: "1:334349985619:web:29a1d29ffbe87fc1cbe3a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
export const auth= getAuth(app);
export const provider= new GoogleAuthProvider();