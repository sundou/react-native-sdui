import React, { Component } from 'react'
import {
    Text, View, TouchableOpacity, Image,
    StyleSheet
} from 'react-native'
import CenterRow from '../../Row/CenterRow'

import icon_arrow from './img/icon_arrow.png'

export class NormalCell extends Component {
    static defaultProps = {
        source: null,
        image: null,
        extend: null,
        tintColor: '#555555',
        extendColor: '#2891F8',
        separatorColor: '#E5E5E5',
        marginTopBottom: 14,

        textStyle: {},
        extendStyle: {},

        showTopSeparator: false,
        showBottomSeparator: true,
        bottomSeparatorStyle: {},
        hideArrow: false,

        onPress: () => { }
    }

    render() {
        let {
            onPress,
            tintColor,
            extendColor,
            style,
            textStyle,
            extendStyle,
            arrowStyle,
            showTopSeparator,
            showBottomSeparator,
            bottomSeparatorStyle,
            hideArrow,
            marginTopBottom,
            align,
            children,
            placeholder,
            placeholderStyle,

            extend,
            source,
            text,
        } = this.props;

        return (
            <TouchableOpacity onPress={onPress}
                style={{
                    paddingLeft: 15,
                    width: '100%',
                    ...style
                }}
            >
                {showTopSeparator && <View style={styles.separator} />}
                <CenterRow style={{
                    width: '100%',
                    marginTop: marginTopBottom,
                    marginBottom: marginTopBottom,
                    paddingRight: hideArrow ? 15 : 0,
                }}>
                    {source && <Image style={styles.img} source={source} />}
                    <Text style={{
                        fontSize: 17,
                        color: tintColor,
                        ...textStyle
                    }}>{text}</Text>

                    {align != 'left' && <View style={{ flex: 1 }} />}
                    {children}
                    {(extend != null || placeholder != null) && <>
                        {extend ? <Text style={{
                            fontSize: 16,
                            color: extendColor,
                            ...extendStyle
                        }}>{extend}</Text> : 
                        <Text style={{
                            fontSize: 16,
                            color: tintColor,
                            ...placeholderStyle
                        }}>{placeholder}</Text>
                    }

                        {/* {placeholder && <Text style={{
                            fontSize: 16,
                            color: tintColor,
                            ...placeholderStyle
                        }}>{placeholder}</Text>} */}

                        {align == 'left' && <View style={{ flex: 1 }} />}
                        {!hideArrow && <Image source={icon_arrow}
                            style={{
                                tintColor,
                                marginRight: 15,
                                marginLeft: 3,
                                ...arrowStyle
                            }}
                        />}
                    </>
                    }
                </CenterRow>
                {showBottomSeparator && <View style={[styles.separator, bottomSeparatorStyle]} />}
            </TouchableOpacity>

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
    }
})

export default NormalCell
