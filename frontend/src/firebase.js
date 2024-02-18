// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEoz23f5a5H1019jvcVUTHmz0XS4cwzaI",
  authDomain: "fitness-auth-5c8d2.firebaseapp.com",
  projectId: "fitness-auth-5c8d2",
  storageBucket: "fitness-auth-5c8d2.appspot.com",
  messagingSenderId: "660635935825",
  appId: "1:660635935825:web:b61e912d3d7be4fae2c470",
  measurementId: "G-M0HGFK59BX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth();

export {auth,app};