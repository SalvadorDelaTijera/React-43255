import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "inventario-bcbf6.firebaseapp.com",
  projectId: "inventario-bcbf6",
  storageBucket: "inventario-bcbf6.appspot.com",
  messagingSenderId: "193140657808",
  appId: "1:193140657808:web:b0eafbecdd6d65358e5215"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);