// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKBefFaz8I81wnN20cxisCCi0E4x1SWVc",
  authDomain: "food-house-bba93.firebaseapp.com",
  projectId: "food-house-bba93",
  storageBucket: "food-house-bba93.appspot.com",
  messagingSenderId: "7372974558",
  appId: "1:7372974558:web:90e505554dcbc1c1bf154f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;