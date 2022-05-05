import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar, Dimensions} from 'react-native';
export const { width, height} = Dimensions.get('window');

export default function Login ({navigation}){

    return (
        <View style={{flex:1,backgroundColor: '#FFFFFF', width: width,  height: height,}}>
            <StatusBar />
                <View style={{flex:1,flexDirection: 'column'}}>
                        <View style={{flex:5.8,justifyContent: 'center'}}>
                            <Image style={{flex:0.5,resizeMode: 'center',alignSelf: 'center',}}
                            source={require('../assets/food.png')} />
                        </View>

                    <View style={{flex: 2,flexDirection: 'row',justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ width: '90%' }}>
                            <Text style={[styles.button, {fontSize: 25, textAlign: 'center', backgroundColor: '#00BCD4'}]}>Sign Up with Google</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{flex: 2,flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ width: '90%' }}>
                            <Text style={[ styles.button, {fontSize: 25, textAlign: 'center', backgroundColor: '#00BCD4'}]}>Sign Up with Facebook</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1,flexDirection: 'row', justifyContent: 'center',}}>
                        <Text style={{fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Or</Text>
                    </View>

                    <View style={{flex: 4,flexDirection: 'row',justifyContent: 'center', }}>
                        <TouchableOpacity style={{ width: '90%'}}
                            onPress = {() => navigation.navigate('Connect')}>
                            <Text style={[styles.button,{fontSize: 25, backgroundColor: '#00BCD4', textAlign: 'center',}]}>Login</Text>
                        </TouchableOpacity>
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
        width: 30,
        height: 30
    },
    button :{ 
        color:"#FFFF",
        borderRadius: 15,
        height: 40
        
    },
})