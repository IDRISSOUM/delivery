import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export const { width, height } = Dimensions.get("window");
// import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from "../consts/color";
import STYLES from "../styles";
import { Base64 } from "js-base64";
import { LogBox } from "react-native";

const Login = ({ navigation, props }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [userDetails, setUserDetails] = React.useState([]);

  useEffect(() => {
    // Ignore log notification by message:
    LogBox.ignoreLogs(["Warning: ..."]);

    // Ignore all log notifications:
    LogBox.ignoreAllLogs();
  }, []);

  const handleOnchange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
    // console.log("MMMMMDMDMM", input);
  };

  const _handlerSignin = async () => {
    var data = `{"jsonrpc":"2.0", "params":{"db":"test","login": "${inputs.email}","password": "${inputs.password}"}`;

    if (inputs.email.length == 0 && inputs.password.length == 0) {
      Alert.alert("Warning!", "please enter your credentials");
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      Alert.alert("Please input a valid email", "email");
    } else {
      const url = "http://172.104.45.142/web/session/authenticate";

      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          params: {
            db: "test",
            login: inputs.email,
            password: inputs.password,
          },
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            console.log(response.result);
            if (response.result == undefined) {
              Alert.alert("Warning", "please enter the correct credentials");
            } else {
              setData(response.result);
              navigation.navigate("Menu", { data: response.result });
            }
          }
        });
    }
  };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 22, color: COLORS.dark }}
          >
            GOOD
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              color: COLORS.secondary,
            }}
          >
            JOB
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <Text
            style={{ fontSize: 27, fontWeight: "bold", color: COLORS.dark }}
          >
            Welcome Back,
          </Text>
          <Text
            style={{ fontSize: 19, fontWeight: "bold", color: COLORS.light }}
          >
            Sign in to continue
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="mail-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Email"
              style={STYLES.input}
              onChangeText={(text) => handleOnchange(text, "email")}
            />
          </View>
          <View style={STYLES.inputContainer}>
            <Icon
              name="lock-outline"
              color={COLORS.light}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Password"
              style={STYLES.input}
              secureTextEntry={true}
              onChangeText={(text) => handleOnchange(text, "password")}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                _handlerSignin();
              }}
              style={STYLES.btnPrimary}
            >
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={STYLES.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>OR</Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={STYLES.btnSecondary}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={STYLES.btnImage}
                  source={require("../assets/fa.png")}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: 10 }}></View>
            <View style={STYLES.btnSecondary}>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  style={STYLES.btnImage}
                  source={require("../assets/google.png")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "center",
            marginTop: 40,
            marginBottom: 20,
          }}
        >
          <Text style={{ color: COLORS.light, fontWeight: "bold" }}>
            Don`t have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: COLORS.pink, fontWeight: "bold" }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
