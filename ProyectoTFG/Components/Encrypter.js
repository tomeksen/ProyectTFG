import * as Crypto from 'expo-crypto';
import {getPassWithUser,CrearUsuario,ComprobarEmail} from './ConexionBBDD';
import { Alert } from 'react-native';


export async function runCrypto(PassARegistrar,Correo,Nick,desc) {
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    PassARegistrar
  );
  if(ComprobarEmail(Correo)=='true'){
  CrearUsuario(Correo,digest,Nick,desc);
  }else{
    Alert.alert('el correo esta en uso')
  }
}

export async function CryptoComprobador(palabraComprobar,Email) {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      palabraComprobar
    );
    Alert.alert('Digest: ', digest);
    hola = getPassWithUser(Email);
  }
