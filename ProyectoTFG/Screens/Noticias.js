import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert,Image,FlatList,SafeAreaView,ActivityIndicator} from 'react-native';
import {useEffect} from 'react';
import { Input,Button,ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../Components/ScalingComps';
import {orderBy} from 'lodash';
import {ModalComponent} from '../Components/Modal';

export default class Noticias extends Component {
  
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
        isError:false,
        data:[],
        setModalVisible:false,
        modalArticleData:{}
    }
    this.getNews();
  }

  handleItemDataOnPress=async(articleData)=>{
    this.setState({
      setModalVisible:true,
      modalArticleData: articleData
    })
  }
  handleModalClose=async()=>{
    this.setState({
      setModalVisible:false,
      modalArticleData:{}
    })

  }

  getNews = async () => {
        let articles= await fetch('http://newsapi.org/v2/everything?'+'q=juegos&'+'language=es&'+'pageSize=30&'+'apiKey=b51e135495fe48b6ba1fc1e575f9278d')
        let result= await articles.json()
        articles=null;
        let iwant= orderBy(result.articles,'publisedAt','desc');
        this.setState({data: iwant, isLoading:false})
   }

//<Text style={{fontSize:15,marginTop:25,color:'blue'}} >Bienvenido a Noticias</Text>

render() {
  let view = this.state.isLoading ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator animating={this.state.isLoading} color="#00f0ff" />
      <Text style={{marginTop: 10}} children="Please Wait.." />
    </View>
  ) : (
    <FlatList
            style={{alignSelf:"center",width:'100%',backgroundColor:'#3D5F8A'}}
            data={this.state.data}
            renderItem={({item}) => 
            <ListItem
            containerStyle={{flex:1,backgroundColor:'#3D5F8A'}}
            title={item.title}
            leftAvatar={{size:"large",source:{uri:item.urlToImage}}}
            bottomDivider
            topDivider
            onPress={()=>this.handleItemDataOnPress(item)}
            />

        }
        keyExtractor={(item,index)=> index.toString()}
        /> 
  )
    return (
      <View style={styles.container}>
        <Text style={{textAlign:"center",fontSize:25,fontWeight:"bold",marginTop:5}}>Noticias del dia</Text>
        <View style={{flex:1,width:'100%',margin:15,marginBottom:0}}>
          {view}
        </View>
          <ModalComponent
          showModal={this.state.setModalVisible}
          articleData={this.state.modalArticleData}
          onClose={this.handleModalClose}
          />
      </View>
    )
    
    }
  }
  



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#5EA1F6",
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