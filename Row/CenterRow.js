import React from 'react'
import { Text, View } from 'react-native'

const CenterRow = ({
    children,
    style
}) => {
    return (
        <View style={[{
            flexDirection: 'row',
            alignItems: 'center'
        },style]}>
           {children} 
        </View>
    )
}

export default CenterRow


