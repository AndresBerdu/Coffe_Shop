import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

//Icons
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Screens
import { ScrollCategoriesComponent } from '../components/ScrollCategoriesComponent';
import { CardComponent } from '../components/CardComponent';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView>
      <SafeAreaView style={style.containerSafeAreaView}>
        <View style={style.containerImageProfileAndLogeOut}>
            <TouchableOpacity 
              onPress={()=>{ navigation.navigate('InitialScreen') }}
              style={style.containerLogueOut}
            >
              <Ionicons name='exit-outline' style={style.iconLogueOut}/>
              <Text style={style.textLogueOut}>Logue Out</Text>
            </TouchableOpacity>
            <Image source={require('../assets/images/Avatar.jpg')} style={style.imageProfile}/>
        </View>
        
        <Text style={style.textTitle} >Find the best coffee for you</Text>

        <View style={style.inputContainer}>
          <FontAwesome6 name='magnifying-glass' style={style.inputSearchICon} />
          <TextInput 
            placeholder='Find Your Coffee'
            placeholderTextColor={'#343434'}
            style={style.inputSearch}
          />
        </View>

        <View>
          <ScrollCategoriesComponent/>
        </View>

        <View>
          <CardComponent/>
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

  containerImageProfileAndLogeOut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 30
  },

  containerLogueOut: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF9311',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 200
  },

  iconLogueOut: {
    color: '#FFFFFF',
    fontSize: 30,
    alignItems: 'center',
    marginRight: 5
  },

  textLogueOut: {
    color: '#FFFFFF',
    fontSize: 15
  },

  imageProfile: {
    borderRadius: 20,
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
  }

})

export { HomeScreen };
