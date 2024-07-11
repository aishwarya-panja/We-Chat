import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmn_3w7FBHQf0-F0i0PzYGYzmoZpcs55s",
  authDomain: "wechat-bb4ba.firebaseapp.com",
  projectId: "wechat-bb4ba",
  storageBucket: "wechat-bb4ba.appspot.com",
  messagingSenderId: "783475645383",
  appId: "1:783475645383:web:b78d750b3368c1308997e2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();