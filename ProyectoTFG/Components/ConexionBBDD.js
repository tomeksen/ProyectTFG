import { Alert } from 'react-native';
const url= 'http://10.0.2.2:44377/';

//Función conseguir contraseña
export async function getidWithEmail(Email){
  let response= await fetch(url+'api/Usuario?Email='+Email);
  let responseJson= await response.json();
  if(responseJson!=null){
    id= responseJson.UsuarioId;
    return id;
  }else{
    Alert.alert('no existe ese correo');
  }
}
export async function getnickydescWithEmail(Email){
  let response= await fetch(url+'api/Usuario?Email='+Email);
  let responseJson= await response.json();
  if(responseJson!=null){
    nick= responseJson.Nickname;
    Descr= responseJson.Descripcion;
    return {
      first: nick,
      second:Descr
  }
  }else{
    Alert.alert('no existe ese correo');
  }
}
//funcion conseguir contraseña con user
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
//Funcion que obtiene cuentas de usuario
export async function getidWithid(id){
  let response= await fetch(url+'api/CuentasJuego?idusu='+id);
  let responseJson= await response.json();
  if(responseJson!=null){
    return responseJson;
  }else{
    Alert.alert('no existe ese correo');
  }
}
//Función que Registra Una Cuenta Usuario
export async function CrearCuentaUsuario(idUsuario,idJuego,Nombre){
  fetch(url+'api/CuentasJuego', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      NombreCuenta:Nombre,
      JuegoId: idJuego,
      UsuarioId: idUsuario,
    })
  })
  .catch(error =>console.error('Error: ',error))
  .then(response=> console.log('Success: '+json.stringify(response)))
  ;
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
//funcion cambiar profile
export async function CambiarProf(id,correo,descrip,nick){
  await fetch(url+'api/Usuario/5', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      UsuarioId:id,
      Email:correo,
      Descripcion:descrip,
      Nickname:nick

    })
  })
  .catch(error =>console.error('Error: ',error))
  .then(response=> console.log('Success: '+json.stringify(response)))
  ;
}