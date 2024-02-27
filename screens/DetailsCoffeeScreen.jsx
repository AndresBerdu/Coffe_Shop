import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import CoffeeInfoComponent from '../components/CoffeeInfoComponent';

const DetailsCoffeeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View>
        <CoffeeInfoComponent navigation={navigation}/>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
 
})

export { DetailsCoffeeScreen };
