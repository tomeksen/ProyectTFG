import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, ImageBackground} from 'react-native';
import {useEffect} from 'react';
import { Input,Button,Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../Components/ScalingComps';
import runCrypto, { CryptoComprobador } from '../Components/Encrypter';
import {getidWithEmail} from '../Components/ConexionBBDD';

let registrarse = "o registrarse"
export default class LoginScreen extends Component {
  
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      password: "",
      idUsu:0,
    }
    //this.setState({Email:""})
    //this.setState({password:""})
  }

/*
  login = () => {
    fetch()
      .then(resp => resp.json())
      .then(data => {
        this.setState({usuario : data})
        if (this.state.usuario.length > 0) {
          global.id = this.state.usuario[0].idMarca,
          global.idioma = this.state.idioma
          global.login = true;
          global.nom = this.state.usuario[0].user
          global.idUsuario = this.state.usuario[0].id
          global.isAdmin = this.state.usuario[0].admin
         this.setState({login: global.login})
         if(global.isAdmin==true){
          
            this.props.navigation.navigate('HomeBottomNavigatorCervezeros', {user: this.state.usuario[0].admin});
         }else{
            this.props.navigation.navigate('HomeBottomNavigatorUsers', {user: this.state.usuario[0].admin});
         }
          
        } else {
          ToastAndroid.showWithGravity('Usuario o contraseña incorrectos', ToastAndroid.LONG, ToastAndroid.TOP);
        }
      });
  }

  logout = () =>{
    global.login = false;
    global.isAdmin = false;
    this.setState({login: global.login})
  }
  */
  login=async ()=>{
    var confirmador = await CryptoComprobador(this.state.password,this.state.Email);
  if(confirmador=='true'){
    let id= await getidWithEmail(this.state.Email)
    global.correoUsu=this.state.Email
    global.idUsuario=id
    this.props.navigation.navigate('HomeBottomNavigatorUsers', { data : this.state.Email });
    
  }
  //
 }

register = () => {
  this.props.navigation.navigate('register');
}

render() {
    return (
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
        <ImageBackground
        source={require('../Imagenes/Login.png')}
        style={{flex:1}}
        >
          <Image
          source={require('../Imagenes/758245.png')}
          style={{height:300,width:300,marginBottom:30,marginTop:-140}}
          />
          <Input
            containerStyle={{width:scale(220)}}
            placeholder={"Email"}
            leftIcon={
              <Icon
                name='envelope-o'
                size={20}
                color='black'
              />
            }
            leftIconContainerStyle={{marginRight:9,marginLeft:5,marginBottom:-3}}
            inputStyle={{marginBottom:-8,fontSize:15}}
            value={this.state.Email}
            onChangeText={value => this.setState({ Email: value })}
            />
            <Input
            containerStyle={{width:scale(220)}}
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
            onChangeText={value => this.setState({ password: value })}
            />
          <Button 
            containerStyle={{width:scale(150)}}
            title="Log In"
            color="#f194ff"
            type="clear"
            onPress={()=>this.login()}
          />
          <Text style={{fontSize:15,marginTop:25,color:'blue'}} onPress={()=>this.props.navigation.navigate('register')}>Crear cuenta</Text>
        </ImageBackground>
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