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
        //  POST: api/Site/GetSitesBySiteId/id

        [Route("api/Site/GetSitesBySiteId")]
        [HttpPost]
      
        public ICollection<CommonSite> GetSitesBySiteId([FromBody] int []id)
        {
            return SiteManager.RetrieveSitesById(id);
        }

        // GET: api/Site
        public ICollection<string> Get(int id)
        {
            return SiteManager.RetrieveCategories();
        }

        // POST: api/Site
        public ICollection<CommonSite> Post([FromBody] Search paramsList)
        {
            return SiteManager.RetrieveSitesBySearch(paramsList);         
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
