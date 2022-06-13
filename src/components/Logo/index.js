import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Logo() {
  return (
    <View style={{flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Image source={require('../../../images/Logo.png')}></Image>
    </View>
  )
}