using BBDD.Models;
using BBDD.Repositorys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BBDD.Controllers
{
    public class CuentasJuegoController : ApiController
    {
        // GET: api/CuentasJuego
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/CuentasJuego/5
        public List<CuentaJuego> Get(int idusu)
        {
            var repo = new CuentaJuegoRepository();
            List<CuentaJuego> respuesta = repo.getCuentaUser(idusu);
            return respuesta;
        }

        // POST: api/CuentasJuego
        public string Post([FromBody]CuentaJuego cuentaJuego)
        {
            var repo = new CuentaJuegoRepository();
            string respuesta = repo.Save(cuentaJuego);
            return respuesta;
        }

        // PUT: api/CuentasJuego/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/CuentasJuego/5
        public void Delete(int id)
        {
        }
    }
}
