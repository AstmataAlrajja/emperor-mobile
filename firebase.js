// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA6UsFfwVwe_1r6h6q-3q56CkjBxCxkNWc",
  authDomain: "emperor-mobile.firebaseapp.com",
  projectId: "emperor-mobile",
  storageBucket: "emperor-mobile.firebasestorage.app",
  messagingSenderId: "473998218299",
  appId: "1:473998218299:web:dd1c9e969ec2cc58aa381e",
  measurementId: "G-RE0RGD8LQV"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase Connected");
