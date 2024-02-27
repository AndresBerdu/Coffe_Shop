import React from 'react'
import { Image, ImageBackground, SafeAreaView, StyleSheet, View, TouchableOpacity, Text, ScrollView } from 'react-native'

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CoffeeInfoComponent = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
            source={require('../assets/images/Coffee1.jpg')}
            style={style.coffeeImage}
        >
          <View style={style.headerContainer}>
              <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
                <SimpleLineIcons name='arrow-left' style={style.iconBack}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name='heart-sharp' style={style.iconFavorite}/>
              </TouchableOpacity>
          </View>
        </ImageBackground>
        
        <View style={style.detailContainer}>
          <View style={style.headerDetailContainer}>
            <Text style={style.headerDetailTitle}>Americano</Text>
            <View style={style.rateCoffe}>
              <FontAwesome6 name='star' style={style.starIcon}/>
              <Text style={style.rate}>4.7</Text>
            </View>
          </View>
            <View style={style.containerTypesIcons}>
              <View style={style.typesIcon}>
                <FontAwesome5 name='coffee' style={style.icon}/>
                <Text style={style.textIcon}>Cofee</Text>
              </View>
              <View style={style.typesIcon}>  
                <MaterialCommunityIcons name='water' style={style.icon}/>
                <Text style={style.textIcon}>Milk</Text>
              </View>
            </View>
        </View>

        <View>
          <Text style={style.titleDescription}>Description</Text>
          <Text style={style.description}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos sint adipisci sequi quidem. Quia quis obcaecati, iusto adipisci minima ad esse porro asperiores? Sapiente, laborum. Fuga, totam. Eveniet, dolorum voluptates.</Text>
        </View>
        
        <Text style={style.titleSize}>Size</Text>
        
        <View style={style.buttonsContainer}>
          <TouchableOpacity style= {style.button}>
            <Text style= {style.buttonText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {style.button}>
            <Text style= {style.buttonText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity style= {style.button}>
            <Text style= {style.buttonText}>L</Text>
          </TouchableOpacity>
        </View>

        <Text style={style.titlePrice}>Price</Text>

        <View style={style.containerPrice}>
          <Text style={style.price}>$ 4.99</Text>
          <TouchableOpacity style={style.buttonPrice}>
            <Text style={style.buttonPrice}>Add to Car</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    coffeeImage: {
      width: '100%',
      aspectRatio: 25 / 25,
    },

    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginHorizontal: 30
    },
    
    iconBack: {
      fontSize: 20,
      backgroundColor: '#FF9311',
      padding: 10,
      borderRadius: 15
    },
  
    iconFavorite: {
      fontSize: 20,
      backgroundColor: '#FF9311',
      padding: 10,
      borderRadius: 15
    },

    detailContainer: {
      padding: 30,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    headerDetailTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#FF9311'
    },

    rateCoffe: {
      flexDirection: 'row',
      alignItems: 'center'
    },

    starIcon: {
      fontSize: 25,
      color: '#FF9311',
      margin: 5
    },

    rate: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    },

    containerTypesIcons: {
      flexDirection: 'row'
    },

    typesIcon: {
      alignItems: 'center',
      marginHorizontal: 10
    },

    icon: {
      fontSize: 30,
      color: '#FFFFFF',
      backgroundColor: '#FF9311',
      padding: 10,
      borderRadius: 15,
    },

    textIcon: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 5,
      color: '#000000',
    },

    titleDescription: {
      marginHorizontal: 30,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    },
    
    description: {
      marginTop: 10,
      marginHorizontal: 30,
      fontSize: 15,
      color: '#000000',
      textAlign: 'justify'
    },

    titleSize: {
      marginTop: 20,
      marginHorizontal: 30,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    },

    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
      marginHorizontal: 30
    },

    button: {
      backgroundColor: '#FF9311',
      paddingHorizontal: 40,
      paddingVertical: 10,
      borderRadius: 10
    },

    buttonText: {
      color: '#FFFFFF',
      fontSize: 15,
      fontWeight: 'bold'
    },

    titlePrice:{
      marginTop: 20,
      marginHorizontal: 30,
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    },

    containerPrice: {
      flexDirection: 'row',
      marginHorizontal: 30,
      marginBottom: 30,
      marginTop: 20,
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#000000'
    },

    buttonPrice: {
      backgroundColor: '#FF9311',
      paddingHorizontal: 40,
      paddingVertical: 5,
      borderRadius: 10,
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold'
    }
})

export default CoffeeInfoComponent
