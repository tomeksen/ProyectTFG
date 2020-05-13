import React,{Component} from 'react';
import{View,Text,StyleSheet,Dimensions,Modal,Share} from 'react-native';
import { WebView } from 'react-native-webview';
import {Header,Button,Icon} from 'react-native-elements';

const webViewHeight=Dimensions.get('window').height - 56;

export class ModalForms extends Component{
    constructor(props){
        super(props);
    }

    handleClose=async()=>{
        return this.props.onClose();
    }
    handleShare = () => {
        const {url, title} = this.props.articleData;
        let message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`},
        );
    }
    render(){
        const {showModal,articleData} = this.props;
        const {url}= articleData;
        if(url!=undefined){
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
                            onPress={this.handleShare}
                            >
                            </Button>
                        }
                        rightContainerStyle={{marginTop:-18,alignSelf:'center'}}
                    />
                    <View style={{height:webViewHeight}}>
                        <WebView 
                        source={{uri: url}} 
                        style={{flex:1}}
                        onError={this.handleClose}
                        startInLoadingState
                        scalesPageToFit
                        />
                    </View>
                </View>
            </Modal>
        );
    }else{
        return null;
    }
}
}