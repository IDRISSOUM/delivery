import React from 'react';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Connect from '../screens/Connect'
import Menu from '../screens/Menu'
import Menu1 from '../screens/Menu1'
import MenuQr from '../screens/MenuQr'
import Qrcode from '../screens/Qrcode'
import Details from '../screens/Details';
import Takeimg from '../screens/Takeimg'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          headerMode: 'screen',
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#47E3FF' },
          headerTitleAlign: 'center'
        }}
      >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          // header: () => null,
          title: 'Welcome to Delivery App',
          // headerTransparent: true,
          headerTitleStyle: {
            alignItems: 'center'
          },
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Login',
          // headerTransparent: true,
          justifyContent: 'center',
          headerTitleStyle: {
            alignItems: 'center'
          },
        }}
      />
      {/* <Stack.Screen
        name="Connect"
        component={Connect}
        options={{
          header: () => null,
          
        }}
      /> */}

      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          // header: () => null,
          headerTitleStyle: {
            alignItems: 'center'
          },
        }}
      />

      <Stack.Screen
        name="MenuQr"
        component={MenuQr}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Menu1"
        component={Menu1}
        options={{
          header: () => null,
          // headerTransparent: true,
          headerTitleStyle: {
          },
        }}
      />
      
      <Stack.Screen
        name="Qrcode"
        component={Qrcode}
        options={{
          header: () => null,
        }}
      />

      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Takeimg"
        component={Takeimg}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}