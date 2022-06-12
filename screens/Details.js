import React, { useEffect, useState, useRef } from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList, ScrollView, StatusBar,Button} from 'react-native';
export const { width, height} = Dimensions.get('window');
import ImagePicker from 'react-native-image-crop-picker';


import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Details({route, navigation}){
    const[getdata1, setData1] = useState([])
    const[image, setImage] = useState(null)
    const[images, setImages] = useState(null)
    const { item, data } = route.params;

    useEffect(() => {
            getAllData();
    }, []);

    const pickSingleWithCamera = (cropping, mediaType = 'photo') => {
        ImagePicker.openCamera({
          cropping: cropping,
          width: 500,
          height: 500,
          includeExif: true,
          includeBase64: true,
          mediaType,
        })
          .then((image) => {
            setImage({
                uri: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
                data: image.data,
            })
            setImages(null)
          })
          .catch((e) => alert(e));
      }
  
  
    const pickSingleBase64 = (cropit) => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: cropit,
            includeBase64: true,
            includeExif: true,
        })
            .then((image) => {
            // console.log('received base64 image----------------', image.data);
            setImage({
                uri: `data:${image.mime};base64,` + image.data,
                width: image.width,
                height: image.height,
                mime: image.mime,
                data: image.data
            })
            setImages(null)
            })
            .catch((e) => alert(e));
        }

    const renderAsset = (image) => {
    
        return renderImage(image);
    }

    const renderImage = (image) => {
        return (
            <ScrollView style={{padding: '10%'}}>
                <View style={{}}>
                    <Image
                        style={{ width: 180, height: 180, resizeMode: 'contain', borderRadius: 25}}
                        source={image}
                    />
                </View>
            </ScrollView>     
        );
        }
    
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
        let constdata = json.result
        setData1(constdata)
    })
    .catch((error) => console.error('::::::::::::::' ,error))
    
    }


    return (
        <View style={styles.container}>
            <StatusBar barStyle="auto" />
                <View style={[styles.part,{textAlign: 'center',}]}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000', textTransform: 'uppercase', textAlign: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 10,}}>Clock-in is:</Text>
                    <Text style={{fontSize: 16, fontWeight: 'bold', textAlign: 'justify', color: 'red'}}>{getdata1.message}</Text>
                </View>
                <View style={styles.container1}>
           <ScrollView>
            {image ? renderAsset(image) : null}
            {images
                ? images.map((i) => (
                    <View key={i.uri}>{renderAsset(i)}</View>
                ))
                : <Text style={{fontStyle: 'italic', fontWeight: 'bold', textAlign: 'center'}}>Select or Take image</Text>}
            </ScrollView>

            <View style={{
                padding: '10%',
                alignItems: 'center',
                }}>
                <View style={styles.Uni}>
                    <TouchableOpacity 
                    style={{
                        justifyContent: 'center',
                        borderRadius: 25,
                        shadowOpacity: 0.29,
                        shadowRadius: 4.65,
                        elevation: 2,
                        width: 70,
                        height: 70,
                        // backgroundColor: '#45d8d8',
                        marginTop: '10%'

                    }}
                    onPress={() => pickSingleWithCamera(true)}
                    >
                        <Text style={styles.text}>
                            <Ionicons name="camera-outline" color={'#45d8d8'} size={30}/>
                        </Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.Uni}>
                    <TouchableOpacity 
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
                    onPress={() => pickSingleBase64(false)}
                    >
                        <Text style={styles.text}>
                            select image
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.Uni}>
                    <TouchableOpacity 
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
                    onPress={() => navigation.navigate('Takeimg', {sendIMG: image.data, sendItem: route.params.item.area_name, data: route.params.data})}
                    >
                        <Text style={styles.text}>
                            send image
                        </Text>
                </TouchableOpacity>
            </View>
            </View>
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
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      Uni: {
          
      },
      text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase'
      },
});