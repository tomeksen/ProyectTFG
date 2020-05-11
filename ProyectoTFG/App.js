import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { render } from 'react-dom';

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/registerScreen';

const PrincipalScreens = createStackNavigator(
  {
    login: LoginScreen,
    register: RegisterScreen
  },
  {
    initialRouteName:"login"
  }
);

export default class App extends Component {
  render() {
    let AppContainer = undefined

      AppContainer= createAppContainer(PrincipalScreens);

      return <AppContainer/>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
