import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import { render } from 'react-dom';
import Ionicons from 'react-native-vector-icons/MaterialIcons'

import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/registerScreen';
import Home from './Screens/Home';
import Noticias from './Screens/Noticias';
import perfil from './Screens/perfil';

const LoginScreens = createStackNavigator(
  {
    login: LoginScreen,
    register: RegisterScreen
  },
  {
    initialRouteName:"login"
  }
);

const homeScreensTab = {
  screen: Home,
  navigationOptions: ({ navigation }) => ({
    title: 'Home',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Ionicons name={'home'} size={25} color={tintColor} />;
    },
  }),
};

const NoticiasTab = {
  screen: Noticias,
  navigationOptions: ({ navigation }) => ({
    title: 'Info',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Ionicons name={'info'} size={25} color={tintColor} />;
    },
  }),
};

const perfilTab = {
  screen: perfil,
  navigationOptions: ({ navigation }) => ({
    title: 'Map',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Ionicons name={'user'} size={25} color={tintColor} />;
    },
  }),
};
/*
const loginScreensTab = {
  screen: LoginScreens,
  navigationOptions: ({ navigation }) => ({
    title: 'Login',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Ionicons name={'person'} size={25} color={tintColor} />;
    },
  }),
};

const cerveceroScreensTab = {
  screen: CervecerosScreens,
  navigationOptions: ({ navigation }) => ({
    title: 'Cerveceros',
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      return <Ionicons name={'local-drink'} size={25} color={tintColor} />;
    },
  }),
};*/

export const HomeBottomNavigatorUsers = createBottomTabNavigator(
  {
    homeScreensTab,
    NoticiasTab,
    perfilTab
  },
  {
    navigationOptions:{
      header:null,
      
    },
      tabBarOptions: {
        showLabel: true,
        style: {
          backgroundColor: "black"
        },
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      },
  }
);
const GlobalNavigator= createStackNavigator(
  {
    login:LoginScreen,
    register:RegisterScreen,
    HomeBottomNavigatorUsers,
  },{
    initialRouteName:'login',
    header: null,
  }
)
export default class App extends Component {
  render() {
    let AppContainer = undefined

      AppContainer= createAppContainer(GlobalNavigator);

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
