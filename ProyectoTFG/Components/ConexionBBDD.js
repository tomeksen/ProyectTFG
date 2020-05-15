import { Alert } from 'react-native';
const url= 'http://10.0.2.2:44377/';
//Función conseguir contraseña
export async function getPassWithUser(Email)
{
pass='';
correo='';
let response= await fetch(url+'api/Usuario?Email='+Email);
let responseJson= await response.json();
if(responseJson!=null){
  pass= responseJson.Password;
  correo= responseJson.Email;
  return {
    first: pass,
    second: correo
  };
}else{
  Alert.alert('no existe ese correo');
}
}
//funcion obtener usuarios
export async function ObtenerUsus(){
  let response= await fetch(url+'api/Usuario');
  let responseJson= await response.json();
  if(responseJson!=null){
    return responseJson;
  }else{
    Alert.alert('no hay ninguno')
  }
}

//Función que Registra un usuario
export function CrearUsuario(Correo,contra,Nick,desc){
    fetch(url+'api/Usuario', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          UsuarioId: null,
          Email: Correo,
          Password: contra,
          Nickname: Nick,
          Amigos: null,
          Descripcion: desc,
          CuentaJuegos: null,
        })
      })
      .catch(error =>console.error('Error: ',error))
      .then(response=> console.log('Success: '+json.stringify(response)))
      ;
}
//funcion para ver que un correo no este repetido
/*export async function ComprobarEmail(Email)
{
  usuario=[];
await fetch(url+'api/Usuario?Email='+Email)
.then((Response)=>Response.json())
.then(data=>{
  usuario=data;
})
.catch((error)=>{
    console.error(error);
})
if(usuario.length==0){
  return true;
}else{
  return false;
}
}*/
export async function ComprobarEmail(Email)
{
let response= await fetch(url+'api/Usuario?Email='+Email);
let responseJson= await response.json();
if(responseJson==null){
  return true;
}else{
  Alert.alert('El correo esta en uso');
}
}