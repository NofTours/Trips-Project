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
    public class AdminController : ApiController
    {
        // GET: api/Admin
        public List<CommonEquipment> Get()
        {
            return AdminManager.GetEquipment();
        }
        // POST: api/Trips
        public Boolean Post([FromBody]CommonSite site)
        {
            return AdminManager.AddSite(site);
        }

        // GET: api/Admin/5
        //public Boolean Get(CommonSite site)
        //{
        //    return true;
        //}

        //POST: api/Admin
        [Route("api/Admin/ViewTrips")]
        [HttpPost]
        public List<CommonTrip> ViewTrips([FromBody]DateTime[] dates)
        {
            return AdminManager.viewTrips(dates);
        }

        // PUT: api/Admin/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Admin/5
        public void Delete(int id)
        {
        }
    }
}
