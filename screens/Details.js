import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar} from 'react-native';
export const { width, height} = Dimensions.get('window');


const Details = (props) => {
    const[getdata1, setData1] = useState([])
    const { item, data } = props.route.params;
    // console.log(":::::>>????????", props.route.params.item.area_name);
    // console.log("AAAAAAAAAA???????", props.route.params.data);

    useEffect(() => {
        getAllData();
    }, []);
    
    const getAllData = () => {
    fetch('http://172.104.45.142:8069/create/trip/order/area/clockin/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            params:{
                "serial_number": props.route.params.data,
                "area": props.route.params.item.area_name
            }
        })
    })
    .then((response) => response.json())
    .then((json) => {
        console.log("???????????", json.result.message)
        setData1(json.result.message)
    })
    .catch((error) => console.error('::::::::::::::::"""""""' ,error))
    
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={{textAlign: 'center',}}>
                <Text style={{fontSize: 20, fontWeight: '800', color: '#000'}}>{getdata1}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={() => { }} style={styles.button}>
                    <Text style={styles.buttonText}>To take a picture</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Details;

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly'
},
button: {
    justifyContent: 'center',
    width: '80%',
    
},
buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#45d8d8'
},
timerText: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20
},
});
