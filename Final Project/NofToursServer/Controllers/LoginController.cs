using BusinessLayer;
using CommonLayer;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NofToursServer.Controllers
{
    public class LoginController : ApiController
    {
        // POST: api/Login
        public Boolean Post([FromBody] CommonClient client )
        {
            //return UserManager.Login(email, password);
            return UserManager.Login(client.Email, client.Password);
        }
    }
}
