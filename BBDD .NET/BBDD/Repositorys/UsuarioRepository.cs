using BBDD.Models;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;

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
    }
}