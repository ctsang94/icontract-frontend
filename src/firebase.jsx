// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe50JNFW_8wxT-eHWgMhyOUVegkjEuvJw",
  authDomain: "icontract-aaac7.firebaseapp.com",
  projectId: "icontract-aaac7",
  storageBucket: "icontract-aaac7.appspot.com",
  messagingSenderId: "47856065456",
  appId: "1:47856065456:web:e137a9920d210e8b6e9475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth};
