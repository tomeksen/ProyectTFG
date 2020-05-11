import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../Components/ScalingComps';
import {runCrypto} from '../Components/Encrypter';
import { ComprobarEmail } from '../Components/ConexionBBDD';

function registrarUsu(pass,corr,nck){
  runCrypto(pass,corr,nck,"");
}
//this.props.navigation.navigate('login');
export default class RegisterScreen extends Component {
    static navigationOptions = {
      header: null
    };
  
    constructor(props) {
      super(props);
      this.state = {
        Nickname: "",
        password: "",
        Email:"",
    };
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
    register=()=>{
      this.setState({Email:""})
      this.setState({password:""})
      this.setState({Nickname:""})
      this.props.navigation.navigate('login')}
  
    render() {
      return (
  
        <View style={styles.container}>
          <Icon 
          name='arrow-left'
          size={30}
          onPress={()=>this.props.navigation.navigate('login')}
          />
          <Input
            containerStyle={{width:260, color:"black"}}
            placeholder={"Nickname"}
            leftIcon={
              <Icon
                name='user'
                size={20}
                color='black'
              />
            }
            leftIconContainerStyle={{marginRight:8,marginLeft:8,marginBottom:-3}}
            inputStyle={{marginBottom:-8,fontSize:15}}
            value={this.state.Nickname}
            onChangeText={value => this.setState({ Nickname: value })}
            />
            <Input
            containerStyle={{width:260 , color:"black"}}
            placeholder={"Email"}
            leftIcon={
              <Icon
                name='envelope-o'
                size={20}
                color='black'
              />
            }
            leftIconContainerStyle={{marginRight:9,marginLeft:7,marginBottom:-3}}
            inputStyle={{marginBottom:-8,fontSize:15}}
            value={this.state.Email}
            onChangeText={value => this.setState({ Email : value })}
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
            value={this.state.password}
            onChangeText={value => this.setState({ password : value })}
            />
          <Button 
            containerStyle={{width:scale(150)}}
            title="Press me"
            color="#f194ff"
            type="clear"
            onPress={()=> {
              registrarUsu(this.state.password,this.state.Email,this.state.Nickname)
              this.register()
            }}
          />
          <Text>{this.state.Nickname}</Text>
          <Text>{this.state.password}</Text>
          <Text>{this.state.Email}</Text>
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