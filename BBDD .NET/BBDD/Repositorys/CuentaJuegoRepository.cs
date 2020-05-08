using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BBDD.Models;
using MySql.Data.MySqlClient;
using System.Diagnostics;

namespace BBDD.Repositorys
{
    public class CuentaJuegoRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "server=localhost;Database=gareon;Uid=root;password'';";
            MySqlConnection con = new MySqlConnection(connString);
            return con;
        }
        internal List<CuentaJuego> Retrieve()
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from cuentajuegos";
            try
            {
                con.Open();
                MySqlDataReader reader = command.ExecuteReader();
                CuentaJuego cuenta = null;
                List<CuentaJuego> cuentas = new List<CuentaJuego>();
                while (reader.Read())
                {
                    Debug.WriteLine("recuperado: " + reader.GetInt32(0) + " ," + reader.GetInt32(1) +" ,"+ reader.GetString(2));
                    cuenta = new CuentaJuego(reader.GetString(2), reader.GetInt32(1), reader.GetInt32(0));
                    cuentas.Add(cuenta);
                }
                return cuentas;
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