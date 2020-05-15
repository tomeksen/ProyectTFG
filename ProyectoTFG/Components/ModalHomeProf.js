import React,{Component} from 'react';
import{View,Text,StyleSheet,Dimensions,Modal,Share} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Button,Icon} from 'react-native-elements';

const webViewHeight=Dimensions.get('window').height - 56;

export class ModalProf extends Component{
    constructor(props){
        super(props);
    }

    handleClose=async()=>{
        return this.props.onClose();
    }

    render(){
        const {showModal,profiledata} = this.props;
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
                        centerComponent={{text:'noticias', style:{color:'#fff'}}}
                        centerContainerStyle={{marginTop:-18,alignSelf:'center'}}
                        rightComponent={
                            <Button
                            icon={{name:'share',
                            size:20,
                            color:'white'            
                            }}
                            >
                            </Button>
                        }
                        rightContainerStyle={{marginTop:-18,alignSelf:'center'}}
                    />
                    <View style={{height:webViewHeight,backgroundColor:'white',justifyContent:'flex-start',alignContent:"center"}}>
                        <View style={{flex:0.4}}>
                            <Text style={{color:'black',fontSize:20}}>{profiledata.Nickname}</Text>
                        </View>
                        <View style={{flex:0.6}}>

                        </View>
                    </View>
                </View>
            </Modal>
        );
}
}