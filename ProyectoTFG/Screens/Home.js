import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert,FlatList,ActivityIndicator} from 'react-native';
import {useEffect} from 'react';
import { Input,Button,ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../Components/ScalingComps';
import {ObtenerUsus} from '../Components/ConexionBBDD';
import {ModalProf} from '../Components/ModalHomeProf';
export default class Home extends Component {
  
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = { 
      Descripcion:"",
      data:[],
      nickname:"",
      isLoading:true,
      setModalVisible:false,
      modalProfileData:{}
    }
    this.getusers();
  }

  handleItemDataOnPress=async(Profiledata)=>{
    this.setState({
      setModalVisible:true,
      modalProfileData: Profiledata
    })
  }

  handleModalClose=async()=>{
    this.setState({
      setModalVisible:false,
      modalProfileData:{}
    })

  }

getusers= async ()=>{
  let response= await fetch('http://10.0.2.2:44377/api/Usuario');
  let responseJson= await response.json();
  this.setState({
    data: responseJson,
    isLoading:false
  })
}


render() {
  let view = this.state.isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
      <Text style={{marginTop: 10}} children="Please Wait.." />
    </View>
  ) : (
    <FlatList
              style={{alignSelf:"center",width:'100%',backgroundColor:'#645754'}}
              data={this.state.data}
              renderItem={({item}) => {
              if(item.Email!=global.correoUsu){
                return <ListItem
                containerStyle={{flex:1,backgroundColor:'#645754'}}
                title={item.Nickname}
                subtitle={item.Descripcion}
                bottomDivider
                onPress={()=>this.handleItemDataOnPress(item)}
                />
              }
            }
              }
              keyExtractor={(item,index)=> index.toString()}
          /> 
  )
    return (
      <View style={{flex:1,alignItems:"center"}}>
        <View style={{width:'100%'}}>
          {view}
        </View>
        <ModalProf
          showModal={this.state.setModalVisible}
          profiledata={this.state.modalProfileData}
          onClose={this.handleModalClose}
        />
      </View>
    )
    
    }
  }
  


