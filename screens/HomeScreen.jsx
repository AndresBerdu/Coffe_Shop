import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const HomeScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={style.containerSafeAreaView}>
        <View>
            <Image source={require('../assets/images/Avatar.jpg')} style={style.imageProfile}/>
        </View>
        
        <Text style={style.textTitle} >Find the best coffee for you</Text>

        <View style={style.inputContainer}>
          <TouchableOpacity>
            <FontAwesome6 name='magnifying-glass' style={style.inputSearchICon} />
          </TouchableOpacity>
          <TextInput 
            placeholder='Find Your Coffee'
            placeholderTextColor={'#343434'}
            style={style.inputSearch}
          />
        </View>

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
    </ScrollView>
  )
}

const style = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    
  },

  containerView: {
    alignItems: 'center',
    backgroundColor: '#FF9311',
    paddingHorizontal: 25
  },

  imageProfile: {
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#FF9311',
    height: 70,
    width: 70,
  },

  textTitle: {
    margin: 30,
    width: 200,
    fontWeight: 'bold',
    color: '#FF9311',
    fontSize: 30
  },

  inputContainer: {
    borderWidth: 3,
    borderColor: '#FF9311',
    color: '#000000',
    borderRadius: 40,
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },

  inputSearchICon: {
    color: '#343434',
    fontSize: 20,
    marginHorizontal: 10
  },

  inputSearch: {
    fontSize: 16,
    color:'#000000'
  },

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

export { HomeScreen }
