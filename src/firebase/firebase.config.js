// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcOGE_T_nc1QkPTyCpBXfwuEkydiiMkhc",
  authDomain: "a9-event-management.firebaseapp.com",
  projectId: "a9-event-management",
  storageBucket: "a9-event-management.appspot.com",
  messagingSenderId: "231649011077",
  appId: "1:231649011077:web:fcbc55852eb6842d4cd0ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;