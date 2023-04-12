import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAwiGLAC-C14y93fBfk2WA9N2-s_kfpm8w",
  authDomain: "proyectoreactfinalbugari.firebaseapp.com",
  projectId: "proyectoreactfinalbugari",
  storageBucket: "proyectoreactfinalbugari.appspot.com",
  messagingSenderId: "340362486661",
  appId: "1:340362486661:web:d6a8626c7ee7e3125a9aec"
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);