import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, StatusBar, Dimensions} from 'react-native';
export const { width, height} = Dimensions.get('window');

export default function Login ({navigation}){

    return (
        <View style={styles.container}>
            <View style={styles.top}><Text style={{flexDirection: 'row-reverse'}}></Text></View>
            <View style={styles.middle}><Text style={{fontSize: 20, fontWeight: 'bold'}}>Hello family</Text></View>
            <View style={styles.bottom}></View>
        </View>
    );
};

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
    borderWidth: 0.5,
    },
    middle: {
    flex: 5,
    backgroundColor: "#FFFFFF",
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center"
    },
    bottom: {
    flex: 2,
    backgroundColor: "pink",
    borderWidth: 0.5,
    },
});