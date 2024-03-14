import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const PayButton = () => {
  return (
      <View style={style.container}>
        <View style={style.containerDate}>
            <Text style={style.text}>Price</Text>
            <Text style={style.text}>$ 24.17</Text>
        </View>
        <TouchableOpacity>
            <Text style={style.button}>Pay</Text>
        </TouchableOpacity>
      </View>
  )
}

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },

  containerDate: {
    alignItems: 'center'
  },

  text: {
    color: '#FFFFFF',
    fontSize: 20
  },

  button: {
    color: '#FF9311',
    backgroundColor: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 110,
    paddingVertical: 10,
    borderRadius: 20
  }

})

export { PayButton }
