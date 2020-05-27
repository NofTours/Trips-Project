using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CommonLayer;
using BusinessLayer;
namespace NofToursServer.Controllers
{
    public class CalendarController : ApiController
    {
        // GET: api/Calendar
        public List<DateTime> Get()
        {
            return CalendarManager.GetDates();
        }

        // GET: api/Calendar/5
        public List<DateTime> Get(int id)
        {
            return CalendarManager.GetDates();
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
