using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BBDD.Models
{
    public class CuentaJuego
    {
        public CuentaJuego() { }
        public CuentaJuego(string nombrecuenta,int juegoId,int usuarioId) {
            NombreCuenta = nombrecuenta;
            JuegoId = juegoId;
            UsuarioId = usuarioId;
        }
        public int UsuarioId { get; set; }
        public int JuegoId { get; set; }
        public string NombreCuenta { get; set; }

        public Usuario Usuario { get; set; }
        public Juegos Juegos { get; set; }

    }
}