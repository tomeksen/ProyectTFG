using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BBDD.Models;
using BBDD.Repositorys;

namespace BBDD.Controllers
{
    public class UsuarioController : ApiController
    {
        // GET: api/Usuario
        public IEnumerable<Usuario> Get()
        {
            var repo = new UsuarioRepository();
            List<Usuario> usus = repo.Retrieve();
            return usus;
        }


        // GET: api/Usuario/5
        public Usuario GetUser(string Email)
        {
            var repo = new UsuarioRepository();
            Usuario usu = repo.getWithEmail(Email);
            return usu;
        }
        /*public IEnumerable<UsuarioDTO> GetUsuariosDTO()
        {
            var repo = new UsuarioRepository();
            List<UsuarioDTO> usus = repo.GetUsuariosDTO();
            return usus;
        }*/
        public UsuarioDTO getDTOUser(string corr)
        {
            var repo = new UsuarioRepository();
            UsuarioDTO usu = repo.GetUsuarioDTO(corr);
            return usu;
        }
        // POST: api/Usuario
        public string Post([FromBody]Usuario usuario)
        {
            var repo = new UsuarioRepository();
            string respuesta = repo.Save(usuario);
            return respuesta;
        }

        // PUT: api/Usuario/5
        public string Put([FromBody]Usuario usuario)
        {
            var repo = new UsuarioRepository();
            string respuesta = repo.Put(usuario);
            return respuesta;
        }

        // DELETE: api/Usuario/5
        public void Delete(int id)
        {
        }
    }
}
