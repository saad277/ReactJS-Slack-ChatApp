import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCusMr1PqsMP51zmhOLt8FThfp0h8xkgPo",
  authDomain: "project1-909d1.firebaseapp.com",
  databaseURL: "https://project1-909d1.firebaseio.com",
  projectId: "project1-909d1",
  storageBucket: "project1-909d1.appspot.com",
  messagingSenderId: "387087048955",
  appId: "1:387087048955:web:1600d7a4d22fa7dbe1105e",
  measurementId: "G-YL8HRT0FZX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
