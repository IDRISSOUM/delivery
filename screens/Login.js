import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

export default function Login ({navigation}){

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'center'}}>
                <View style={{flex: 1}}>
                <Image style={styles.image} source={require("../assets/O_Food.png")} />
                    </View>
                    
                    <View style={{flex: 1}}>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={[styles.button, {justifyContent: 'center',}]}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>Sign Up with Google</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1,}}>
                        <TouchableOpacity onPress={() => navigation.navigate('')} style={[styles.button, {justifyContent: 'center',}]}>
                            <Text style={{fontSize: 20, textAlign: 'center'}}>Sign Up with Facebook</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 30, textAlign: 'center'}}>Or</Text>
                    </View> 
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Connect')} style={{justifyContent: 'center', }}>
                        <Text style={[styles.button, {fontSize: 25}]}>Login</Text>
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
        width: 40,
        height: 40
    },
    button :{ 
        color:"#00BCD4",
        borderRadius:15,
        padding: '3%',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 10,
            height: 10,
    },}
})