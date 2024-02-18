import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuIQ7J0j6EtjvWJPjpJ4-xbNKk-bIYhPo",
  authDomain: "fitness-app-8fe80.firebaseapp.com",
  projectId: "fitness-app-8fe80",
  storageBucket: "fitness-app-8fe80.appspot.com",
  messagingSenderId: "819498651258",
  appId: "1:819498651258:web:e6f6eb70a25d03c66d75c3",
  measurementId: "G-JX7F1DZZ3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
