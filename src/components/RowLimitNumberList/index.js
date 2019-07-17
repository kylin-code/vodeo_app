import React, { PureComponent } from 'react';
import { View, ScrollView, StyleSheet, FlatList } from 'react-native';

export default class RowLimitNumberList extends PureComponent {
  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.setList = this.setList.bind(this);
  }

  renderItem(row) {
    const { styleObj } = this.props;
    let Styles = [styleObj, { opacity: 0 }];
    if (styleObj instanceof Array) {
      Styles = [...styleObj, { opacity: 0 }];
    }
    return (
      <View style={styles.row}>
        {row.item.map(item => {
          if (item.KEY_NUM) {
            return <View key={item.KEY_NUM} style={Styles} />;
          } else {
            return this.props.children(item);
          }
        })}
      </View>
    );
  }

  setList() {
    const { data, rowNum } = this.props;
    const allRow = Math.ceil(data.length / rowNum);
    const LIST = [];
    [...Array(allRow)].forEach((item, i) => {
      let start = i * rowNum;
      let end = start + rowNum;
      let list = data.slice(start, end);
      let num = (rowNum - (list.length % rowNum)) % rowNum;
      for (let j = 0; j < num; j++) {
        list.push({ KEY_NUM: `su_${j}` });
      }
      LIST.push(list);
    });
    return LIST;
  }

  render() {
    const list = this.setList();
    console.log(list);
    return (
      <View>
        <FlatList data={list} renderItem={this.renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
