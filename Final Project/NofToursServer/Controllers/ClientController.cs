using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusinessLayer;
using CommonLayer;

namespace NofToursServer.Controllers
{
    public class ClientController : ApiController
    {
        [Route("api/client/GetUserById")]
        [HttpGet]
        // GET: api/Client
        public CommonClient GetUserById(int id)
        {
            return UserManager.GetUserById(id);
        }

        // GET: api/Client/5
        public CommonClient Get(string email)
        {
            return  UserManager.GetUserByEmail(email);
        }

        // POST: api/Client
        public CommonClient Post([FromBody]string email)
        {
            return UserManager.GetUserByEmail(email);
        }

        [Route("api/Client/SaveAddressAndNum")]
        [HttpPost]
        public Boolean SaveAddressAndNum([FromBody]Data data)
        {
            return UserManager.SaveAddressAndNum(data);
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
