import React from 'react';
import Home from '../screens/Home'
import Login from '../screens/Login'
import Connect from '../screens/Connect'
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
    </Stack.Navigator>
  );
}