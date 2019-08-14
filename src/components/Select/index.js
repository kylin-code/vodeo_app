import React, { PureComponent } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList } from 'react-native'

const { width, height } = Dimensions.get('window');

let array = []
for (let i = 0; i < 100; i++) {
    array.push({ key: `key${i}`, name: `javascript_${i}` })
}


export default class Select extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            show: false, language: ''
        }
    }
    _onPressButton = () => {
        this.setState({ show: !this.state.show })
    }

    render() {
        const { show, language } = this.state
        const height = array.length > 5 ? 5 * 32 : array.length * 32;
        return (
            <View style={Styles.main}>
                <TouchableOpacity style={[Styles.content]} onPress={() => this.setState({ show: true })}>
                    <Text style={{ paddingHorizontal: 8 }}>{language}</Text>
                </TouchableOpacity>
                {show && <FlatList
                    style={[Styles.list, { height: height }]}
                    data={array}
                    renderItem={({ item }) => {
                        return <TouchableOpacity style={Styles.itemStyle} onPress={() => this.setState({ show: false, language: item.name })}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    }}
                />}
                {show && <TouchableOpacity style={Styles.cover} onPress={() => this.setState({ show: false })}>
                </TouchableOpacity>}
            </View>


        )
    }
}

const Styles = StyleSheet.create({
    main: {
        position: 'relative',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        position: 'relative',
        borderWidth: 1,
        height: 32,
        width: '100%',
        borderColor: '#353534',
        backgroundColor: '#fff',
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        zIndex: 10000
    },
    cover: {
        width: width,
        height: height,
        backgroundColor: 'rgba(0,0,0,0)',
        position: 'absolute',
        zIndex: 9999
    },
    list: {
        position: 'absolute',
        top: 32,
        zIndex: 111111,
        borderWidth: 1,
        width: '100%',
        borderColor: '#353534',
        backgroundColor: '#fff',
    },
    itemStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#353534',
        height: 32,
        justifyContent: 'center',
        paddingHorizontal: 8
    }
})
