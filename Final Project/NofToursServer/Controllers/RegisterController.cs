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
        string[] users = { "User1 From Server - GET method",
                           "User2 From Server - GET method",
                           "User3 From Server - GET method" };

        string[] usersPost = { "User1 From Server - POST method",
                               "User2 From Server - POST method",
                               "User3 From Server - POST method" };

        // GET: api/Register
        public IEnumerable<string> Get()
        {
            return users;
        }

        // GET: api/Register/5
        public string Get(int id)
        {
            id--;
            if (id >= 0 && id < 3)
            {
                return users[id];
            }
            return users[0];
        }

        // GET: api/Register/5
        public string Get(string value)
        {
           return value.ToUpper();
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
