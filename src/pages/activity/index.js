import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { computed } from 'mobx';

@inject('Store')
@observer
export default class Activity extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text> Activity{this.props.Store.User.userMoney} </Text>
      </View>
    );
  }
}
