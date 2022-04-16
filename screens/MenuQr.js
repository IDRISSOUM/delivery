import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
export const { width, height} = Dimensions.get('window');


export default function MenuQr({navigation}){


    return(
        <View style={{flex:1,backgroundColor: '#FFFFFF', width: width, height: height}}>
                {/* <ImageBackground source={require('../assets/open.jpg')}
                style={{width: '100%', height: '100%', position: 'absolute',}}
                imageStyle={{opacity: 0.2}}
                ></ImageBackground> */}
                <View style={{flex:1,flexDirection: 'column'}}>
                    <View style={{flex: 4,flexDirection: 'row'}}>
                        <View style={{flex:5.8,justifyContent: 'center'}}>
                            {/* <Image style={{flex:0.5,resizeMode: 'center',alignSelf: 'center',}}
                            source={require('../assets/LOGO.png')} /> */}
                        </View>
                    </View>
                    <View style={{flex: 2,flexDirection: 'column',justifyContent: 'center'}}>
                        <View style={{flex: 1,flexDirection: 'row',justifyContent: 'center'}}>
                            <Text style={{fontSize: 20, textAlignVertical:'center', justifyContent: 'center',textAlign:'center',fontFamily: 'recusive', fontStyle:'italic'}}>Decouvrez la carte du restaurant {"\n"} et passez votre commande {"\n"} maintenant !</Text>
                        </View>
                    </View>
                    <View style={{flex: 2,flexDirection: 'row'}}>
                        <View style={{flex:5.8,justifyContent: 'center'}}>
                            {/* <Image style={{flex:1,resizeMode: 'center',alignSelf: 'center',}}
                            source={require('../assets/qr.png')} /> */}
                        </View>
                    </View>
                    <View style={{flex: 4,flexDirection: 'row',justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row',  shadowOffset: {width: 0, height: 10, }, shadowOpacity: 0.10, shadowRadius: 10.32, elevation: 0, }}>
                            <TouchableOpacity style={{justifyContent: 'center'}}
                                onPress = {() => navigation.navigate('Qrcode')}>
                                <Text style={styles.button}>Scanne</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: '#FFFFFF',
        left: 0,
        top: -200,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10.32,
        
        elevation: 200,
    },
    rating1: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20,
        marginTop: 30,
        borderTopWidth: 1,
        borderTopColor: '#FFFFFF',
        left: 0,
        top: -120,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.10,
        shadowRadius: 10.32,
        
        elevation: 0,
    },
    buttonCircle: {
        height:40,
        width:109,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 10,
            
        },
        shadowOpacity: 0.10,
        shadowRadius: 10.32,
        
        elevation: 5,

    },
    button :{ 
    color:"#00BCD4",
    fontSize: 25,
    borderRadius:30,
    padding: '3%',
    backgroundColor: '#fff',
    shadowOffset: {
        width: 10,
        height: 10,
    },
    shadowOpacity: 0.10,
    shadowRadius: 10.32,
    
    elevation: 5,
},
})