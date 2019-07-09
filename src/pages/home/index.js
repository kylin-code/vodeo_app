import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class index extends Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text> textInComponent </Text>
            </View>
        );
    }
}
