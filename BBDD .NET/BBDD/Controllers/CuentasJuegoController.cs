using BBDD.Models;
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
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/CuentasJuego
        public void Post([FromBody]string value)
        {
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
