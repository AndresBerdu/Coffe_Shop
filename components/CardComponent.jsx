import React from 'react'
import { SafeAreaView, View } from 'react-native'

const CardComponent = () => {
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

export default CardComponent
