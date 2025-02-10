// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzbziWltMQADmdxa4xjiMQvtydEkkIIMs",
  authDomain: "test20240210-1af76.firebaseapp.com",
  projectId: "test20240210-1af76",
  storageBucket: "test20240210-1af76.firebasestorage.app",
  messagingSenderId: "15710166546",
  appId: "1:15710166546:web:82bcd6ae4669ac887e42cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);