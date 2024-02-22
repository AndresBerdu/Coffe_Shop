import React from 'react';
import { Text, SafeAreaView, View, Image, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CardComponent = () => {
  return (
    <SafeAreaView>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View style={style.ComponentCardContainer}>
                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee1.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee2.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee3.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee4.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee5.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee6.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>
            </View>
        </ScrollView>

        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
        >
            <View style={style.ComponentCardContainer}>
                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee1.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee2.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee3.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee4.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee5.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>

                    <View style={style.cardContainer}>
                        <Image source={require('../assets/images/Coffee6.jpg')} style={style.cardImage}/>
                        <Text style={style.cardTitleText}>American Coffee</Text>
                        <Text style={style.cardOwner}>Juan Valde</Text>
                        <View style={style.cardPriceAndIcon}>
                            <Text style={style.cardPrice}>$ 5.00</Text>
                            <TouchableOpacity>
                                <AntDesign name='plussquare' style={style.cardIcon}/>
                            </TouchableOpacity>   
                        </View>
                    </View>
            </View>
        </ScrollView>
    </SafeAreaView>
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

