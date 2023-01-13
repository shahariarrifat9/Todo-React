import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD11HHz6E5uY4NTLE5ZXzSdqv9A4gmpLJ0",
  authDomain: "dailylife-e7cf0.firebaseapp.com",
  projectId: "dailylife-e7cf0",
  storageBucket: "dailylife-e7cf0.appspot.com",
  messagingSenderId: "972744217994",
  appId: "1:972744217994:web:41fcb9d546532ac884e473",
  measurementId: "G-56EGL59DQ9"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



  export{
    auth, 
    db
  }
  