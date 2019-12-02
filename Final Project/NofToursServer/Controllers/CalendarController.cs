using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CommonLayer;
namespace NofToursServer.Controllers
{
    public class CalendarController : ApiController
    {
        // GET: api/Calendar
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Calendar/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Calendar
        public void Post([FromBody]DateTime date)
        {
        }

        // PUT: api/Calendar/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Calendar/5
        public void Delete(int id)
        {
        }
    }
}
