import React from 'react';
import {View, StyleSheet} from 'react-native';


const HorizontalBlank = ({children, style, horizontal, left, right}) => {
    let styles = {};
    if (horizontal!=undefined || horizontal!=null) {styles.paddingHorizontal = horizontal}
    if (left!=undefined || left!=null) {styles.paddingLeft = left}
    if (right!=undefined || right!=null) {styles.paddingRight = right}
    styles = {
        ...styles,
        ...style
    }
  return <View style={styles}>{children}</View>;
};


export default HorizontalBlank;