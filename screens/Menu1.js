import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar} from 'react-native';
export const { width, height} = Dimensions.get('window');
import { Card, Title, Paragraph, Body, CardItem } from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome';
import {FontAwesome} from 'react-native-vector-icons/FontAwesome';
import { ListItem } from 'react-native-elements';


export default function Menu({navigation, route}){
    const[getdata, setGetData] = useState([])

    const { data } = route.params;

  useEffect(() => {
    getAllData();
  }, [getdata]);

  useEffect(() => {
    // getValues();
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
    // console.log("UUUU------IIIII", json.result)
    if(json.result.message != "Done"){
      alert(`${json.result.message}\n please scan a code again`);
      navigation.navigate('Qrcode')
    }else{
      let conData = json.result.Trip
      let conData1 = json.result.areas
      console.log("OOOOOOOOOOOIII--------PPPLLLLLLL", conData1)
      setGetData(conData.concat(conData1));
    }
  })
  .catch((error) => console.error('::::::::' ,error))
  
  }

    return (
      <View style={styles.container}>
        <ScrollView style={{}}>
        <View style={styles.middle}>
          { getdata && getdata.map((item) => {
            if(item.clock_out != false){          
              return(
                <>
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}  key={item.id}>
                  <Text style={[styles.response, {}]}>
                    {item.serial_number}
                  </Text>
                  <Text style={[styles.response, {}]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.response, {}]}>
                    {item.date}
                  </Text>
                </View>
  
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={{ width: '75%', alignContent: 'center' }} onPress={() => {getAllData(); navigation.navigate('Details', {item, data: route.params.id})}} disabled={true}>
                    <Text style={[styles.responses, { fontWeight: 'bold', backgroundColor: '#339CFF', textAlign: 'center' }]}>{item.seqno}</Text>
                    <Text style={[styles.responses, { fontWeight: 'bold', backgroundColor: '#339CFF', textAlign: 'center' }]}>{item.area_name}</Text>
                  </TouchableOpacity>
                  </View>
                </>
              )
            }else{
              return(
                <>
                <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                  <Text style={[styles.response, {}]}>
                    {item.serial_number}
                  </Text>
                  <Text style={[styles.response, {}]}>
                    {item.name}
                  </Text>
                  <Text style={[styles.response, {}]}>
                    {item.date}
                  </Text>
                </View>
  
                <View style={{ flexDirection: 'row', justifyContent: 'center',  }}>
                  <TouchableOpacity style={{ width: '75%', alignContent: 'center' }} onPress={() => {getAllData(); navigation.navigate('Details', {item, data: route.params.id})}} disabled={false}>
                    <Text key={item.id} value={item.seqno} style={[styles.responses, { fontWeight: 'bold', backgroundColor: '#FDD407', textAlign: 'center' }]}>
                      {item.seqno}
                    </Text>
                    <Text style={[styles.responses, { fontWeight: 'bold', backgroundColor: '#FDD407', textAlign: 'center' }]}>{item.area_name}</Text>
                  </TouchableOpacity>
                  </View>
                </>
              )
            }
            
          })}
      </View>
      </ScrollView>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      width: width,
      height: height,
    },
    top: {
      flex: 0.5,
    },
    middle: {
      flex: 5,
      backgroundColor: "#FFFFFF",
    },
    bottom: {
      flex: 1,
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
    response: {
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'italic',
      padding: '3%',
    },
    responses: {
      fontSize: 15,
      height: 50
    },
    responses1: {
      fontWeight: 'normal',
    }
})