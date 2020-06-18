import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Space = ({width=1, height=1, color='transparent', style}) => <View style={{width, height, backgroundColor:color, ...style}}/>


export default Space
