import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
export const { width, height} = Dimensions.get('window');

export default function Home ({navigation}){

    return (
        <View style={styles.container}>
            {/* <View style={styles.top}><TouchableOpacity style={{flexDirection: 'row'}}>Chronometre</TouchableOpacity></View> */}
            <View style={styles.middle}>
                <Text style={styles.text1}>
                    welcome to a demo application
                </Text>
            </View>
            <View style={[styles.bottom, {justifyContent: 'center', flexDirection: 'row'}]}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{justifyContent: 'center', }}>
                    <Text style={[styles.text, {fontSize: 25,}]}>
                        Let's Go
                    </Text>
                </TouchableOpacity>
            </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    width: width,  
    height: height,
    },
    top: {
    flex: 0.5,
    backgroundColor: "white",
    },
    middle: {
    flex: 5,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center"
    },

    bottom: {
    flex: 2,
    backgroundColor: "pink",
    },

    text: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: 'italic',
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
    text1: {
        fontSize: 20,
    }
});