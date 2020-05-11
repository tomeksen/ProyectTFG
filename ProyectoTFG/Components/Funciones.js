import {runCrypto} from '../Components/Encrypter';

export function registrarUsu(pass,corr,nck){
    runCrypto(pass,corr,nck,"");
  }