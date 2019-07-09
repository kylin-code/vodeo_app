import React, {PureComponent} from 'react';
import {View, ScrollView} from 'react-native';

export default class RwoLimitNum extends PureComponent {
    render() {
        const {data, rowNum, styleObj} = this.props;
        const allRow = Math.ceil(data.length / rowNum);
        return (
            <ScrollView>
                {[...Array(allRow)].map((row, i) => {
                    let start = i * rowNum;
                    let end = start + rowNum;
                    let list = data.slice(start, end);
                    let num = (rowNum - (list.length % rowNum)) % rowNum;
                    for (let j = 0; j < num; j++) {
                        list.push({KEY_NUM: `su_${j}`});
                    }
                    return (
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}} key={'row' + i}>
                            {list.map(item => {
                                if (item.KEY_NUM) {
                                    return <View key={item.KEY_NUM} style={styleObj} />;
                                } else {
                                    return this.props.children(item);
                                }
                            })}
                        </View>
                    );
                })}
            </ScrollView>
        );
    }
}
