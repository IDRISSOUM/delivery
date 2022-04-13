import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity, Image, FlatList} from 'react-native';
export const { width, height} = Dimensions.get('window');


export default function Menu({navigation}){


    return(
        <View style={styles.container}>
        <View style={styles.top}><Text style={{flexDirection: 'row-reverse'}}></Text></View>
        <View style={styles.middle}>
        
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
      margin: 10,
    },
    top: {
      flex: 0.5,
      // backgroundColor: "white",
      // borderWidth: 2,
    },
    middle: {
      flex: 5,
      backgroundColor: "#FFFFFF",
      borderWidth: 2,
      flexDirection: "row",
    },
    bottom: {
      flex: 1,
      // flexDirection: "row",
      borderWidth: 0,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingBottom: 8,
      marginTop: 2
    },
})

