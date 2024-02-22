import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const logo = require('../assets/images/logo.png');

const InitialScreen = ({navigation}) => {
  return (
    <SafeAreaView style={style.containerSafeAreaView}>
        <View style={style.containerView}>
          <Image source={logo} style={style.image}/>
        </View>

        <View>
          <TouchableOpacity style={style.loginButton}>
            <Text 
              style={style.loginButtonText}
              onPress={() => navigation.navigate('LoginScreen')}
            >
              Login
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={style.registerButton}
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            <Text style={style.registerButtonText}>Resgister Now</Text>
          </TouchableOpacity>
        </View>

        <View style={style.containerTouchLogin}>
          <Text style={style.textTouchLogin}>Now! Quick Login use touch ID</Text>
          <TouchableOpacity style={style.containerIconFingerPrint}>
            <MaterialIcons name='fingerprint' style={style.iconFingerPrint}/>
            <Text style={style.textIconFingerPrint}>Use touch ID</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    backgroundColor: '#FF9311'
  },

  containerView: {
    alignItems: 'center',
    backgroundColor: '#FF9311',
    paddingHorizontal: 25
  },

  image: {
    marginTop: 100,
    width: 200,
    height: 110,
  },

  loginButton: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 30,
    marginTop: 70,
    borderRadius: 5
  },

  loginButtonText: {
    color: '#FF9311',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },

  registerButton: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    marginHorizontal: 30,
    marginTop: 20,
    borderRadius: 5
  },

  registerButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 10,
    fontSize: 20
  },

  containerTouchLogin: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  textTouchLogin: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 70
  },

  containerIconFingerPrint: {
    marginTop: 30
  },

  iconFingerPrint: {
    fontSize: 100,
    color: '#FFFFFF'
  },

  textIconFingerPrint: {
    color: '#FFFFFF',
    marginTop: 5,
    textAlign: 'center',
    fontSize: 15,
    textDecorationLine: 'underline'
  }
})

export { InitialScreen }
