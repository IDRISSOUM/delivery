import React from 'react';
import Home from '../screens/Home'
import Login from '../screens/Login'
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
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: 'Demo',
        }}
      />
    </Stack.Navigator>
  );
}