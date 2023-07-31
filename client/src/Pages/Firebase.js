// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBJkWO45AFU4FyHLs2n9VCYwZsgXkBh5SM",
  authDomain: "piligrims-c4a35.firebaseapp.com",
  projectId: "piligrims-c4a35",
  storageBucket: "piligrims-c4a35.appspot.com",
  messagingSenderId: "616154761164",
  appId: "1:616154761164:web:5622e75868ab5afa8cbf69",
  measurementId: "G-6MJ034RWL9"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// import firebase from 'firebase/compat/app'
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// const firebaseConfig = {
//   apiKey: "AIzaSyA4i-qsbrfND-vfAgJFduROngUhxiWcmYM",
//   authDomain: "blockchain-based-supply.firebaseapp.com",
//   projectId: "blockchain-based-supply",
//   storageBucket: "blockchain-based-supply.appspot.com",
//   messagingSenderId: "24116872624",
//   appId: "1:24116872624:web:8e4a435aaee3a5463e8275",
//   measurementId: "G-J6C7RZ6416"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export default firebase;