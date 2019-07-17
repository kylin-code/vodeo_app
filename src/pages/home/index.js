import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RowLimitNumber from '../../components/RowLimitNumber';
import RowlimitNumberLsit from '../../components/RowLimitNumberList';

let list = [];
[...Array(99)].forEach((item, i) => {
  list.push({ id: i, text: `text${i}`, name: `watt${i}` });
});

export default class home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RowlimitNumberLsit
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
        </RowlimitNumberLsit>
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
