// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcQimwL8XvpE__aWTKW4HHmyXAShHbekI",
  authDomain: "practic-email-password.firebaseapp.com",
  projectId: "practic-email-password",
  storageBucket: "practic-email-password.appspot.com",
  messagingSenderId: "83272615561",
  appId: "1:83272615561:web:91f7331540497b3d9f2858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;