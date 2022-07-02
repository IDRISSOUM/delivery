import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Image,
  FlatList,
  ScrollView,
  StatusBar,
  Button,
  Modal,
} from "react-native";
import { color } from "react-native-elements/dist/helpers";
export const { width, height } = Dimensions.get("window");
import ImagePicker from "react-native-image-crop-picker";
import { LogBox } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import IconEvilIcons from "react-native-vector-icons/EvilIcons";

export default function Details({ route, navigation }) {
  const [getdata1, setData1] = useState([]);
  const [getvalue, setValue] = useState([]);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);
  const [data2, setData2] = useState([]);
  const [getout, setClockout] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { item1, data } = route.params;

  console.log("-------------UTUTUTUTUTUUT-------", item1);

  useEffect(() => {
    getValues();
    return () => {
      // setValue(); // This worked for me
      // setClockout(); // This worked for me
    };
  }, [getvalue]);

  useEffect(() => {
    // Ignore log notification by message:
    LogBox.ignoreLogs([
      "Warning: Possible Unhandled Promise Rejection (id: 0)",
    ]);

    // Ignore all log notifications:
    LogBox.ignoreAllLogs();
  }, []);

  const pickSingleWithCamera = (cropping, mediaType = "photo") => {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      includeBase64: true,
      mediaType,
    })
      .then((image) => {
        // console.log('received base64 image----------------', image);
        setImage({
          uri: image.path,
          width: image.width,
          height: image.height,
          mime: image.mime,
          data: image.data,
        });
        if (image != "") {
          setModalVisible(true);
        } else {
          null;
        }
      })
      .catch((e) => alert(e));
  };

  // const pickSingleBase64 = (cropit) => {
  //     ImagePicker.openPicker({
  //         width: 300,
  //         height: 300,
  //         cropping: cropit,
  //         includeBase64: true,
  //         includeExif: true,
  //     })
  //         .then((image) => {
  //         console.log('received base64 image----------------', image);
  //         setImage({
  //             uri: `data:${image.mime};base64,` + image.data,
  //             width: image.width,
  //             height: image.height,
  //             mime: image.mime,
  //             data: image.data
  //         })
  //         setImages(null)
  //         })
  //         .catch((e) => alert(e));
  //     }

  const renderAsset = (image) => {
    return renderImage(image);
  };

  const renderImage = (image) => {
    return (
      <ScrollView style={{ padding: "10%" }}>
        <View style={{}}>
          <Image
            style={{
              width: 180,
              height: 180,
              resizeMode: "contain",
              borderRadius: 25,
            }}
            source={image}
          />
        </View>
      </ScrollView>
    );
  };

  const getClockin = () => {
    fetch("http://172.104.45.142:8069/write/trip/order/area/clockin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        params: {
          serial_number: route.params.data,
          area: route.params.item1.area_code,
        },
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.result != null) {
          let constdata = json.result;
          console.log("OOOOOOO---=====PPPPP", json.result);
          setData1(constdata);
        } else {
          console.log("OOOOOOOPPPPP", json);
        }
      })
      .catch((error) => console.error("::::::::::::::", error));
  };

  const getClockout = () => {
    fetch("http://172.104.45.142:8069/write/trip/order/area/clockout/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        params: {
          serial_number: route.params.data,
          area: route.params.item1.area_code,
        },
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.result != null) {
          console.log("FFFFFFOOOO", json.result);
          let constclokout = json.result;
          setClockout(constclokout);
        } else {
          console.log("PPPOOOOIIIUUU-----", json);
        }
      })
      .catch((error) => console.error(":::::::ERRORRRRR", error));
  };

  const getValues = async () => {
    await fetch("http://172.104.45.142:8069/get/trip/order/area", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        params: {
          serial_number: route.params.data,
          area_code: route.params.item1.area_code,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.result != null) {
          let constvalue = json.result.Trip_Area;
          setValue(constvalue);
        } else {
          console.log("&&&&&&*********", json);
        }
      })
      .catch((error) => console.error("::::::::::::::", error));
  };
  // console.log("-----UUUII----PPOO----", getvalue.area_code)

  const sendImageData = () => {
    if (image != null) {
      // console.log("EEEEEEGGGGGG-----------", image.data)
      const url = "http://172.104.45.142:8069/create/trip/order/picture/";
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          params: {
            serial_number: route.params.data,
            area: route.params.item1.area_code,
            picture_image: image.data,
          },
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json != null) {
            console.log("MMMMMCCNCNCNCB", json.result);
            setData2(json.result);
          } else {
            console.log("&&&&&&&&&&&777777", json);
          }
        })
        .catch((error) => console.error('::::::::::::::::"""""""', error));
    } else {
      console.log("ERRRRRRRRRRRRRRRRREUUR");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="auto" />
      {getdata1 && getdata1 != "" ? (
        <View style={[styles.part, { textAlign: "center" }]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#000",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottomWidth: 0.5,
              borderBottomColor: "#000",
              marginBottom: 10,
            }}
          >
            Clock-in is:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "justify",
              color: "red",
            }}
          >
            {getdata1.message}
          </Text>
        </View>
      ) : getvalue && getvalue.clock_in != false ? (
        <View style={[styles.part, { textAlign: "center" }]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#000",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottomWidth: 0.5,
              borderBottomColor: "#000",
              marginBottom: 10,
            }}
          >
            Clock-in is:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "justify",
              color: "red",
            }}
          >{`Your clockin datetime${"\t"}${getvalue.clock_in}at${"\t"}`}</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "bold",
              color: "red",
            }}
          >
            {getvalue.area_code}
          </Text>
        </View>
      ) : (
        <View style={[styles.part, { textAlign: "center" }]}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#000",
              textTransform: "uppercase",
              textAlign: "center",
              borderBottomWidth: 0.5,
              borderBottomColor: "#000",
              marginBottom: 10,
            }}
          >
            Clock-in is:
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "justify",
              color: "red",
            }}
          ></Text>
        </View>
      )}

      <View style={styles.container1}>
        {getvalue && getvalue.clock_in != false ? (
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 25,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                width: 200,
                height: 50,
                backgroundColor: "#BAE4F0",
                marginBottom: "5%",
              }}
              onPress={() => {
                getValues();
              }}
              disabled={true}
            >
              <Text style={styles.text}>clIck in</Text>
            </TouchableOpacity>
          </View>
        ) : getdata1 && getdata1.clock_in != true ? (
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 25,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                width: 200,
                height: 50,
                backgroundColor: "#BAE4F0",
                marginBottom: "5%",
              }}
              onPress={() => {
                getClockin();
              }}
              disabled={false}
            >
              <Text style={styles.text}>clck in</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 25,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                width: 200,
                height: 50,
                backgroundColor: "#BAE4F0",
                marginBottom: "5%",
              }}
              onPress={() => {
                getValues();
              }}
              disabled={true}
            >
              <Text style={styles.text}>clck in</Text>
            </TouchableOpacity>
          </View>
        )}
        {getvalue && getvalue.clock_in != false ? (
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 30,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                padding: 10,
                width: 200,
                height: 50,
                backgroundColor: "#D6E1B9",
                marginBottom: "5%",
              }}
              onPress={() => pickSingleWithCamera()}
              disabled={false}
            >
              <Text style={styles.text}>picture upload</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // : getvalue && getvalue.picture_taken != false ?
          // (   <View
          //     style={styles.Uni}>
          //     <TouchableOpacity
          //     style={{
          //         justifyContent: 'center',
          //         borderRadius: 30,
          //         shadowOpacity: 0.29,
          //         shadowRadius: 4.65,
          //         elevation: 2,
          //         padding: 10,
          //         width: 200,
          //         height: 50,
          //         backgroundColor: '#D6E1B9',
          //         marginBottom: '5%'
          //     }}
          //     onPress={() => {}}
          //     disabled={true}
          //     >
          //         <Text style={styles.text}>
          //             picture upload
          //         </Text>
          //     </TouchableOpacity>
          //     </View>
          // )
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 30,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                padding: 10,
                width: 200,
                height: 50,
                backgroundColor: "#D6E1B9",
                marginBottom: "5%",
              }}
              disabled={true}
            >
              <Text style={styles.text}>picture upload</Text>
            </TouchableOpacity>
          </View>
        )}

        {getvalue && getvalue.picture_taken != true ? (
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 30,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                padding: 10,
                width: 200,
                height: 50,
                backgroundColor: "#FFD433",
                marginBottom: "5%",
              }}
              onPress={() => {}}
              disabled={true}
            >
              <Text style={styles.text}>clck out</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.Uni}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 30,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                padding: 10,
                width: 200,
                height: 50,
                backgroundColor: "#FFD433",
                marginBottom: "5%",
              }}
              onPress={() => {
                getClockout();
                navigation.goBack();
              }}
              disabled={false}
            >
              <Text style={styles.text}>clck out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewCategorie}>
            {/* <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ textAlign: "right" }}>
                <IconEvilIcons name="close-o" color={"#000"} size={40} />
              </Text> */}
            <View style={{ alignSelf: "center" }}>
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  borderRadius: 25,
                }}
                source={image}
              />
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                borderRadius: 25,
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                elevation: 2,
                width: 200,
                height: 50,
                backgroundColor: "#BAE4F0",
                marginBottom: "5%",
                alignSelf: "center",
                marginVertical: "5%",
              }}
              onPress={() => {
                sendImageData();
                setModalVisible(!modalVisible);
              }}
              //   {...setModalVisible(true)}
            >
              <Text style={styles.text}>send image</Text>
            </TouchableOpacity>
            {/* </TouchableOpacity> */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  button: {
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    backgroundColor: "#45d8d8",
  },
  timerText: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 20,
  },
  textt: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontSize: 15,
    // backgroundColor: '#45d8d8'
  },
  textt1: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "white",
    fontSize: 15,
    // backgroundColor: '#45d8d8'
  },
  part: {
    margin: 25,
  },
  container1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Uni: {},
  text: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
    textTransform: "uppercase",
  },
  modalView: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "100%",
    justifyContent: "center",
  },
  modalViewCategorie: {
    backgroundColor: "#DAF7A6",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "100%",
    alignSelf: "center",
    top: 10,
    justifyContent: "center",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
});
