import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import database from '@react-native-firebase/database';

export default class DBselect extends React.Component {

    selectUserData(){
        database()
        .ref('User').child('eunchae')
        .once('value')
        .then(snapshot => {
        console.log('User data: ', snapshot.val());
  });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {{fontSize : 20}}>
                    DBselect
                </Text>
                <Button title = "select" onPress = {() => this.selectUserData()}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1E90FF',
        alignItems : 'center', 
    },
});