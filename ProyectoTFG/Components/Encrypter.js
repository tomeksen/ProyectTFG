import * as Crypto from 'expo-crypto';
import {getPassWithUser,CrearUsuario,ComprobarEmail} from './ConexionBBDD';
import { Alert } from 'react-native';


export async function runCrypto(PassARegistrar,Correo,Nick,desc) {
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    PassARegistrar
  );
  if(await ComprobarEmail(Correo)){
    CrearUsuario(Correo, digest, Nick, desc);
    return true;
  }else{
  }
}

export async function CryptoComprobador(palabraComprobar,Email) {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      palabraComprobar
    );
    var todos = getPassWithUser(Email);
    getcorreo=(await todos).second;
    getpass=(await todos).first;
    if(getcorreo==''){
      Alert.alert('el correo no es valido');
    }else if(getcorreo==Email){
      if(getpass==digest){
        Alert.alert('se ha logueado correctamente')
        return 'true';
      }else{
        Alert.alert('la contraseña es incorrecta')
      }
    }
  }
