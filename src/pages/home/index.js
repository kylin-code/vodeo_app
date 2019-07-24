import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { inject, observer } from 'mobx-react';
import { action } from 'mobx';
import RowLimitNumber from '../../components/RowLimitNumber';
import RowlimitNumberLsit from '../../components/RowLimitNumberList';

// let list = [];
// [...Array(99)].forEach((item, i) => {
//   list.push({ id: i, text: `text${i}`, name: `watt${i}` });
// });

@inject('Store')
@observer
export default class home extends Component {
  constructor(props) {
    super(props);
    const { Store } = props;
    this.state = {};
    this.Store = Store;
    this.addNum = this.addNum.bind(this);
  }

  @action
  addNum() {
    this.Store.User.addNum();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <RowlimitNumberLsit
          data={list}
          rowNum={7}
          styleObj={[styles.item, styles.borderItem]}
        >
          {item => {
            return (
              <View style={[styles.item, styles.borderItem]} key={item.id}>
                <Text>{item.id}</Text>
                <Text>{item.text}</Text>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        </RowlimitNumberLsit> */}
        <TouchableOpacity onPress={this.addNum}>
          <Text>点击</Text>
        </TouchableOpacity>
        <Text>{this.Store.User.userMoney}</Text>
        {/* <RowLimitNumber data={list} rowNum={7} styleObj={styles.item}>
          {item => {
            return (
              <View style={[styles.item, styles.borderItem]} key={item.id}>
                <Text>{item.id}</Text>
                <Text>{item.text}</Text>
                <Text>{item.name}</Text>
              </View>
            );
          }}
        </RowLimitNumber> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10
  },
  borderItem: {
    borderColor: '#595959',
    borderRadius: 9,
    borderWidth: 1,
    borderWidth: 1
  }
});
