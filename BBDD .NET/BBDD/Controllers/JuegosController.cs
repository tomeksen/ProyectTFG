﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BBDD.Controllers
{
    public class JuegosController : ApiController
    {
        // GET: api/Juegos
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Juegos/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Juegos
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Juegos/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Juegos/5
        public void Delete(int id)
        {
        }
    }
}
