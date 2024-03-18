import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { ObjectCoffee } from '../components/ObjectCoffee';
import { PayButton } from '../components/PayButton';

const ShopScreen = () => {
  return (
    <SafeAreaView style={style.containerSafeAreaView}>
      <View style={style.containerComponents}>
        <ObjectCoffee/>

        <PayButton/>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: '#FF9311'
  },
  

  containerView: {
    alignItems: 'center',
    backgroundColor: '#FF9311',
    paddingHorizontal: 25
  },
})

export { ShopScreen }