import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBhybNob2h_M1lSWhfh7ok50EprWh7jOdM",
  authDomain: "blog-5f2df.firebaseapp.com",
  projectId: "blog-5f2df",
  storageBucket: "blog-5f2df.appspot.com",
  messagingSenderId: "521512424342",
  appId: "1:521512424342:web:bedd95c867ef5abc0443b7",
//   measurementId: "G-Y6HX5G2EP8"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;