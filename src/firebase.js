import firebase from 'firebase/app'

import "firebase/auth"
import 'firebase/database'
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyATT_iy_gjeFVF2KNMoA3SyEbmWKMNLBY4",
    authDomain: "react-slack-app-b06b0.firebaseapp.com",
    databaseURL: "https://react-slack-app-b06b0.firebaseio.com",
    projectId: "react-slack-app-b06b0",
    storageBucket: "react-slack-app-b06b0.appspot.com",
    messagingSenderId: "137901178705",
    appId: "1:137901178705:web:affc3be7d3147ff2ac1d70"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase;