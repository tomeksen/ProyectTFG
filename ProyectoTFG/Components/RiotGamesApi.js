import { Alert } from "react-native";

const url= 'https://euw1.api.riotgames.com/';
const api='?api_key=RGAPI-486c6b43-c0cc-4d70-9a20-9ecb82e7fc05';

export async function getIdWithName(name){
    let idWithname= await fetch(url+'lol/summoner/v4/summoners/by-name/'+name+api)
    let resultid= await idWithname.json();
    let id = resultid.id;
    let getplayerLeague = await fetch(url+'lol/league/v4/entries/by-summoner/'+id+api)
    let resultleague= await getplayerLeague.json();
    
    let soloq= resultleague[0]
    let flexq=resultleague[1]
    return{
        first: soloq,
        second: flexq
    }
}

export async function getTftAcc(name){
    let idWithname= await fetch(url+'tft/summoner/v1/summoners/by-name/'+name+api)
    let resultid= await idWithname.json();
    let id= resultid.id;
    let getplayerLeague = await fetch(url+'tft/league/v1/entries/by-summoner/'+id+api)
    let resultleague= await getplayerLeague.json();
    let tier = resultleague.tier;
    let rank= resultleague.rank;
    let wins= resultleague.wins;
    let losses=resultleague.losses;
    return{
        first:tier,
        second:rank,
        third: wins,
        four:losses
    }
}