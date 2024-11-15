// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNqqHDiyxPSIlfVqukRmmMpo8lINW_dc",
  authDomain: "dragon-news-auth-fae43.firebaseapp.com",
  projectId: "dragon-news-auth-fae43",
  storageBucket: "dragon-news-auth-fae43.firebasestorage.app",
  messagingSenderId: "537458772281",
  appId: "1:537458772281:web:668e790adf4ffd483280e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app   