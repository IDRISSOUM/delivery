import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar,Button} from 'react-native';
export const { width, height} = Dimensions.get('window');
// import ImagePicker from 'react-native-image-crop-picker';

export default function Details({route, navigation}){
    const[getdata1, setData1] = useState([])
    const { item, data } = route.params;
    console.log("111111111111114555", route.params.item.area_name)

    useEffect(() => {
        getAllData();
    }, []);

    // const openGallery = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 300,
    //         cropping: true,
    //         include
    //     }).then(image => {
    //     console.log(image);
    //     }).catch(error => {
    //         if (error.code === 'E_PICKER_CANCELLED') { // here the solution
    //             return false;
    //         }
    //     });;  
    // }

    // const selectFromGallery = () => {
    //     ImagePicker.openPicker({
    //         width: 300,
    //         height: 300,
    //         cropping: true
    //     }).then(image => {
    //     console.log(image.path);
    //     }).catch(error => {
    //         if (error.code === 'E_PICKER_CANCELLED') { // here the solution
    //             return false;
    //         }
    //     });;
    // }
    
    const getAllData = () => {
    fetch('http://172.104.45.142:8069/write/trip/order/area/clockin/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            params:{
                "serial_number": route.params.data,
                "area": route.params.item.area_name,
            }
        })
    })
    .then((response) => response.json())
    .then((json) => {
        // console.log("BBBBXXXX", json.result)
        let constdata = json.result
        // console.log("RRRRRRRRR", constdata);
        setData1(constdata)
    })
    .catch((error) => console.error('::::::::::::::' ,error))
    
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
                <View style={[styles.part,{textAlign: 'center'}]}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000', textTransform: 'uppercase', textAlign: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 10,}}>Clock-in is:</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'justify', color: 'red'}}>{getdata1.message}</Text>
                </View>
                <View style={{justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => navigation.navigate('Takeimg', {sendItem: route.params.item.area_name, data: route.params.data})}
                style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 200,
                    height: 50,
                    backgroundColor: '#45d8d8'
                  }}
                >
                    <Text style={styles.textt}>
                        Click for take photo
                    </Text>
                </TouchableOpacity>
                
            </View>
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
part:{
    margin: 25
}
});