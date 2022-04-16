import React, { useEffect, useState, useRef } from 'react';
export const { width, height} = Dimensions.get('window');

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Dimensions
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

export default function Qrcode({navigation}) {
    const scanner = useRef(null)
    const [scanned, setScanned] = useState(false);
    // const[scan, setScan] = useState(false)
    const[result, setResult] = useState(null)

    useEffect(() => {
      setScanned(false)
    }, [scanned])


    const sendProductData = (data) => {
        navigation.navigate("Menu1", { id: data});
        // console.log('MMMM>>>>::::::::', data)
      };
    

//   const onSuccess = e => {
//     setResult(e);
//     setScan(false);

//     if(e.data === 'http'){
//         console.log("kkkkkkkk", e.data)
//     }
//   };

  const handleBarCodeScanned = ({type, data}) => {
    let dataObj = data;
    setScanned(true);
    
    sendProductData(dataObj);
    //alert(`data in  code bar is ${data} has been scanned!`);
    // console.log(dataObj.company_id)
    // console.log(dataObj.table_unique_name)
    // console.log('jggffgdffghgjhgfdxfcghjhgfd')
    // console.log(dataObj.restaurant_name)
    // console.log(dataObj.table_name)
  };

  


    return(

      <QRCodeScanner
        onRead={scanned ? undefined : handleBarCodeScanned}
        ref={scanner}
        reactivate={true}
        showMarker={true}
        topContent={
          <Text style={styles.centerText}>
            {/* Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code. */}
          </Text>
        }
        bottomContent={
          <>
            <TouchableOpacity style={styles.buttonTouchable} onPress={() => scanner.current.reactivate()}>
                {/* <Text style={styles.buttonText}>OK. Got it!</Text> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonTouchable} onPress={() => setScanned(false)}>
                <Text style={styles.buttonText}>STOP</Text>
            </TouchableOpacity>
            </>
        }
      />
    );
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});