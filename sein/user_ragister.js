import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { Button, Input } from 'react-native-elements';

import auth from '@react-native-firebase/auth';
import Firebase from 'firebase';

class User_register extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',
      name : '',
      age : ''
    })
  }

  createUser = (email, password, name, age) => {
    auth()
      .createUserWithEmailAndPassword(email,password)
      .then(() => {
        console.log('User account created & signed in!');
        alert('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          alert("That email address is already in use!");
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          alert('That email address is invalid!');
        }

        console.error(error);
      });

      Firebase.database().ref('User/').child(name).push({
          age
      }).then((data) => {
          console.log('data', data)
      }).catch((error) =>{
          console.log('error, error')
      })
  }

  render() {
    return (
      <View>
        <Input
          placeholder='Enter Email'
          onChangeText={(email) => this.setState({ email })}
        />
        <Input
          placeholder='Enter password'
          onChangeText={(password) => this.setState({ password })}
        />
        <Input
          placeholder='Enter name'
          onChangeText={(name) => this.setState({ name })}
        />
        <Input
          placeholder='Enter age'
          onChangeText={(age) => this.setState({ age })}
        />
        <View style={{ marginTop: 40, flexDirection: 'row' }}>
          <Button
            title="Sign UP"
            onPress={() => this.createUser(this.state.email, this.state.password, this.state.name, this.state.age)}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default User_register;

