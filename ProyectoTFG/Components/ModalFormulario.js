import React,{Component} from 'react';
import{View,Text,StyleSheet,Dimensions,Modal,TextInput} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Icon,Input,Button} from 'react-native-elements';

const webViewHeight=Dimensions.get('window').height - 56;

export class ModalForms extends Component{
    constructor(props){
        super(props);
        this.state = {
            nickname:"",
            email: global.correoUsu,
            Descripcion:"",
        }
    }

    handleClose=async()=>{
        return this.props.onClose();
    }
    render(){
        const {showModal} = this.props;
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
                        <View style={{flex:0.25}}>
                            <Input
                                containerStyle={{marginTop:30}}
                                label="Nickname"
                                placeholder={this.state.nickname}
                                onChangeText={value=>this.setState({nickname:value})}
                            />
                        </View>
                        <View style={{flex:0.25}}>
                            <Input
                            label="Email"
                             placeholder={this.state.email}
                             onChangeText={value=>this.setState({email:value})}
                            />
                        </View>
                        <View style={{flex:0.25}}>
                            <Text style={{fontSize:17,fontWeight:'bold',marginLeft:14}}>Descripcion:</Text>
                            <TextInput
                                style={{borderColor:'gray',borderWidth:1,marginLeft:14,marginRight:14}}
                                multiline={true}
                                numberOfLines={4}
                                maxLength={120}
                                placeholder={this.state.Descripcion}
                                onChangeText={value=>this.setState({Descripcion:value})}
                                
                            />
                        </View>
                        <View>
                            <Button
                                title="Cambiar Perfil"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        );
}
}