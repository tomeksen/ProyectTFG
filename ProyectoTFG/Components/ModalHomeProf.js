import React,{Component} from 'react';
import{View,Text,StyleSheet,Dimensions,Modal,Share,Image, Alert} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Button,Icon} from 'react-native-elements';
import {getidWithid} from '../Components/ConexionBBDD';
import {getIdWithName,getTftAcc} from '../Components/RiotGamesApi';
const webViewHeight=Dimensions.get('window').height - 56;

export class ModalProf extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            Cuentajuego1:"",
            Cuentajuego2:"",
            soloQ:{},
            flexQ:{},
            tftSoloQ:{},
            urphototft:"",
            urlphoto:"",
            urlphoto1:"",
            eloSoloq:"",
            eloflexQ:"",
            eloTft:"",
        }
    }
    componentWillReceiveProps(nextProps){
        this.getcuentas();
    }
    getcuentas=async()=>{
        if(this.state.eloSoloq!=""||this.state.eloflexQ!=""||this.state.eloTft!=""){
        this.setState({
            isLoading:false,
            Cuentajuego1:"",
            Cuentajuego2:"",
            soloQ:{},
            flexQ:{},
            tftSoloQ:{},
            urphototft:"",
            urlphoto:"",
            urlphoto1:"",
            eloSoloq:"",
            eloflexQ:"",
            eloTft:"",})
        }
        let cuentasLOL= await getidWithid(global.iditem)
        let cuenta1= cuentasLOL[0].NombreCuenta
        let cuenta2= cuentasLOL[1].NombreCuenta
        if(this.state.Cuentajuego1==""||this.state.Cuentajuego2==""){
        
        this.setState({Cuentajuego1:cuenta1, Cuentajuego2:cuenta2})
        }
        let getLol= await getIdWithName(cuenta1)
        let cuentastft= await getTftAcc(cuenta2)
        if(this.state.soloQ=={}&&this.state.flexQ=={}&&this.state.tftSoloQ=={}){
        this.setState({soloQ:getLol.first,flexQ:getLol.second, tftSoloQ:cuentastft})
        }
        
        if(getLol.first!=null){
        if(getLol.first.tier=="IRON"){
          this.setState({urlphoto: require("../Imagenes/ranked-emblems/iron.png"),eloSoloq:'Hierro '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="BRONZE"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/bronce.png"),eloSoloq:'Bronce '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="SILVER"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/plata.png"),eloSoloq:'Plata '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="GOLD"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/oro.png"),eloSoloq:'Oro '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="PLATINUM"){
          this.setState({urlphoto: require('../Imagenes/ranked-emblems/platino.png'),eloSoloq:'Platino '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
      
        }else if(getLol.first.tier=="DIAMOND"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/diamante.png"),eloSoloq:'Diamante '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="MASTER"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/master.png"),eloSoloq:'Maestro '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="GRANDMASTER"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/grandmaster.png"),eloSoloq:'Gran Maestro '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }else if(getLol.first.tier=="CHALLENGER"){
          this.setState({urlphoto:require("../Imagenes/ranked-emblems/challenger.png"),eloSoloq:'Aspirante '+getLol.first.rank+" " +getLol.first.wins+"w "+getLol.first.losses+"l "})
        }
      }
      if(getLol.second!=null){
        if(getLol.second.tier=="IRON"){
          this.setState({urlphoto1: require("../Imagenes/ranked-emblems/iron.png"),eloflexQ:'Hierro '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="BRONZE"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/bronce.png"),eloflexQ:'Bronce '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="SILVER"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/plata.png"),eloflexQ:'Plata '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="GOLD"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/oro.png"),eloflexQ:'Oro '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="PLATINUM"){
          this.setState({urlphoto1: require('../Imagenes/ranked-emblems/platino.png'),eloflexQ:'Platino '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="DIAMOND"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/diamante.png"),eloflexQ:'Diamante '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="MASTER"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/master.png"),eloflexQ:'Maestro '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="GRANDMASTER"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/grandmaster.png"),eloflexQ:'Gran Maestro '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }else if(getLol.second.tier=="CHALLENGER"){
          this.setState({urlphoto1:require("../Imagenes/ranked-emblems/challenger.png"),eloflexQ:'Aspirante '+getLol.second.rank+" " +getLol.second.wins+"w "+getLol.second.losses+"l "})
        }
      }
      if(cuentastft.first!=null){
        if(cuentastft.first=="IRON"){
          this.setState({urphototft: require("../Imagenes/ranked-emblems/iron.png"),eloTft:'Hierro '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="BRONZE"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/bronce.png"),eloTft:'Bronce '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="SILVER"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/plata.png"),eloTft:'Plata '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="GOLD"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/oro.png"),eloTft:'Oro '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="PLATINUM"){
          this.setState({urphototft: require('../Imagenes/ranked-emblems/platino.png'),eloTft:'Platino '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="DIAMOND"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/diamante.png"),eloTft:'Diamante '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="MASTER"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/master.png"),eloTft:'Maestro '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="GRANDMASTER"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/grandmaster.png"),eloTft:'Gran Maestro '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }else if(cuentastft.first=="CHALLENGER"){
          this.setState({urphototft:require("../Imagenes/ranked-emblems/challenger.png"),eloTft:'Aspirante '+cuentastft.second+" " +cuentastft.third+"w "+cuentastft.four+"l "})
        }
      }
      
        
        
      }
    handleClose=async()=>{
        return this.props.onClose();
    }

    render(){
        const {showModal,profiledata} = this.props;
        let text= this.state.Cuentajuego1==""?(<Text>No hay cuenta</Text>):(<Text>{this.state.Cuentajuego1}</Text>)
        let viewSoloq = this.state.eloSoloq=="" ? (
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Unranked</Text>
            </View>
          ) : (
              <View>
            <Text style={{borderBottomWidth:1,alignSelf:'center'}}>SoloQ</Text>
                        <Image
                        source={this.state.urlphoto}
                        style={{width:50,height:50,resizeMode:'stretch',alignSelf:'center'}}
                        />
                        <Text style={{alignSelf:'center'}}>{this.state.eloSoloq}</Text>
                </View>
          )
        let viewflexQ = this.state.eloflexQ=="" ? (
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
              <Text>Unranked</Text>
            </View>
          ) : (
            <View >
                        <Text style={{borderBottomWidth:1,alignSelf:'center'}}>flex Q</Text>
                        <Image
                        source={this.state.urlphoto1}
                        style={{width:50,height:50,resizeMode:'stretch',alignSelf:'center'}}
                        />
                        <Text style={{alignSelf:'center'}}>{this.state.eloflexQ}</Text>
                      </View>
          )
        let viewtft = this.state.eloTft=="" ? (
            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
              <Text>No hay cuenta</Text>
            </View>
          ) : (
            <View style={{flex:0.4,flexDirection:"row"}}>
        <View style={{flex:0.3}}>
        <Text style={{borderBottomWidth:1,alignSelf:'center'}}>Nickname</Text>
          <Text style={{alignSelf:'center',marginTop:25}}>{this.state.Cuentajuego2}</Text>
        </View>
        <View style={{flex:0.35}}>
          <Text style={{borderBottomWidth:1,alignSelf:'center'}}>TftSoloQ</Text>
          <Image
          source={this.state.urphototft}
          style={{width:50,height:50,resizeMode:'stretch',alignSelf:'center'}}
          />
          <Text style={{alignSelf:'center'}}>{this.state.eloTft}</Text>
        </View>
        </View>
          )
        return(
            <Modal
            animationType='slide'
            transparent
            visible={showModal}
            onRequestClose={this.handleClose}
            >
                <View style={{margin:15,marginBottom:0}}>
                    <Header
                    containerStyle={{height:'7%',alignItems:'center',}}
                        leftComponent={
                            <Button
                            icon={{
                                name:'close',
                                size:25,
                                color:'white'
                            }}
                            onPress={this.handleClose}
                            >
                            </Button>
                        }
                        leftContainerStyle={{marginTop:-18,alignSelf:'center'}}
                        centerComponent={{text:'Perfil', style:{color:'#fff'}}}
                        centerContainerStyle={{marginTop:-18,alignSelf:'center'}}
                    />
                    <View style={{height:webViewHeight,backgroundColor:'white',justifyContent:'flex-start',alignContent:"center"}}>
                        <View style={{flex:0.4}}>
                            <View style={{flex:0.20,marginTop:15}}>
                            <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold"}}>Perfil</Text>
                            </View>
                            <View style={{flex:0.20,marginLeft:15}}>
                            <Text style={{color:'black',fontSize:16}}>Nickname: {profiledata.Nickname}</Text>
                            </View>
                            <View style={{flex:0.20,marginLeft:15}}>
                            <Text style={{color:'black',fontSize:16}}>Email: {profiledata.Email}</Text>
                            </View>
                            <View style={{flex:0.4,marginLeft:15}}>
                            <Text style={{color:'black',fontSize:16}}>Descripcion: {profiledata.Descripcion}</Text>
                            </View>
                        </View>
                    <View style={{flex:0.6}}>
                        <View style={{flex:0.2,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>cuentas de juego  </Text>
                    </View>
                    <Text style={{borderBottomWidth:1}}>League of legends</Text>
                    <View style={{flex:0.4,flexDirection:"row"}}>
                      <View style={{flex:0.3}}>
                        <Text style={{borderBottomWidth:1,alignSelf:'center'}}>Nickname</Text>
                        <Text style={{alignSelf:'center',marginTop:25}}>{text}</Text>
                      </View>
                      <View style={{flex:0.35}}>
                        {viewSoloq}
                      </View>
                      <View style={{flex:0.35}}>
                      {viewflexQ}
                      </View>
                    </View>
                    <Text style={{borderBottomWidth:1}}>TeamFight Tactics</Text>
                    {viewtft}
                        </View>
                    </View>
                </View>
            </Modal>
        );
}
}