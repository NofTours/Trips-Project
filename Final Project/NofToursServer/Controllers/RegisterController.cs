using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using BusinessLayer;
using CommonLayer;

namespace NofToursServer.Controllers
{
    public class RegisterController : ApiController
    {
   

        // GET: api/Register/5
        public void Get(int id)
        {
        }


        
        // POST: api/Register 
        public Boolean Post([FromBody]CommonClient client)
        {
            return UserManager.Register(client);           
        }

        

        // PUT: api/Register/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Register/5
        public void Delete(int id)
        {
        }
    }
}
