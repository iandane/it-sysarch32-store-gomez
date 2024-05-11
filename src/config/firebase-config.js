import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARXaORFpEdic0kfitO78O8SS2v36dXazQ",
  authDomain: "it-sysarch32-store-gomez-3d802.firebaseapp.com",
  projectId: "it-sysarch32-store-gomez-3d802",
  storageBucket: "it-sysarch32-store-gomez-3d802.appspot.com",
  messagingSenderId: "514683378906",
  appId: "1:514683378906:web:9959a1aa2057c6535799e3",
  measurementId: "G-T8VZSWCQ61"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);

export const storage = getStorage(app);