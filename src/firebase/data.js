import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB8mgjaML1S1gQPFkHWGwYNUkx2qUqt9O8",
  authDomain: "prueba-cidm6.firebaseapp.com",
  projectId: "prueba-cidm6",
  storageBucket: "prueba-cidm6.appspot.com",
  messagingSenderId: "394469121543",
  appId: "1:394469121543:web:f95da1a78a20c806ec14a2"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db