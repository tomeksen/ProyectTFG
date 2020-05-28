import { Alert } from "react-native";

const url= 'https://euw1.api.riotgames.com/';
const api='?api_key=RGAPI-1de0559f-1092-4260-a17a-7cc8949646dc';

export async function getIdWithName(name){
    let idWithname= await fetch(url+'lol/summoner/v4/summoners/by-name/'+name+api)
    let resultid= await idWithname.json();
    let id = resultid.id;
    let getplayerLeague = await fetch(url+'lol/league/v4/entries/by-summoner/'+id+api)
    let resultleague= await getplayerLeague.json();
    
    if(resultleague[0]!=null&&resultleague[1]!=null){
    let soloq= resultleague[0]
    let flexq=resultleague[1]
    return{
        first: soloq,
        second: flexq
    }
}else{
    let soloq= resultleague[0]
    return{
        first: soloq,
        second: null
    }
}
}

export async function getTftAcc(name){
    let idWithname= await fetch(url+'tft/summoner/v1/summoners/by-name/'+name+api)
    let resultid= await idWithname.json();
    let id= resultid.id;
    let gettftLeague = await fetch(url+'tft/league/v1/entries/by-summoner/'+id+api)
    let resulttftleague= await gettftLeague.json();
    if(resulttftleague[0]!=null){
    let tft=resulttftleague[0]
    let tier = tft.tier;
    let rank= tft.rank;
    let wins= tft.wins;
    let losses=tft.losses;
    return{
        first:tier,
        second:rank,
        third: wins,
        four:losses
    }
    }else{
        return null
    }
}