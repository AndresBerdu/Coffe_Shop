import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ObjectCoffee = () => {
  return (
        <SafeAreaView style={style.viewContainer}>
            <ScrollView>
                <View style={style.containerObject}>
                    <View style={style.containerPrincipalInfo}>
                        <Image source={require('../assets/images/Coffee1.jpg')} style={style.img}/>
                        <View style={style.containerInfo}>
                            <Text style={style.typeOfCoffe}>Americano</Text>
                            <Text>Coffe with Milk</Text>
                            <Text>Cold</Text>
                        </View>
                        <TouchableOpacity>
                            <AntDesign name='close' style={style.buttonClose}/>
                        </TouchableOpacity>
                    </View>
                    <View style={style.containerSizes}>
                        <Text style={style.size}>L</Text>
                        <Text style={style.price}>$ 3.42</Text> 
                        <TouchableOpacity><FontAwesome5 name='minus' style={style.buttonMinusAndPlus}/></TouchableOpacity>
                        <Text style={style.amount}>2</Text>
                        <TouchableOpacity><FontAwesome5 name='plus' style={style.buttonMinusAndPlus}/></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
  )
}

const style = StyleSheet.create({
    viewContainer: {
        marginBottom: 100
    },

    containerObject: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 30,
        marginVertical: 20
    },

    containerPrincipalInfo:{
        flexDirection: 'row'
    },

    containerInfo:{
        flexDirection: 'column',
        marginLeft: 15
    },

    buttonClose:{
        fontSize: 20,
        color: '#FFFFFF',
        backgroundColor: '#FF9311',
        padding: 5,
        borderRadius: 10,
        marginLeft: 80
    },

    typeOfCoffe: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    containerSizes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    size: {
        color: '#FFFFFF',
        backgroundColor: '#FF9311',
        paddingHorizontal: 30,
        paddingVertical: 6,
        borderRadius: 5,
        alignItems: 'center'
    },

    buttonMinusAndPlus: {
        color: '#FFFFFF',
        backgroundColor: '#FF9311',
        padding: 10,
        borderRadius: 5
    },

    amount: {
        borderWidth: 1,
        borderColor: '#FF9311',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 10
    },

    img: {
        width: 100,
        height: 100,
        borderRadius: 20
    }
})

export { ObjectCoffee };
