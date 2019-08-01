import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {inject, observer} from "mobx-react";
import {action} from "mobx";



@inject('Store')
@observer
export default class Share extends Component {
    constructor(props){
        super(props);
        this.Store = props.Store;
        this.addNum = this.addNum.bind(this);
    }


    @action
    addNum() {
        this.Store.User.addNum();
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={this.addNum}>
                    <Text>点击</Text>
                </TouchableOpacity>
                <Text>{this.Store.User.userMoney}</Text>
            </View>
        );
    }
}
