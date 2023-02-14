// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-HxRXHwHsHgNRGK0lgPU8eUUTueRK-YQ",
  authDomain: "realtor-clone-react-5a5fb.firebaseapp.com",
  projectId: "realtor-clone-react-5a5fb",
  storageBucket: "realtor-clone-react-5a5fb.appspot.com",
  messagingSenderId: "811449770164",
  appId: "1:811449770164:web:7c1b4b6ba4e6862ea477e1",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
