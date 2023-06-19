// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFRbaRJY2y8VWEGWgltdh6QMK10ceo14",
  authDomain: "expense-tracker-e514d.firebaseapp.com",
  projectId: "expense-tracker-e514d",
  storageBucket: "expense-tracker-e514d.appspot.com",
  messagingSenderId: "209082559298",
  appId: "1:209082559298:web:51044ae118939d8df376db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
