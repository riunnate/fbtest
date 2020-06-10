import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import sayBye from './lib';
import FBApp from './fbobject';

export default class Main extends React.Component {
    componentWillMount(){
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style = {{fontSize : 20}}>
                    MAIN PAGE
                </Text>
                <TouchableOpacity style = {{marginTop : 20}} onPress={() => this.props.navigation.navigate('DBtest')}>
                    <Text style = {{fontSize : 20}}>
                        DBtest
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{marginTop : 20}} onPress={() => this.props.navigation.navigate('DBselect')}>
                    <Text style = {{fontSize : 20}}>
                        DBselect
                    </Text>
                </TouchableOpacity>
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