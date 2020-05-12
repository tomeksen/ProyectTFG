import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert} from 'react-native';
import {useEffect} from 'react';
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../Components/ScalingComps';

export default class Home extends Component {
  
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
    }

  }




render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{fontSize:15,marginTop:25,color:'blue'}} >Bienvenido al home</Text>
        </View>
  
      </View>
    )
    
    }
  }
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
  },

  button: {
    width: 500,
  },

  button_register: {
    width: scale(30),
    paddingTop: 8,
    paddingBottom: 8,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderRightColor: '#dba470',
    borderLeftColor: '#dba470',
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: "#f6e8cb"
  },

  button_invitado: {
    width: 275,
    paddingTop: 8,
    paddingBottom: 8,
    borderRightWidth: 5,
    borderLeftWidth: 5,
    borderRightColor: '#dba470',
    borderLeftColor: '#dba470',
    marginTop: 7,
    borderRadius: 10,
    backgroundColor: "#f6e8cb",
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },

  buttonText_register: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },


  textInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
    fontSize: 15,
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 5,
    padding: 5

  },
  imageStyle: {
    width: 240,
    height: 240,
    marginBottom: 10,
    alignSelf: 'center'
  }
});