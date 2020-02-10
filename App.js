import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './screens/loadingscreen';
import Login from './screens/login';
import Home from './screens/home'

const Stack = createStackNavigator();

export default class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions = {{
          headerShown: false
        }}>
          <Stack.Screen
            name = "LoadingScreen"
            component = {LoadingScreen}/>
          <Stack.Screen
            name = "Login"
            component = {Login}/>
            <Stack.Screen
              name = "Home"
              component = {Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
