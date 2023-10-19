import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyCfiiIM9EciSq3g5wKf7onpx3RjbAJMEDw",
  authDomain: "crudapp-6ed7b.firebaseapp.com",
  projectId: "crudapp-6ed7b",
  storageBucket: "crudapp-6ed7b.appspot.com",
  messagingSenderId: "494086804086",
  appId: "1:494086804086:web:322de9c8b3527059c90557"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);