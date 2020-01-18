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
    public class TripsController : ApiController
    {
        // GET: api/Trips
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Trips/5
        public IEnumerable<CommonTrip> Get(string  email)
        {        
            return TripManager.RetrieveTripsByClient(email);
        }

        // POST: api/Trips
        public Boolean Post([FromBody]CommonTrip trip)
        { 
            return TripManager.AddTrip(trip);
        }

        // PUT: api/Trips/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Trips/5
        public void Delete(int id)
        {
        }
    }
}
