import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import Firebase from 'firebase'
import database from '@react-native-firebase/database';

import { Button, Input } from 'react-native-elements';


export default class DBtest extends React.Component {
    
    writeuserdata(dataA, dataB){
        let today = new Date() 
        let dateYMD = today.getFullYear().toString() + "," + (today.getMonth()+1).toString() + "," + today.getDay().toString()
        let dateHM = today.getHours().toString() +":"+ today.getMinutes().toString()
        Firebase.database().ref('User/').child('eunchae').child(dateYMD).child(dateHM).set({
            dataA,
            dataB
        }).then((data) => {
            console.log('data', data)
        }).catch((error) =>{
            console.log('error, error')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {{fontSize : 20}}>
                    DBtest
                </Text>
                <Input
                    placeholder='data A'
                    onChangeText = {(dataA)=> this.setState({dataA})}
                />
                <Input
                    placeholder='data B'
                    onChangeText = {(dataB)=> this.setState({dataB})}
                />
                <View style = {{marginTop: 40, flexDirection: 'row' , alignItems : "center", justifyContent : "center"}}> 
                    <Button
                        style = {{flex : 1}}
                        title="Save"
                        onPress = {()=> this.writeuserdata(this.state.dataA, this.state.dataB)}
                    />
                </View>
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