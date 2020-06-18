import React from 'react'
import { Text, View } from 'react-native'

const Row = ({
    children,
    style
}) => {
    return (
        <View style={[{
            flexDirection: 'row'
        },style]}>
           {children} 
        </View>
    )
}

export default Row


