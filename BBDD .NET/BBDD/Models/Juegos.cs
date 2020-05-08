using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BBDD.Models
{
    public class Juegos
    {
        public Juegos() { }
        public Juegos(int juegoId,string nombrejuego)
        {
            JuegoId = juegoId;
            NombreJuego = nombrejuego;
        }
        public int JuegoId { get; set; }
        public string NombreJuego { get; set; }
        public List<CuentaJuego> CuentaJuegos { get; set; }
    }
}