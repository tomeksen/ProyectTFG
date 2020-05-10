import React, { Component } from 'react';
const url= 'http://10.0.2.2:44377/';
const pass='';

//Función conseguir contraseña
function getPassWithUser(Email)
{
pass='';
fetch(url+'api/Usuario?Email='+Email)
.then((Response)=>Response.json())
.then(data=>{
    pass= data[0].Password;
})
.catch((error)=>{
    console.error(error);
})
return pass;
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
      .then(response=> console.log('Success: ', response))
      ;
}
//funcion para ver que un usuario no este repetido
export function ComprobarEmail(Email)
{
  comprobador=false;
fetch(url+'api/Usuario?Email='+Email)
.then((Response)=>Response.json())
.then(data=>{
  if(data[0]==""){
    
  }else{
    comprobador=true;
  }
})
.catch((error)=>{
    console.error(error);
})
return comprobador;
}
