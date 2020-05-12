import { Alert } from 'react-native';
import {orderBy} from 'lodash';

const newsapi = 'b51e135495fe48b6ba1fc1e575f9278d';
const url='http://newsapi.org/v2/top-headlines?'+'q=videogames&'+'country=us&'+'pageSize=10&'+'apiKey=b51e135495fe48b6ba1fc1e575f9278d';
/*export async function getNewsVideoGames(){
    let response= await fetch(url);
    let responseJson= await response.json();
    return responseJson;
}*/
export async function getNewsVideoGames() {
    try{
        let articles= await fetch(url)
        let result= await articles.json()
        articles=null;
        return orderBy(result.articles,'publisedAt','desc')
    }catch(error){
        throw error
    }
  }