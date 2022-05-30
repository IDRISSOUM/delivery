import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar,Button} from 'react-native';
export const { width, height} = Dimensions.get('window');
// import ImagePicker from 'react-native-image-crop-picker';

export default function Details(props){
    const[getdata1, setData1] = useState([])
    const { item, data } = props.route.params;
    // console.log("-----------hhhhhhhhhhh-------------", props);

    useEffect(() => {
        getAllData();
    }, []);
    
    const getAllData = () => {
    fetch('http://172.104.45.142:8069/write/trip/order/area/clockin/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            params:{
                "serial_number": props.route.params.data,
                "area": props.route.params.item.area_name,
            }
        })
    })
    .then((response) => response.json())
    .then((json) => {
        console.log("BBBBXXXX", json.result)
        let constdata = json.result
        console.log("RRRRRRRRR", constdata);
        setData1(constdata)
    })
    .catch((error) => console.error('::::::::::::::::"""""""' ,error))
    
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
                <View style={{textAlign: 'center',}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000', textTransform: 'uppercase', textAlign: 'justify'}}>{getdata1.message}</Text>
                </View>
                {/* <View style={{justifyContent: 'center',}}>
                    <TouchableOpacity onPress={() => props.navigation.goBack('Menu1', {getdata1})} style={{backgroundColor: '#45d8d8', alignItems: 'center'}}>
                        <Text style={{fontSize: 16, textTransform: 'uppercase', textAlign: 'center'}}>Return previous screen</Text>
                    </TouchableOpacity>
                </View> */}
        </View>
    );
};


const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly'
},
button: {
    justifyContent: 'center',
    
},
buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#45d8d8'
},
timerText: {
    color: '#fff',
    fontSize: 30,
    marginBottom: 20
},
textt: {
    textAlign: 'center', 
    textTransform: 'uppercase', 
    color: 'white',
    fontSize: 15,
    // backgroundColor: '#45d8d8'
},
textt1: {
    textAlign: 'center', 
    textTransform: 'uppercase', 
    color: 'white',
    fontSize: 15,
    // backgroundColor: '#45d8d8'
},
});