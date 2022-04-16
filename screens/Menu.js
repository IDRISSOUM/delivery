import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native';
export const { width, height} = Dimensions.get('window');


export default function Menu({route, navigation}){

    const { data } = route.params;

    return(
        <View style={styles.container}>
        <View style={[styles.top, {flexDirection: 'row-reverse'}]}>
            <View style={{}}>
                {/* <Image style={[styles.image, {
                    width: 90,
                    height: 90
                }]} source={require("../assets/food.png")}/> */}
            </View>
            <View >
                <Text style={{ fontWeight: 'bold', fontSize: 20}} >
                    {route.params.data.name}
                </Text>
            </View>
            </View>
        <View style={styles.middle}>
                <View style={{alignItems: 'center',}}>
                    <View style={[styles.b, {}]}>
                        <TouchableOpacity onPress={() => navigation.navigate('MenuQr')} style={{}}>
                            <Text style={[styles.text, {}]}>
                                TRIP ORDER
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.b, {}]}>
                        <TouchableOpacity onPress={() => {}} style={{}}>
                            <Text style={[styles.text, {}]}>
                                SETUP
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.b, {}]}>
                        <TouchableOpacity onPress={() => {}} style={{}}>
                            <Text style={[styles.text, {}]}>
                                INCIDENT REPORT
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
          </View>
          <View style={styles.bottom}>
            
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 0,
      width: width,
      height: height,
    },
    top: {
      flex: 0.5,
    },
    middle: {
      flex: 5,
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      justifyContent: 'space-evenly',
    },
    bottom: {
      flex: 1,
      borderWidth: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingBottom: 8,
      marginTop: 2
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        borderStyle: 'solid',
        padding: 15,
        marginLeft: 20,
        borderWidth: 1,
    },
    b: {
        borderRadius: 20,
        height: 100,
    }
})
