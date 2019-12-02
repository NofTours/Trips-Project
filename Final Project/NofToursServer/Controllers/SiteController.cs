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
    public class SiteController : ApiController
    {
        // GET: api/Site
        public ICollection<CommonSite> Get()
        {
            return SiteManager.RetrieveSites();
        }

        // GET: api/Site/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Site
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Site/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Site/5
        public void Delete(int id)
        {
        }
    }
}
