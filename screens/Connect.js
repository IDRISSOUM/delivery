import React, { useEffect, useState} from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, StatusBar, ScrollView} from 'react-native';
import axios from 'axios';


export default function Connect({navigation}){
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

   const _handlerSignin = async () => {
        var data = `{"jsonrpc":"2.0", "params":{"db":"odoo15","login": "${email}" ,"password": "${password}","type": "email"}`;
    
        console.log(data);
    
        var config = {
          method: 'post',
          url: 'http://172.104.45.142/web/session/authenticate',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            params: {
              login: email,
              password: password,
              type: 'email',
              db: 'odoo15',
            },
          }),
        }
        let response = await axios(config);
        console.log(response.data);
        if (response.data.result) {
        console.log('ok');
        navigation.navigate('Home');
        } else {
        Alert('Identifiant incorrecte');
        }

    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={{paddingTop: 30, justifyContent: 'space-evenly'}}>
                <Image style={styles.image} source={require("../assets/food.png")} />
                <Text style={{paddingBottom: 50, fontSize: 20, fontWeight: 'bold', fontFamily: 'italic'}}>Welcome to back</Text>
            </View>
           
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#000000"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#000000"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={{alignSelf: 'flex-end', paddingHorizontal: 60}}>
                <TouchableOpacity>
                    <Text style={[styles.forgot_button]}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
           

            <TouchableOpacity style={styles.loginBtn} onPress={() => {_handlerSignin()}}>
                <Text style={[styles.loginText, {color: 'white', fontSize: 20}]}>LOGIN</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 50,
      width: 150,
      height: 150
    },
   
    inputView: {
      backgroundColor: "#f0f8ff",
      borderRadius: 20,
      width: "70%",
      height: 60,
      marginBottom: 20,
      alignItems: "center",
     
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 15,
      marginLeft: 20,
      borderStyle: 'solid'
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
      fontWeight: 'bold',
      fontSize: 15,
      
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#1e90ff",
    },
  });