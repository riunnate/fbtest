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


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    })
  }

  signin = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email,password)
      .then(() => {
        console.log('User account created & signed in!');
        this.props.navigation.navigate("Main");
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          alert('That email address is invalid!');
        }

        console.error(error);
      });
  }

  logoff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
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
        <View style={{ marginTop: 40, flexDirection: 'row' }}>
          <Button
            title="Sign In"
            onPress={() => this.signin(this.state.email, this.state.password)}
          />
          <Button
            title="Sign UP"
            onPress={() => this.props.navigation.navigate("User_register")}
          />
          <Button title="Logoff" onPress={this.logoff} />
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

export default Login;

