import React, { useState, useContext } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import AntDesing from 'react-native-vector-icons/AntDesign';

//conection with databe
import FirebaseContext from '../context/firebase/firebaseContext';

//dependencies import
import { Formik } from 'formik';
import  * as Yup from 'yup';

//images imports
const logo = require('../assets/images/logo.png');
const googleLogo = require('../assets/images/google.png');
const facebookLogo = require('../assets/images/facebook.png');
const xLogo = require('../assets/images/x.png');

const LoginScreen = ({navigation}) => {

  const { state } = useContext(FirebaseContext);
  const { users } = state;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginValidationSchema = Yup.object({
    username: Yup.string()
              .required("Pleas, Enter your Username"),
    password: Yup.string()
              .required("Pleas, Enter your Password")
  })

  const handleLogin = () => {
    try {
      console.log(users);
      console.log(username);
      const user = users.find((user) => user.username === username);
      console.log(user);

      if(!user){
        Alert.alert('Error', 'Username not found');
      } else {
        if (user.password === password) {
          navigation.navigate('HomeScreen');
          setUsername('');
          setPassword('');
        } else {
          Alert.alert('Error', 'Incorrect password');
        }
      }
    } catch (error) {
      Alert.alert("Has been error, try again last time");
    }
  }

  return (
    <SafeAreaView style={style.containerSafeAreaView}>
      <View>
        <TouchableOpacity 
          style={style.containerArrowBack}
          onPress={() => navigation.navigate('InitialScreen')}
        >
          <AntDesing name='arrowleft' style={style.arrowBack}/>
          <Text style={style.textArrowBack}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerView}>
        <Image style={style.image} source={logo}/>
      </View>

      <Formik
        initialValues={{username: "", password: ""}}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
          <View>
            <View style={style.containerEntry}>
              <Text style={style.textEntry}>Username</Text>
              <TextInput 
                style={style.entry}
                id="username"
                onChangeText={(text) => {handleChange("username")(text) ; setUsername(text)}}
                onBlur={handleBlur("username")}
                value={values.username}
              />
              {touched.username && errors.username ? (
                <Text style={{fontSize:16, color:'red'}}>{errors.username}*</Text>
              ): null}
            </View>

            <View style={style.containerEntry}>
              <Text style={style.textEntry}>Password</Text>
              <TextInput
                style={style.entry}
                id="password"
                onChangeText={(text) => {handleChange("password")(text) ; setPassword(text)}}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry
              />
              {touched.password && errors.password ? (
                <Text style={{fontSize:16, color:'red'}}>{errors.password}*</Text>
              ): null}
            </View>

            <TouchableOpacity 
              style={style.button}
              onPress={handleSubmit && handleLogin}
            >
              <Text style={style.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>

      <View style={style.linea}></View>
      
      <View style={style.containerButtonBrands}>
        <TouchableOpacity 
          style={style.buttonBrands}
        >
          <Image style={style.logoBrands} source={googleLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonBrands}>
          <Image style={style.logoBrands} source={facebookLogo} />
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonBrands}>
          <Image style={style.logoBrands} source={xLogo} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
  },

  containerArrowBack: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 30
  },

  arrowBack: {
    fontSize: 20
  },

  textArrowBack: {
    marginLeft: 3,
    fontSize: 20
  },

  containerView: {
    alignItems: 'center',
    paddingHorizontal: 25,
    marginTop: 60
  },

  image: {
    width: 200,
    height: 110,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20
  },

  containerEntry: {
    marginTop: 30,
    paddingHorizontal: 30
  },

  textEntry: {
    color: '#F58A00',
    fontSize: 20,
    fontWeight: 'bold'
  },

  entry: {
    marginTop: 10,
    fontFamily: 'bold',
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 3,
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
    color: '#000000',
  },

  button: {
    backgroundColor: '#F58A00',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    padding: 15,
    marginHorizontal: 30,
    borderRadius: 5
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 20
  },

  linea: {
    borderBottomWidth: 2,
    borderBottomColor: '#DDDDDD',
    marginTop: 60,
    marginHorizontal: 50,
  },

  containerButtonBrands: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 40
  },

  buttonBrands: {
    borderColor: '#DDDDDD',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10
  },

  logoBrands: {
    width: 30,
    height: 30,
  }

});

export { LoginScreen };
