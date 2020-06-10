import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';


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

export function FBApp() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
  
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return (
        <View>
          <Text>Login</Text>
        </View>
      );
    }
  
    return (
      <View>
        <Text>{user.email}</Text>
      </View>
    );
}

