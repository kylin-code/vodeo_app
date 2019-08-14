import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import Select from '../../components/Select'

@inject('Store')
@observer
export default class Activity extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: null
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Activity{this.props.Store.User.userMoney} </Text>
        <View style={{ width: 100, marginTop: 200 }}>
          <Select />
        </View>
      </View>
    );
  }
}
