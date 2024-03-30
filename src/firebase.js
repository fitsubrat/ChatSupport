import { initializeApp } from "firebase/app";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCDtRezPHw_vqjEzZ_19UIhYfcsG6b9BFY",
  authDomain: "chat-99ef9.firebaseapp.com",
  projectId: "chat-99ef9",
  storageBucket: "chat-99ef9.appspot.com",
  messagingSenderId: "1064412431739",
  appId: "1:1064412431739:web:2d107bffe301591c2369de"
};


// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in.
    console.log("User is signed in:", user);
  } else {
    // User is signed out.
    console.log("User is signed out");
  }
}, (error) => {
  console.error("Authentication error:", error);
});