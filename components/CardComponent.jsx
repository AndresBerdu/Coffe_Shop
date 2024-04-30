import React, { useContext, useEffect, useState } from 'react';
import { Text, SafeAreaView, View, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';

//firebase context import
import FirebaseContext from '../context/firebase/firebaseContext';

const CardComponent = ({navigation}) => {

    const { state } = useContext(FirebaseContext);
    const {coffees} = state;

    const [coffee, setCoffee] = useState({
        name: '',
        type: '',
        price: 0
    });

    const getInformationCoffes = () => {
        useEffect( async () => {
            try {
                const coffeeName = await coffees.find((name) => name.name);
                const coffeeType = await coffees.find((type) => type.type);
                const coffeePrice = await coffees.find((price) => price.price);
            } catch (error) {
               Alert.alert("Error Load", "Can´t not load information") 
            }
        },[])
    }

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
    >
        <SafeAreaView
            onSubmit={getInformationCoffes}
        >
            <View style={style.ComponentCardContainer}>
                <TouchableOpacity onPress={()=>{ navigation.push('DetailsCoffeeScreen') }}>
                    <View style={style.cardContainer}>
                            <Image source={require('../assets/images/Coffee1.jpg')} style={style.cardImage}/>
                            <Text style={style.cardTitleText}>{coffee.name}</Text>
                            <Text style={style.cardOwner}>{coffee.type}</Text>
                            <View style={style.cardPriceAndIcon}>
                                <Text style={style.cardPrice}>$ {coffee.Price}</Text>
                                <TouchableOpacity>
                                    <AntDesign name='plussquare' style={style.cardIcon}/>
                                </TouchableOpacity>   
                            </View>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
  )
}

const style = StyleSheet.create({
    ComponentCardContainer: {
        marginTop: 50,
        marginHorizontal: 30,
        flexDirection: 'row'
    },

    cardContainer: {
        backgroundColor: '#FF9311',
        marginHorizontal: 10,
        padding: 18,
        borderRadius: 30
    },

    cardImage: {
        width: 150,
        height: 150,
        borderRadius: 20
    },

    cardTitleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginTop: 10
    },

    cardOwner: {
        color: '#FFFFFF',
        marginTop: 5
    },

    cardPriceAndIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10
    },

    cardPrice: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold'
    },

    cardIcon: {
        color: '#FFFFFF',
        fontSize: 30,
        alignItems: 'center'
    }
})

export { CardComponent };

