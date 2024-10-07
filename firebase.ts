// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0iJPvGTw-SWwRDNGXJ8Wk-Xui1te6Vx4",
  authDomain: "hostel-and-hotel-map.firebaseapp.com",
  projectId: "hostel-and-hotel-map",
  storageBucket: "hostel-and-hotel-map.appspot.com",
  messagingSenderId: "266236204121",
  appId: "1:266236204121:web:86dbcae0e1bb62a0158d48",
  measurementId: "G-16BY4GV066"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };