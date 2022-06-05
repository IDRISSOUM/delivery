import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar,Button} from 'react-native';
export const { width, height} = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';

export default function Details(props){
    const[galery, setGalery] = useState("")
    const[take, setTake] = useState(null)
    const[getdata, setGetdata] = useState([])
    // const { sendItem, data } = props.params;

    console.log("9999999999", props.route.params.data)
    console.log("9999999999mmmmmmm", props.route.params.sendItem)


    useEffect(() => {
        sendImageData();
    }, []);

    const openGallery = () => {
        ImagePicker.openCamera({
            mediaType: "photo",
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true,
            includeExif: true,
            multiple: true,
        }).then(image => {
            if(image != null){
                console.log("CEST BON CEST BON BON", image)
                setTake(image)
            }else{
                console.log("true ok");
                return false;
            }
        }).catch(error => {
            if (error.code === 'E_PICKER_CANCELLED') { // here the solution
                return false;
            }
        });;  
    }

    const selectFromGallery = () => {
        ImagePicker.openPicker({
            mediaType: "photo",
            width: 300,
            height: 300,
            cropping: true,
            includeBase64: true,
            includeExif: true,
            multiple: true
        }).then(image => {
            if(image != ""){
                console.log("CEST BON CEST BON BON", image)
                setGalery(image)
                
            }else{
                console.log("true ok");
                return false;
            }
        }).catch(error => {
            if (error.code === 'E_PICKER_CANCELLED') { // here the solution
                return false;
            }
        });;
    }
    console.log("UUUUUUU&&&&&&&&&&", galery);

    const sendImageData = async () => {
        if(null){
            return false;
        }else{
            const url = 'http://172.104.45.142:8069/create/trip/order/picture/'
                fetch(url, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        
                    },
                    body: JSON.stringify({
                        "jsonrpc":"2.0",
                        "params":{
                            "serial_number": props.route.params.data,
                            "area": props.route.params.sendItem,
                            "picture_image": galery.data,
                        }
                    })
                })
                .then((response) => response.json())
                .then((json) => {
                    console.log("???????????-------7775444---------", json)
                    setGetdata(json)
                })
                .catch((error) => console.error('::::::::::::::::"""""""' ,error))
        }
        
        
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
                <View style={{textAlign: 'center',}}>
                    {/* {
                        galery != "" && <Image source={{uri: `data:${galery.mime};base64,${galery.data}`}} style={{ resizeMode: 'contain', width: 200, height: 200}}/>
                        
                    } */}
                    {/* <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000', textTransform: 'uppercase', textAlign: 'justify'}}>{getdata1.message}</Text> */}
                </View>
                <View style={{justifyContent: 'center'}}>
                <TouchableOpacity onPress={() => {openGallery}}
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

                <TouchableOpacity onPress={sendImageData}
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
                        send image
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
});