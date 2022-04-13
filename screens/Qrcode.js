import React from 'react';

function Qrcode (){
    return (
        <div>
            <Text>BBBBBBBBB</Text>
        </div>
    );
};

export default Qrcode;
// import React, {useState, useEffect , Component, } from 'react';
// import { Text, View, StyleSheet, Button, Image, ActivityIndicator, FlatList,} from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import axios from 'axios';


// const Qrcode = ({ navigation }) => {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);


//   const sendProductData = (data) => {
//     navigation.navigate("Categories", { id: data});
//     console.log(data.restaurant_name)
//     console.log('0000000005485')
//     console.log(data)
//   };

//   useEffect(() => {
//     (async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const handleBarCodeScanned = ({ type, data }) => {
//     let dataObj = JSON.parse(data);
//     setScanned(true);
    
//     sendProductData(dataObj);
//     //alert(`data in  code bar is ${data} has been scanned!`);
//     console.log(dataObj.company_id)
//     console.log(dataObj.table_unique_name)
//     console.log('jggffgdffghgjhgfdxfcghjhgfd')
//     console.log(dataObj.restaurant_name)
//     console.log(dataObj.table_name)
//   };
  


//   // if (hasPermission === null) {
//   //   return <Text>Requesting for camera permission</Text>;
//   // }
//   // if (hasPermission === false) {
//   //   return <Text>No access to camera</Text>;
//   // }

//   return (

//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned}
//     <View style={{flex: 1, height: '100%', width: '100%', }}>
//     <View >
//       <Image style={{height: '100%', width: '100%',}}
//       source={require('../assets/QR_Code.png')}     
//     />
//     </View>
//     </View>
//     </View>

//   );
// };

// export default Qrcode;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
