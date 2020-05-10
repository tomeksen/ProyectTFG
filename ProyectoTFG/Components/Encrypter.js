import * as Crypto from 'expo-crypto';
import {getPassWithUser} from './ConexionBBDD';

export async function runCrypto(PassARegistrar,Correo,contra,Nick,desc) {
  const digest = await Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    PassARegistrar
  );
  Alert.alert('Digest: ', digest);
}
export async function CryptoComprobador(palabraComprobar,Email) {
    const digest = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      palabraComprobar
    );
    Alert.alert('Digest: ', digest);
    hola = getPassWithUser(Email);
  }
