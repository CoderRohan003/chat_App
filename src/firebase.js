import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBe1Bw7uir9YKJxKs5m8bKvxcartnFY8jQ",
  authDomain: "chat-3fa58.firebaseapp.com",
  projectId: "chat-3fa58",
  storageBucket: "chat-3fa58.appspot.com",
  messagingSenderId: "468464454999",
  appId: "1:468464454999:web:9bda477bd3f30a369b4212"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBBmyyqV5g4AP-QZxd4dVsUklUAyH6S7nM",
//   authDomain: "chatting-aba4c.firebaseapp.com",
//   projectId: "chatting-aba4c",
//   storageBucket: "chatting-aba4c.appspot.com",
//   messagingSenderId: "224777172192",
//   appId: "1:224777172192:web:af3534e317fae9497ecc85",
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
