import React, { Component } from 'react'
import {
    Text, View, TouchableOpacity, Image, TextInput,
    StyleSheet
} from 'react-native'
import CenterRow from '../../Row/CenterRow'

// import icon_arrow from './img/icon_arrow.png'

class InputCell extends Component {
    static defaultProps = {
        source: null,
        image: null,
        tintColor: '#333333',
        separatorColor: '#E5E5E5',
        marginTopBottom: 0,


        showTopSeparator: false,
        showBottomSeparator: true,
        bottomSeparatorStyle: {},

    }

    constructor(props) {
        super(props)

        this.state = {
            focus: false,
        }
    }


    render() {
        const {
            onPress,
            tintColor,
            extendColor,
            style,
            titleStyle,
            extendStyle,
            showTopSeparator,
            showBottomSeparator,
            bottomSeparatorStyle,
            hideArrow,
            marginTopBottom,


            extend,
            source,
            title,


            ...otherProps
        } = this.props;
        return (
            <View
                style={{
                    backgroundColor: 'white',
                    paddingLeft: 15,
                    minHeight: 48,
                    justifyContent: 'center',
                    ...style
                }}
            >
                {showTopSeparator && <View style={styles.separator} />}
                <CenterRow style={{
                    marginTop: marginTopBottom,
                    marginBottom: marginTopBottom,
                }}>
                    {source && <Image style={styles.img} source={source} />}
                    <Text style={{
                        fontSize: 16,
                        color: tintColor,
                        minWidth: '20%',
                        ...titleStyle
                    }}>{title}</Text>

                    <TextInput style={{
                        // width: 100,
                        // height: 100,
                        textAlignVertical: 'center',
                        padding: 0,
                        paddingLeft: 10,
                        paddingRight: 10,
                        color: tintColor,
                        fontSize: 16,
                        flex: 1,
                    }}
                        clearButtonMode="always"
                        // multiline={true}
                        autoFocus={this.state.focus}
                        placeholder="请输入"
                        {...otherProps}
                    />

                </CenterRow>
                {showBottomSeparator && <View style={[styles.separatorBottom, bottomSeparatorStyle]} />}
            </View>

        )
    }
}



const styles = StyleSheet.create({
    img: {
        marginLeft: 4, marginRight: 4,

    },
    separator: {
        backgroundColor: '#E5E5E5',
        width: '100%', height: 1,
    },
    separatorBottom: {
        backgroundColor: '#E5E5E5',
        width: '100%', height: 1,
        position: 'absolute', bottom: 0, right: 0
    }
})

export default InputCell
