using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BBDD.Models
{
    public class Usuario
    {
        public Usuario()
        {

        }
        public Usuario(int idUsuario, string email, string password, string nickname, string[] amigos, string descripcion)
        {
            UsuarioId = idUsuario;
            Email = email;
            Password = password;
            Nickname = nickname;
            Amigos = amigos;
            Descripcion = descripcion;
        }
        public int UsuarioId { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Nickname { get; set; }
        public string[] Amigos { get; set; }
        public string Descripcion { get; set; }
        public List<CuentaJuego> CuentaJuegos { get; set; }

    }
    public class UsuarioDTO
    {
        public UsuarioDTO()
        {

        }
        public UsuarioDTO( string email, string nickname, string descripcion)
        {
            Email = email;
            Nickname = nickname;
            Descripcion = descripcion;
        }
        public string Email { get; set; }
        public string Nickname { get; set; }
        public string Descripcion { get; set; }
    }
}