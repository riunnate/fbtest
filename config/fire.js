import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA1-KRqB_8BiSdS7cxvbfK1B_pvKCVeO4A",
    authDomain: "fbtest-94561.firebaseapp.com",
    databaseURL: "https://fbtest-94561.firebaseio.com",
    projectId: "fbtest-94561",
    storageBucket: "fbtest-94561.appspot.com",
    messagingSenderId: "433146594651",
    appId: "1:433146594651:web:8e16685a18d512b9a7c67e",
    measurementId: "G-LJ85X50HJG"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    const fire = firebase.initializeApp(firebaseConfig);
  }
export default fire;
