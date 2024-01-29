// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQmI5SP2wxjhBB-zsT_mS4G9-H_QZeGFs",
  authDomain: "disneyplus-clone-bc983.firebaseapp.com",
  projectId: "disneyplus-clone-bc983",
  storageBucket: "disneyplus-clone-bc983.appspot.com",
  messagingSenderId: "724707192746",
  appId: "1:724707192746:web:97f3eed038fe83aa0645d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)