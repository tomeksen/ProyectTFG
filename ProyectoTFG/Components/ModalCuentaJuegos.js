import React,{Component} from 'react';
import{View,Text,StyleSheet,Dimensions,Modal,TextInput} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Icon,Input,Button,ButtonGroup} from 'react-native-elements';
import {CrearCuentaUsuario} from '../Components/ConexionBBDD';

const webViewHeight=Dimensions.get('window').height - 50;
export class CuentaForms extends Component{
    constructor(props){
        super(props);
        this.state = {
            nombreCuenta:"",
            juegoId:"",
            selectedIndex:0
        }
    }
    updateIndex

    handleClose=async()=>{
        return this.props.onClose();
    }

    render(){
        const {showModal} = this.props;

        let view = this.state.selectedIndex==0 ? (
            <View style={{ flex: 1}}>
              <View style={{flex:0.25,marginTop:'15%',marginLeft:14,marginRight:14}}>
                    <Input
                        containerStyle={{marginTop:30}}
                        maxLength={16}
                        label="Nombre de Juego"
                        placeholder={this.state.nombreCuenta}
                        value={this.state.nombreCuenta}
                        onChangeText={value=>this.setState({nombreCuenta:value})}
                    />
                </View>
                <View style={{flex:0.25,marginTop:'25%',marginLeft:14,marginRight:14}}>
                    <Button
                        title="Añadir Cuenta"
                        onPress={()=>{CrearCuentaUsuario(global.idUsuario,1,this.state.nombreCuenta), this.handleClose}}
                     />
                </View>
            </View>
          ) : (
            <View style={{ flex: 1 }}>
              <View style={{flex:0.25,marginTop:'15%',marginLeft:14,marginRight:14}}>
                    <Input
                        containerStyle={{marginTop:30}}
                        label="Nombre de Juego"
                        placeholder={this.state.nombreCuenta}
                        value={this.state.nombreCuenta}
                        onChangeText={value=>this.setState({nombreCuenta:value})}
                    />
                </View>
                <View style={{flex:0.25,marginTop:'25%',marginLeft:14,marginRight:14}}>
                    <Button
                        title="Añadir Cuenta"
                        onPress={()=>{CrearCuentaUsuario(global.idUsuario,3,this.state.nombreCuenta), this.handleClose}}
                     />
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
                        centerComponent={{text:'Edit Profile', style:{color:'#fff'}}}
                        centerContainerStyle={{marginTop:-18,alignSelf:'center'}}
                    />
                    <View style={{height:webViewHeight,backgroundColor:'white',justifyContent:'flex-start',alignContent:"center"}}>
                        <ButtonGroup
                            buttons={['League of Legends','TeamFight Tactics']}
                            selectedIndex={this.state.selectedIndex}
                            onPress={(value)=>{this.setState({selectedIndex:value})}}
                            containerStyle={{height:30,marginTop:60}}
                        />
                        {view}
                    </View>
                </View>
            </Modal>
        );
}
}