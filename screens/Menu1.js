import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView} from 'react-native';
export const { width, height} = Dimensions.get('window');
import { Card, Title, Paragraph, Body, CardItem } from 'react-native-paper'
import { ListItem } from 'react-native-elements';
// import {Card, CardItem, Body, Left, Button, Icon, Right} from 'native-base';


export default function Menu({navigation, route}){
    const[getdata, setGetData] = useState([])

  const { data } = route.params;

  // console.log("LLLL::::::::", route)

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    fetch('http://172.104.45.142/get/trip/order/', {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          
      },
      body: JSON.stringify({
          params:{
              "serial_number": route.params.id,
          }
      })
  })
  .then((response) => response.json())
  .then((json) => {
    if(json.result.message != "Done"){
      alert(`${json.result.message}\n please scan a code again`);
      navigation.navigate('Qrcode')
          
    }else{
      // alert(`${json.result.message}`)
      setGetData(json.result);
      console.log("LLLKKKKKKPPPPOO", json.result);
    }
  })
  .catch((error) => console.error('::::::::::::::::"""""""' ,error))
  
  }

  // const content = getdata.map((post) =>
  //   <View key={post.id}>
  //     <Text>{post.area_name}</Text>
  //     <Text>{post.seqno}</Text>
  //   </View>
  // );
  
  // var dat = json

    return (
      <View style={styles.container}>
        <View style={styles.middle}>
          {/* {content} */}
      </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 0,
      margin: 10,
    },
    top: {
      flex: 0.5,
      // backgroundColor: "white",
      // borderWidth: 2,
    },
    middle: {
      flex: 5,
      backgroundColor: "#FFFFFF",
      // borderWidth: 2,
      flexDirection: "row",
    },
    bottom: {
      flex: 1,
      // flexDirection: "row",
      borderWidth: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingBottom: 8,
      marginTop: 2
    },
    head: { 
      height: 50, 
      backgroundColor: '#6F7BD9' 
    },
    text: { 
      textAlign: 'center', 
      fontWeight: '200' 
    },
    dataWrapper: { 
      marginTop: -1 
    },
    row: { 
      height: 40, 
      backgroundColor: '#F7F8FA' 
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)'
    },
})

