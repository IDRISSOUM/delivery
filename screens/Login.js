import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TextInput, Image, ScrollView, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export const { width, height} = Dimensions.get('window');
// import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../consts/color';
import STYLES from '../styles';
import { AsyncStorage } from 'react-native';
// import validate from 'validation_wrapper'




const Login = ({navigation, props}) => {
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[data, setData] = useState([])
    const [userDetails, setUserDetails] = React.useState([]);


    
    const _handlerSignin = async () => {
      var data = `{"jsonrpc":"2.0", "params":{"db":"odoo15","login": "${email}","password": "${password}"}`;
      console.log("YyyYYYYYYYYYYYYY", data);

        const url = 'http://172.104.45.142/web/session/authenticate';

        fetch(url, {
          method: 'POST',
          headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( 
            {
            "jsonrpc":"2.0", 
            "params":
                {
                "db": "odoo15",
                "login": 'drivera@gmail.com',
                "password": 'drivera'
                }
            }
            )
        }).then( response => response.json()).then(response => {
          if(response){
            setData(response.result)
            navigation.navigate('Menu', {data: response.result})
          }
        })
    }


  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginTop: 40}}>
          <Text style={{fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>
            GOOD
          </Text>
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>
            JOB
          </Text>
        </View>

        <View style={{marginTop: 70}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>
            Sign in to continue
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput 
            placeholder="Email" 
            style={STYLES.input} 
            onChangeText={(email) => setEmail(email)}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              style={STYLES.inputIcon}
              
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View >
            <TouchableOpacity onPress={() => {_handlerSignin()}} style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={STYLES.line}></View>
            <Text style={{marginHorizontal: 5, fontWeight: 'bold'}}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={STYLES.btnSecondary}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={STYLES.btnImage}
                  source={require('../assets/fa.png')}
                />
              </TouchableOpacity>
              
            </View>
            <View style={{width: 10}}></View>
            <View style={STYLES.btnSecondary}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={STYLES.btnImage}
                  source={require('../assets/google.png')}
                />
              </TouchableOpacity>             
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginTop: 40,
            marginBottom: 20,
          }}>
          <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLORS.pink, fontWeight: 'bold'}}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;