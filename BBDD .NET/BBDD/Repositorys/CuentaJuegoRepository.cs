using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using BBDD.Models;
using MySql.Data.MySqlClient;
using System.Diagnostics;
using System.Globalization;

namespace BBDD.Repositorys
{
    public class CuentaJuegoRepository
    {
        private MySqlConnection Connect()
        {
            string connString = "server=localhost;Database=gareon;Uid=root;password='';";
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
        internal List<CuentaJuego> getCuentaUser(int idusu)
        {
            MySqlConnection con = Connect();
            MySqlCommand command = con.CreateCommand();
            command.CommandText = "select * from cuentajuegos where UsuarioId="+idusu+"";
            try
            {
                con.Open();
                MySqlDataReader reader = command.ExecuteReader();
                CuentaJuego cuenta = null;
                List<CuentaJuego> cuentas = new List<CuentaJuego>();
                while (reader.Read())
                {
                    Debug.WriteLine("recuperado: " + reader.GetInt32(0) + " ," + reader.GetInt32(1) + " ," + reader.GetString(2));
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
        /*internal CuentaJuego getWithEmail(int idUsu)
        {
            CuentaJuego usu = new CuentaJuego();
            using (GareonContext context = new GareonContext())
            {
                usu = context.CuentaJuegos.Where(x => x.UsuarioId == idUsu).FirstOrDefault();
            }
            return usu;
        }*/
        internal string Save(CuentaJuego cuentaJuego)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;

            List<CuentaJuego> cuentas = new List<CuentaJuego>();
            using (GareonContext context = new GareonContext())
            {
                cuentas = context.CuentaJuegos.ToList();
            }
            GareonContext context2 = new GareonContext();
            context2.CuentaJuegos.Add(cuentaJuego);
            context2.SaveChanges();
            return "El usuario se ha creado";
        }
        internal string Put(CuentaJuego cuenta)
        {
            CultureInfo cullInfo = new System.Globalization.CultureInfo("es-ES");
            cullInfo.NumberFormat.NumberDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            cullInfo.NumberFormat.PercentDecimalSeparator = ".";
            cullInfo.NumberFormat.CurrencyDecimalSeparator = ".";
            System.Threading.Thread.CurrentThread.CurrentCulture = cullInfo;
            using (GareonContext context = new GareonContext())
            {
                var existingUsu = context.CuentaJuegos.Where(s => s.UsuarioId == cuenta.UsuarioId).FirstOrDefault<CuentaJuego>();
                if (existingUsu != null)
                {
                    existingUsu.NombreCuenta = cuenta.NombreCuenta;
                    context.SaveChanges();
                }
                else
                {
                    return "No se ha encontrado";
                }
            }
            return "no ha funcionado";
        }
    }
}