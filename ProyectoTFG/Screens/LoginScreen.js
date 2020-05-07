import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image ,Picker,Button} from 'react-native';
import { ToastAndroid } from 'react-native';
import { render } from 'react-dom';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

let registrarse = "o registrarse"
export default class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

  /*constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      usuario: [],
      login:global.login,
      idioma:"esp"


    }

  }


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

register = () => {
  this.props.navigation.navigate('register');
}

render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
          <Input
            containerStyle={{width:260 , color:"black"}}
            placeholder={"User"}
            leftIcon={
              <Icon
                name='envelope-o'
                size={20}
                color='black'
              />
            }
            leftIconContainerStyle={{marginRight:9,marginLeft:5,marginBottom:-3}}
            inputStyle={{marginBottom:-8,fontSize:15}}
            onChangeText={value => this.setState({ comment: value })}
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
            onChangeText={value => this.setState({ comment: value })}
            />

          <Button
          title="Press me"
          color="#f194ff"
          onPress={this.register}
          />
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
    width: 275,
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