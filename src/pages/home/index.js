import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import BindComponentMethodThis from '../../components/BindComponentMethodThis';
import RwoLimitNum from '../../components/rwoLimitNum';

let list = [];
[...Array(100)].forEach((item, i) => {
    list.push({id: i, text: `text${i}`, name: `watt${i}`});
});

@BindComponentMethodThis
export default class home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <RwoLimitNum data={list} rowNum={7} styleObj={styles.item}>
                    {item => {
                        return (
                            <View style={[styles.item, styles.borderItem]}>
                                <Text>{item.id}</Text>
                                <Text>{item.text}</Text>
                                <Text>{item.name}</Text>
                            </View>
                        );
                    }}
                </RwoLimitNum>
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
        borderWidth: 1
    }
});
