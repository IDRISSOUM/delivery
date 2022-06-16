import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';



export default function TAKEIMG(props){
    const[getdata, setGetdata] = useState([])
    const[image, setImage] = useState(null)
    const[images, setImages] = useState(null)

    // useEffect(() => {
        
    // }, []);

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
            // console.log('received base64 image----------------', image);
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

    // const sendImageData = async () => {
    //         const url = 'http://172.104.45.142:8069/create/trip/order/picture/'
    //             fetch(url, {
    //                 method: 'POST',
    //                 headers: {
    //                     Accept: 'application/json',
    //                     'Content-Type': 'application/json',
                        
    //                 },
    //                 body: JSON.stringify({
    //                     "jsonrpc":"2.0",
    //                     "params":{
    //                         "serial_number": props.route.params.data,
    //                         "area": props.route.params.sendItem,
    //                         "picture_image": props.route.params.sendIMG,
    //                     }
    //                 })
    //             })
    //             .then((response) => response.json())
    //             .then((json) => {
    //                 console.log("MMMMMCCNCNCNCB", json.result.message)
    //                 setGetdata(json.result.message)
    //             })
    //             .catch((error) => console.error('::::::::::::::::"""""""' ,error))
    //     }
    //     console.log("000000", getdata)

    return (
        <View style={{justifyContent: 'center'}}>
            <Text style={{textAlign: 'center', alignItems: 'center'}} onPress={pickSingleWithCamera()}>
                Vue
            </Text>

        </View>
        // <View style={styles.container}>
        //     <StatusBar barStyle="auto" />
        //         {
        //            getdata && getdata == "" ? 
        //            <><View>
        //                 <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'justify', color: 'red' }}>
        //                     Loading data...
        //                 </Text>
        //             </View><View style={{
        //                 padding: '10%',
        //                 alignItems: 'center',
        //             }}>
        //             <View style={styles.Uni}>
        //                 <Text style={{fontSize: 30, textAlign: 'center', bottom: -20}}>👇</Text>
        //                 <TouchableOpacity
        //                     style={{
        //                         justifyContent: 'center',
        //                         borderRadius: 25,
        //                         shadowOpacity: 0.29,
        //                         shadowRadius: 4.65,
        //                         elevation: 2,
        //                         width: 200,
        //                         height: 50,
        //                         backgroundColor: '#45d8d8',
        //                         marginTop: '10%'
        //                     }}
        //                     onPress={() => { sendImageData(); } }
        //                     disabled={false}
        //                     >
        //                     <Text style={styles.text}>
        //                         confirm shipment
        //                     </Text>
        //                 </TouchableOpacity>
        //             </View>

        //             {/* <View style={styles.Uni}>
        //                 <TouchableOpacity
        //                     style={{
        //                         justifyContent: 'center',
        //                         borderRadius: 30,
        //                         shadowOpacity: 0.29,
        //                         shadowRadius: 4.65,
        //                         elevation: 2,
        //                         padding: 10,
        //                         width: 200,
        //                         height: 50,
        //                         backgroundColor: '#45d8d8',
        //                         marginTop: '10%'
        //                     }}
        //                     onPress={() => props.navigation.goBack()}
        //                 >
        //                     <Text style={styles.text}>
        //                         Return to Select
        //                     </Text>
        //                 </TouchableOpacity>
        //             </View> */}
        //         </View></> 
        //     :
        //     <><View style={[styles.part, { textAlign: 'center' }]}>
        //         <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000', textTransform: 'uppercase', textAlign: 'center', borderBottomWidth: 0.5, borderBottomColor: '#000', marginBottom: 10, }}>Clock-out is:</Text>
        //         <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'justify', color: 'red' }}>{getdata}</Text>
        //     </View><View style={{
        //         padding: '10%',
        //         alignItems: 'center',
        //     }}>
        //             <View style={styles.Uni}>
        //                 <Text style={{
        //                     textAlign: 'center',
        //                     fontStyle: 'italic',
        //                     bottom: -20
        //                 }}>image sent with success</Text>
        //                 <TouchableOpacity
        //                     style={{
        //                         justifyContent: 'center',
        //                         borderRadius: 25,
        //                         shadowOpacity: 0.29,
        //                         shadowRadius: 4.65,
        //                         elevation: 2,
        //                         width: 200,
        //                         height: 50,
        //                         backgroundColor: '#FF5733',
        //                         marginTop: '10%'
        //                     }}
        //                     onPress={() => { sendImageData()}}
        //                     disabled={true}
        //                     >
        //                     <Text style={styles.text}>
        //                         confirm shipment
        //                     </Text>
        //                 </TouchableOpacity>
        //             </View>

        //             <View style={styles.Uni}>
        //                 <TouchableOpacity
        //                     style={{
        //                         justifyContent: 'center',
        //                         borderRadius: 30,
        //                         shadowOpacity: 0.29,
        //                         shadowRadius: 4.65,
        //                         elevation: 2,
        //                         padding: 10,
        //                         width: 200,
        //                         height: 50,
        //                         backgroundColor: '#45d8d8',
        //                         marginTop: '10%'
        //                     }}
        //                     onPress={() => props.navigation.push("MenuQr")}
        //                 >
        //                     <Text style={styles.text}>
        //                         Return to Scan
        //                     </Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View></>
        //         }
        // </View>
    );
}


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
    text: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        textTransform: 'uppercase'
      },
    });