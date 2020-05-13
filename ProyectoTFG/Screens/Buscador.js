import React, { Component } from 'react';
import {View, } from 'react-native';

export default class Buscador extends Component{
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
        nickname:"",
        email:"",
        Descripcion="",
        cuentasjuegos=null
    }

  }
  render(){
      return(
          <View>
              
          </View>
      )
  }
}
