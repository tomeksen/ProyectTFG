using BBDD.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MySql.Data.MySqlClient;
using System.Diagnostics;

namespace BBDD.Repositorys
{
    public class JuegosRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "server=localhost;Database=gareon;Uid=root;password='';";
            MySqlConnection con = new MySqlConnection(connString);
            return con;
        }
        internal List<Juegos> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from juego";
            try
            {
                con.Open();
                MySqlDataReader reader = command.ExecuteReader();
                Juegos game = null;
                List<Juegos> games = new List<Juegos>();
                while (reader.Read())
                {
                    Debug.WriteLine("recuperado: " + reader.GetInt32(0) + " ," + reader.GetString(1) );
                    game = new Juegos(reader.GetInt32(0), reader.GetString(1));
                    games.Add(game);
                }
                return games;
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