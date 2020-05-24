import React, { Component } from 'react';
import {View, Text } from 'react-native';
import {Header,Button,Icon} from 'react-native-elements';
import {ModalForms} from '../Components/ModalFormulario';
import {CuentaForms} from '../Components/ModalCuentaJuegos';
export default class perfil extends Component{
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
        nickname:global.nick,
        email: global.correoUsu,
        Descripcion: global.desc,
        cuentasjuegos:null,
        setModalVisible:false,
        setModal1Visible:false
    }
}
handleItemDataOnPress=async()=>{
    this.setState({
      setModalVisible:true,
    })
  }

  handleModalClose=async()=>{
    this.setState({
      setModalVisible:false,
    })
}

    handleItemData1OnPress=async()=>{
        this.setState({
          setModal1Visible:true,
        })
    }
    
    handleModal1Close=async()=>{
        this.setState({
          setModal1Visible:false,
    })

  }
  render(){
      return(
          <View style={{flex:1,margin:15}}>
              <View style={{flex:0.6}}>
                <View style={{flex:0.25,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                    <Text style={{fontSize:20}}>Datos Personales  </Text>
                    <Icon
                    style={{marginLeft:12}}
                    size={25}
                    name='edit'
                    type='font-awesome'
                    onPress={()=>this.handleItemDataOnPress()}
                    />
                </View>
                <View style={{flex:0.15}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Nickname:   {this.state.nickname}</Text>
                </View>
                <View style={{flex:0.15}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Email:    {this.state.email}</Text>
                </View>
                <View style={{flex:0.15}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Descripcion:</Text>
                    <Text multiline={true} numberOfLines={4} allowFontScaling>{this.state.Descripcion}</Text>
                </View>
              </View>
              <View style={{flex:0.5}}>
                  <View style={{flex:0.2,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20}}>cuentas de juego  </Text>
                    <Icon
                        style={{marginLeft:12}}
                        size={25}
                        name='edit'
                        type='font-awesome'
                        onPress={()=>this.handleItemData1OnPress()}
                        />
                    </View>
                    
              </View>
              <View>
                <ModalForms
                    showModal={this.state.setModalVisible}
                    onClose={this.handleModalClose}
                />
                <CuentaForms
                showModal={this.state.setModal1Visible}
                onClose={this.handleModal1Close}
                />
              </View>
          </View>
      )
  }
}