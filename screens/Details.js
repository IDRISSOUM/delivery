import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar,Button} from 'react-native';
export const { width, height} = Dimensions.get('window');
// import ImagePicker from 'react-native-image-crop-picker';

const Details = (props) => {
    const[getdata1, setData1] = useState([])
    const { item, data } = props.route.params;

    // const openGallery = () => {
    //     ImagePicker.openCamera({
    //         width: 300,
    //         height: 300,
    //         cropping: true,
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

    // const sendImageData = async () => {
    //     const url = 'http://172.104.45.142:8069/create/trip/order/picture/'
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
                
    //         },
    //         body: JSON.stringify({
    //             params:{
    //                 "serial_number": props.route.params.data,
    //                 "area": props.route.params.item.area_name,
    //                 // "doc_image": ,
                    
    //             }
    //         })
    //     })
    //     .then((response) => response.json())
    //     .then((json) => {
    //         console.log("???????????", json.result.message)
    //         setData1(json.result.message)
    //     })
    //     .catch((error) => console.error('::::::::::::::::"""""""' ,error))
        
    // }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
            <View style={{textAlign: 'center',}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000', textTransform: 'uppercase', textAlign: 'justify'}}>{getdata1}</Text>
            </View>
            {/* <View style={{justifyContent: 'center'}}>
                <TouchableOpacity onPress={openGallery}
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
                        take photo
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={selectFromGallery}
                style={{
                    justifyContent: 'center',
                    borderRadius: 30,
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,
                    elevation: 2,
                    padding: 10,
                    width: 200,
                    height: 50,
                    backgroundColor: '#45d8d8',
                    marginTop: '10%'
                  }}
                >
                    <Text style={styles.textt1}>
                        select from gallery
                    </Text>
                </TouchableOpacity>
                
            </View> */}
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
