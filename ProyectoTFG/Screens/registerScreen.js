import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button,Dimensions } from 'react-native';
import { ToastAndroid } from 'react-native';
import { render } from 'react-dom';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const { heightmax } = Dimensions.get('window').height;
const { widthmax } = Dimensions.get('window').width;

export default class RegisterScreen extends Component {
    static navigationOptions = {
      header: null
    };
  
    constructor(props) {
      super(props);
      this.state = {
        name: "",
        user: "",
        password: "",
        idMarca:"",
      }
    }
  
  
    /*registerUser = () => {
      fetch()
        .then(resp => resp.json())
        .then(data => {
          let dades = {
            id: data[0].id + 1,
            user: this.state.user,
            password: this.state.password,
            admin: false,
            idMarca:"",
          };

          fetch(global.url + "/usuarios", {
            method: 'POST',
            body: JSON.stringify(dades),
            headers: {
              'Content-Type': 'application/json; charset=UTF-8'
            }
          })
            .then(resp => {
              ToastAndroid.showWithGravity('Usuario registrado correctamente', ToastAndroid.LONG, ToastAndroid.TOP),
            });
  
        });
  
    }*/
  
    render() {
      return (
  
        <View style={styles.container}>
          <Input
            containerStyle={{width:260, color:"black"}}
            placeholder={"User"}
            leftIcon={
              <Icon
                name='envelope-o'
                size={20}
                color='black'
              />
            }
            leftIconContainerStyle={{marginRight:8,marginLeft:5,marginBottom:-3}}
            inputStyle={{marginBottom:-8,fontSize:15}}
            //onChangeText={value => this.setState({ comment: value })}
            />
            <Input
            containerStyle={{width:260 , color:"black"}}
            placeholder={"Password"}
            secureTextEntry={true}
            leftIcon={
              <Icon
                name='lock'
                size={20}
                color='black'
              />
            }
            leftIconContainerStyle={{marginRight:9,marginLeft:9,marginBottom:-3}}
            inputStyle={{marginBottom:-8,fontSize:15}}
            //onChangeText={value => this.setState({ comment: value })}
            />
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => this.props.navigation.navigate('login')}
          />
  
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "white",
    },
  
    textInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 250,
      margin: 3,
      fontSize: 15
  
    },
    button: {
      width: 275,
      paddingTop: 8,
      paddingBottom: 8,
      marginTop: 7,
      borderRadius: 5,
      backgroundColor: "#4ec0a5"
    },
  
    buttonText: {
      fontSize: 20,
      textAlign: 'center',
      color: '#FFFFFF',
      fontWeight: 'bold'
    }
  });