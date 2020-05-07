using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BBDD.Models
{
    public class Usuario
    {
        public int IdUsuario { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Nickname { get; set; }
        public string Amigos { get; set; }
        public string Descripcion { get; set; }
        public Usuario()
        {

        }
        public Usuario(int idUsuario, string email, string password, string nickname, string amigos, string descripcion)
        {
            IdUsuario = idUsuario;
            Email = email;
            Password = password;
            Nickname = nickname;
            Amigos = amigos;
            Descripcion = descripcion;
        }

    }
}