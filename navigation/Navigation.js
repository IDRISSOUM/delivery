import React from 'react';
import Home from '../screens/Home'
import Login from '../screens/Login'
import Connect from '../screens/Connect'
import Menu from '../screens/Menu'
import MenuQr from '../screens/MenuQr'
// import Qrcode from '../screens/Qrcode'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Welcome to Delivery App',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
        }}
      />
      <Stack.Screen
        name="Connect"
        component={Connect}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{}}
      />

      <Stack.Screen
        name="MenuQr"
        component={MenuQr}
        options={{}}
      />

      {/* <Stack.Screen
        name="Qrcode"
        component={Qrcode}
        options={{}}
      /> */}
    </Stack.Navigator>
  );
}