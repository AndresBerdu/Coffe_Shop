import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

//conection with databe
import FirebaseContext from '../context/firebase/firebaseContext';

//dependencies import
import { Formik } from 'formik';
import  * as Yup from 'yup';

//icons import
import AntDesing from 'react-native-vector-icons/AntDesign';

//images imports
const logo = require('../assets/images/logo.png');
const googleLogo = require('../assets/images/google.png');
const facebookLogo = require('../assets/images/facebook.png');
const xLogo = require('../assets/images/x.png');

const RegisterScreen = ({navigation}) => {

  const registerValidationSchema = Yup.object({
    username: Yup.string()
              .min(8, "The username, should have minimum 8 characters")
              .required("This field is obligatory"),
    email: Yup.string()
            .min(11, "The email, should have minimum 11 characters")
            .required("This field is obligatory"),
    password: Yup.string()
              .required("This field is obligatory")
              .matches(
                "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
  })

  return (
    <ScrollView>
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
            initialValues={{username: "", email: "", password: ""}}
            validationSchema={registerValidationSchema}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
              <View>
                <View style={style.containerEntry}>
                  <Text style={style.textEntry}>Username</Text>
                  <TextInput 
                    style={style.entry}
                    id="username"
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                  {touched.username && errors.username ? (
                    <Text style={{fontSize:16, color:'red'}}>{errors.username}*</Text>
                  ): null}
                </View>

                <View style={style.containerEntry}>
                  <Text style={style.textEntry}>Email</Text>
                  <TextInput 
                    style={style.entry}
                    id="email"
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <Text style={{fontSize:16, color:'red'}}>{errors.email}*</Text>
                  ): null}
                </View>

                <View style={style.containerEntry}>
                  <Text style={style.textEntry}>Password</Text>
                  <TextInput
                    style={style.entry}
                    id="password"
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    secureTextEntry
                  />
                  {touched.password && errors.password ? (
                    <Text style={{fontSize:16, color:'red'}}>{errors.password}*</Text>
                  ): null}
                </View>

                <TouchableOpacity style={style.button} onPress={handleSubmit} title="Submit">
                  <Text style={style.buttonText}>Register Now</Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>

        <View style={style.linea}></View>

        <View style={style.containerButtonBrands}>
          <TouchableOpacity style={style.buttonBrands}>
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
    </ScrollView>
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
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
    marginTop: 60,
    marginHorizontal: 50,
  },

  containerButtonBrands: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 40,
    marginBottom: 60
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

export { RegisterScreen };