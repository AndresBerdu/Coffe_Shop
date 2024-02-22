import React from 'react'
import { SafeAreaView, StyleSheet ,ScrollView, View, Text } from 'react-native'

const ScrollCategoriesComponent = () => {
  return (
    <SafeAreaView>
        <View>
          <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={style.typesCoffeBar}
          >
            <Text style={style.typesCoffeBarText}>All</Text>
            <Text style={style.typesCoffeBarText}>American</Text>
            <Text style={style.typesCoffeBarText}>Black Coffee</Text>
            <Text style={style.typesCoffeBarText}>Coffee With Milk</Text>
            <Text style={style.typesCoffeBarText}>Arabic Coffee</Text>
            <Text style={style.typesCoffeBarText}>Colimbia Coffee</Text>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  
    typesCoffeBar: {
      marginHorizontal: 30,
      marginTop: 20
    },
  
    typesCoffeBarText: {
      paddingHorizontal: 10,
      fontSize: 20,
      color: '#000000'
    }
  })

export { ScrollCategoriesComponent };