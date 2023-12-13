// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeFERHZLAlcW0xy0Kb-hR1RF382UbBsSg",
  authDomain: "netflix-gpt-f5564.firebaseapp.com",
  projectId: "netflix-gpt-f5564",
  storageBucket: "netflix-gpt-f5564.appspot.com",
  messagingSenderId: "821564395748",
  appId: "1:821564395748:web:de889935e747c9624d1cf1",
  measurementId: "G-Y1Z5TB9R08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
