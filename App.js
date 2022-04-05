import React, {Component} from 'react'
import {AppNavigator} from './navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native';

export default class App extends Component { 
  render(){ 
    return(
        <NavigationContainer>
          <AppNavigator/>
        </NavigationContainer>    
      );
    }
  }