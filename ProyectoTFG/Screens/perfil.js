import React, { Component } from 'react';
import {View, Text, Alert,ActivityIndicator,Image  } from 'react-native';
import {Header,Button,Icon} from 'react-native-elements';
import {ModalForms} from '../Components/ModalFormulario';
import {CuentaForms} from '../Components/ModalCuentaJuegos';
import {getidWithid} from '../Components/ConexionBBDD';
import {getIdWithName} from '../Components/RiotGamesApi';

export default class perfil extends Component{
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
        nickname:global.nick,
        email: global.correoUsu,
        Descripcion: global.desc,
        Cuentajuego1:"",
        Cuentajuego2:"",
        soloQ:{},
        flexQ:{},
        urlphoto:"",
        urlphoto1:"",
        eloSoloq:"",
        eloflexQ:"",
        setModalVisible:false,
        setModal1Visible:false
    }
    this.getcuentas();
}
getcuentas=async()=>{
  let cuentas= await getidWithid(global.idUsuario)
  let cuenta1= cuentas[0].NombreCuenta
  let cuenta2= cuentas[1].NombreCuenta
  this.setState({Cuentajuego1:cuenta1, Cuentajuego2:cuenta2})
  let getLol= await getIdWithName(cuenta1)
  this.setState({soloQ:getLol.first,flexQ:getLol.second})
  if(getLol.first!=null){
  if(getLol.first.tier=="IRON"){
    this.setState({urlphoto: require("../Imagenes/ranked-emblems/iron.png"),eloSoloq:'Hierro '+getLol.first.rank})
  }else if(getLol.first.tier=="BRONZE"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/bronce.png"),eloSoloq:'Bronce '+getLol.first.rank})
  }else if(getLol.first.tier=="SILVER"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/plata.png"),eloSoloq:'Plata '+getLol.first.rank})
  }else if(getLol.first.tier=="GOLD"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/oro.png"),eloSoloq:'Oro '+getLol.first.rank})
  }else if(getLol.first.tier=="PLATINUM"){
    this.setState({urlphoto: require('../Imagenes/ranked-emblems/platino.png'),eloSoloq:'Platino '+getLol.first.rank})

  }else if(getLol.first.tier=="DIAMOND"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/diamante.png"),eloSoloq:'Diamante '+getLol.first.rank})
  }else if(getLol.first.tier=="MASTER"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/master.png"),eloSoloq:'Maestro '+getLol.first.rank})
  }else if(getLol.first.tier=="GRANDMASTER"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/grandmaster.png"),eloSoloq:'Gran Maestro '+getLol.first.rank})
  }else if(getLol.first.tier=="CHALLENGER"){
    this.setState({urlphoto:require("../Imagenes/ranked-emblems/challenger.png"),eloSoloq:'Aspirante '+getLol.first.rank})
  }
}
if(getLol.second!=null){
  if(getLol.second.tier=="IRON"){
    this.setState({urlphoto1: require("../Imagenes/ranked-emblems/iron.png"),eloflexQ:'Hierro '+getLol.first.rank})
  }else if(getLol.second.tier=="BRONZE"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/bronce.png"),eloflexQ:'Bronce '+getLol.first.rank})
  }else if(getLol.second.tier=="SILVER"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/plata.png"),eloflexQ:'Plata '+getLol.first.rank})
  }else if(getLol.second.tier=="GOLD"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/oro.png"),eloflexQ:'Oro '+getLol.first.rank})
  }else if(getLol.second.tier=="PLATINUM"){
    this.setState({urlphoto1: require('../Imagenes/ranked-emblems/platino.png'),eloflexQ:'Platino '+getLol.first.rank})
  }else if(getLol.second.tier=="DIAMOND"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/diamante.png"),eloflexQ:'Diamante '+getLol.first.rank})
  }else if(getLol.second.tier=="MASTER"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/master.png"),eloflexQ:'Maestro '+getLol.first.rank})
  }else if(getLol.second.tier=="GRANDMASTER"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/grandmaster.png"),eloflexQ:'Gran Maestro '+getLol.first.rank})
  }else if(getLol.second.tier=="CHALLENGER"){
    this.setState({urlphoto1:require("../Imagenes/ranked-emblems/challenger.png"),eloflexQ:'Aspirante '+getLol.first.rank})
  }
}
  
  setTimeout(function(){ this.setState({isLoading:false}) }.bind(this),3000)
  
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
    let view = this.state.isLoading ? (
      <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Please Wait.." />
      </View>
    ) : (
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
                    <Text style={{borderBottomWidth:1}}>League of legends</Text>
                    <View style={{flex:0.4,flexDirection:"row"}}>
                      <View style={{flex:0.3}}>
                        <Text style={{borderBottomWidth:1,alignSelf:'center'}}>Nickname</Text>
                        <Text style={{alignSelf:'center'}}>{this.state.Cuentajuego1}</Text>
                      </View>
                      <View style={{flex:0.35}}>
                        <Text style={{borderBottomWidth:1,alignSelf:'center'}}>SoloQ</Text>
                        <Image
                        source={this.state.urlphoto}
                        style={{width:50,height:50,resizeMode:'stretch',alignSelf:'center'}}
                        />
                        <Text style={{alignSelf:'center'}}>{this.state.eloSoloq}</Text>
                      </View>
                      <View style={{flex:0.35}}>
                        <Text style={{borderBottomWidth:1,alignSelf:'center'}}>flex Q</Text>
                        <Image
                        source={this.state.urlphoto1}
                        style={{width:50,height:50,resizeMode:'stretch',alignSelf:'center'}}
                        />
                        <Text style={{alignSelf:'center'}}>{this.state.eloflexQ}</Text>
                      </View>
                    </View>
                    <Text style={{borderBottomWidth:1}}>TeamFight Tactics</Text>
                    <View style={{flex:0.4,flexDirection:"row"}}>
                      <View style={{flex:0.3}}>
                        <Text >{this.state.Cuentajuego2}</Text>
                      </View>
                    </View>
                    
              </View>
    )
      return(
          <View style={{flex:1,margin:15}}>
              <View style={{flex:0.5}}>
                <View style={{flex:0.19,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                    <Text style={{fontSize:20}}>Datos Personales  </Text>
                    <Icon
                    style={{marginLeft:12}}
                    size={25}
                    name='edit'
                    type='font-awesome'
                    onPress={()=>this.handleItemDataOnPress()}
                    />
                </View>
                <View style={{flex:0.25}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Nickname:   {this.state.nickname}</Text>
                </View>
                <View style={{flex:0.25}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Email:    {this.state.email}</Text>
                </View>
                <View style={{flex:0.32}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Descripcion:</Text>
                    <Text multiline={true} numberOfLines={4} allowFontScaling>{this.state.Descripcion}</Text>
                </View>
              </View>
                {view}
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