import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert,Image,FlatList,SafeAreaView} from 'react-native';
import {useEffect} from 'react';
import { Input,Button,ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { scale } from '../Components/ScalingComps';
import {orderBy} from 'lodash';


export default class Noticias extends Component {
  
    static navigationOptions = {
        header: null
    };
  
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
        isError:false,
        data:[]
    }
    this.getNews();
  }
  getNews = async () => {
        let articles= await fetch('http://newsapi.org/v2/everything?'+'q=juegos&'+'language=es&'+'pageSize=10&'+'apiKey=b51e135495fe48b6ba1fc1e575f9278d')
        let result= await articles.json()
        articles=null;
        let iwant= orderBy(result.articles,'publisedAt','desc');
        this.setState({data: iwant})
   }

//<Text style={{fontSize:15,marginTop:25,color:'blue'}} >Bienvenido a Noticias</Text>

render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize:20,marginTop:20}}>Noticias del dia</Text>
        <FlatList
            style={{alignSelf:"center",width:'100%',backgroundColor:'#645754'}}
            data={this.state.data}
            renderItem={({item}) => 
            <ListItem
            containerStyle={{flex:1,backgroundColor:'#645754'}}
            title={item.title}
            leftAvatar={{size:"large",source:{uri:item.urlToImage}}}
            bottomDivider
            />

        }
        keyExtractor={(item,index)=> index.toString()}
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
    backgroundColor: "#645754",
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