using BBDD.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Globalization;
using System.Runtime.InteropServices.ComTypes;

namespace BBDD.Repositorys
{
    public class UsuarioRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "server=localhost;Database=gareon;Uid=root;password='';";
            MySqlConnection con = new MySqlConnection(connString);
            return con;
        }
        internal List<Usuario> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from usuarios";
            try
            {
                con.Open();
                MySqlDataReader reader = command.ExecuteReader();
                Usuario usu = null;
                List<Usuario> usuarios = new List<Usuario>();
                while (reader.Read())
                {
                    Debug.WriteLine("recuperado: " + reader.GetInt32(0) + " ," + reader.GetString(1) + " ," + reader.GetString(2) + " ," + reader.GetString(3) + " ," + reader.GetString(5));
                    usu = new Usuario(reader.GetInt32(0), reader.GetString(1), reader.GetString(2), reader.GetString(3), null, reader.GetString(5));
                    usuarios.Add(usu);
                }
                return usuarios;
            }
            catch (MySqlException e)
            {
                Console.WriteLine(e.Message);
                Debug.WriteLine("error de conexion");
                return null;
            }
        }
        internal Usuario getWithEmail(string correo)
        {
            Usuario usu = new Usuario();
            using (GareonContext context=new GareonContext())
            {
                usu = context.Usuarios.Where(x => x.Email == correo).FirstOrDefault();
            }
            return usu;
        }
        internal List<UsuarioDTO> RetrieveDTO()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select Email,Nickname,Descripcion from usuarios";
            try
            {
                con.Open();
                MySqlDataReader reader = command.ExecuteReader();
                UsuarioDTO usu = null;
                List<UsuarioDTO> usuariosDTO = new List<UsuarioDTO>();
                while (reader.Read())
                {
                    Debug.WriteLine("recuperado: " + reader.GetString(0) + " ," + reader.GetString(1)+" ,"+reader.GetString(2));
                    usu = new UsuarioDTO(reader.GetString(0), reader.GetString(1),reader.GetString(2));
                    usuariosDTO.Add(usu);
                }
                return usuariosDTO;
            }
            catch (MySqlException e)
            {
                Console.WriteLine(e.Message);
                Debug.WriteLine("error de conexion");
                return null;
            }
        }
        public UsuarioDTO ToDTO(Usuario usuario)
        {
            return new UsuarioDTO(usuario.Email, usuario.Nickname,usuario.Descripcion);
        }
        internal List<UsuarioDTO> GetUsuariosDTO()
        {
            List<UsuarioDTO> usus = new List<UsuarioDTO>();
            using (GareonContext context=new GareonContext())
            {
                usus = context.Usuarios.Select(x => ToDTO(x)).ToList();
            }
            return usus;
        }
        internal UsuarioDTO GetUsuarioDTO(string correo)
        {
            UsuarioDTO usu = new UsuarioDTO();
            using (GareonContext context= new GareonContext())
            {
                usu = context.Usuarios.Select(x=> ToDTO(x)).Where(y => y.Email == correo).FirstOrDefault();
            }
            return usu;
        }
        internal string Save(Usuario usu)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            List<Usuario> usuarios = new List<Usuario>();
            using (GareonContext context = new GareonContext())
            {
                usuarios = context.Usuarios.ToList();
            }
            for(int i=0;i< usuarios.Count; i++)
            {
                if(usuarios[i].Email== usu.Email)
                {
                    return "Este correo esta usado";
                }
                if (usuarios[i].Nickname == usu.Nickname)
                {
                    return "este nickname esta en uso";
                }
            }
            GareonContext context2 = new GareonContext();
            context2.Usuarios.Add(usu);
            context2.SaveChanges();
            return "El usuario se ha creado";
        }
        internal string Put(Usuario usu)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;
            using(GareonContext context= new GareonContext())
            {
                var existingUsu = context.Usuarios.Where(s => s.UsuarioId == usu.UsuarioId).FirstOrDefault<Usuario>();
                if (existingUsu != null)
                {
                    existingUsu.Email = usu.Email;
                    existingUsu.Descripcion = usu.Descripcion;
                    existingUsu.Nickname = usu.Nickname;
                    context.SaveChanges();
                }
                else
                {
                    return "No se ha encontrado";
                }
            }
            return "no ha funcionado";
        }
        /*internal string PutAmigos(Usuario usu)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;
            using (GareonContext context = new GareonContext())
            {
                var existingUsu = context.Usuarios.Where(s => s.UsuarioId == usu.UsuarioId).FirstOrDefault<Usuario>();
                if (existingUsu != null)
                {
                    existingUsu.Amigos = usu.Amigos;
                    context.SaveChanges();
                }
                else
                {
                    return "No se ha encontrado";
                }
            }
            return "no ha funcionado";
        }*/
    }
}