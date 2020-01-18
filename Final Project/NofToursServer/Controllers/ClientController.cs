using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLayer;

namespace NofToursServer.Controllers
{
    public class ClientController : ApiController
    {
        // GET: api/Client
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Client/5
        public int Get(string email)
        {
            return UserManager.GetUserIdByEmail(email);
        }

        // POST: api/Client
        public int Post([FromBody]string email)
        {
            return UserManager.GetUserIdByEmail(email);
        }

        // PUT: api/Client/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Client/5
        public void Delete(int id)
        {
        }
    }
}
