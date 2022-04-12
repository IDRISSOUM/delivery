import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

export default function Login ({navigation}){

    return (
        <View style={{flex:1,backgroundColor: '#FFFFFF'}}>
                <View style={{flex:1,flexDirection: 'column'}}>
                    <View style={{flex: 4,flexDirection: 'row'}}>
                        <View style={{flex:5.8,justifyContent: 'center'}}>
                            <Image style={{flex:0.5,resizeMode: 'center',alignSelf: 'center',}}
                            source={require('../assets/O_Food.png')} />
                        </View>
                    </View>
                    <View style={{flex: 2,flexDirection: 'column',justifyContent: 'center'}}>
                        <View style={{flex: 1,flexDirection: 'row',justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={[styles.button, {justifyContent: 'center',}]}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>Sign Up with Facebook</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flex: 2,flexDirection: 'row'}}>
                        <View style={{flex:5.8,justifyContent: 'center'}}>
                            <TouchableOpacity onPress={() => navigation.navigate('')} style={[styles.button, {justifyContent: 'center',}]}>
                                <Text style={{fontSize: 20, textAlign: 'center', backgroundColor: '#fff'}}>Sign Up with Facebook</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{flex: 1,flexDirection: 'row', }}>
                        <View style={{flex:5.8,justifyContent: 'center',}}>
                            <Text style={{fontSize: 30, textAlign: 'center',}}>Or</Text>
                        </View>
                    </View>
                    <View style={{flex: 4,flexDirection: 'row',justifyContent: 'center', }}>
                        <View style={{flexDirection: 'row',  shadowOffset: {width: 0, height: 10, }, shadowOpacity: 0.10, shadowRadius: 10.32, elevation: 0, }}>
                            <TouchableOpacity style={{justifyContent: 'center', }}
                                onPress = {() => navigation.navigate('Connect')}>
                                <Text style={[styles.button,{fontSize: 25, backgroundColor: '#00BCD4'}]}>Login</Text>
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
    },
    logo: {
        flex: 1,
    },
    image: {
        marginBottom: 40,
        width: 40,
        height: 40
    },
    button :{ 
        color:"#000000",
        borderRadius:15,
        padding: '3%',
        shadowOffset: {
            width: 10,
            height: 10,
    },}
})