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
        console.log("???????????", json.result)
        setData1(json.result)
    })
    .catch((error) => console.error('::::::::::::::::"""""""' ,error))
    
    }

    return (
        <View>
            <Text>HHHHHHHHHHH</Text>
        </View>
    );
};

export default Details;