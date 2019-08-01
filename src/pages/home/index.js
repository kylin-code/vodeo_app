import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import RowlimitNumberLsit from '../../components/RowLimitNumberList';

let list = [];
[...Array(10)].forEach((item, i) => {
  list.push({ id: i, text: `text${i}`, name: `watt${i}` });
});

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff'
        }}
      >
        <RowlimitNumberLsit
          data={list}
          rowNum={4}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: 'red'
  },
  borderItem: {
    borderColor: '#595959',
    borderRadius: 9,
    borderWidth: 1
  }
});
