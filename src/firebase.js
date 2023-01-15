// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQv_5eY2INh0iuXw33QIEFpDKl-PYhTVQ",
  authDomain: "chat-cd3e7.firebaseapp.com",
  projectId: "chat-cd3e7",
  storageBucket: "chat-cd3e7.appspot.com",
  messagingSenderId: "419515707145",
  appId: "1:419515707145:web:22752714936ddd9857add8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()  
export const db = getFirestore() 
export const storage = getStorage();