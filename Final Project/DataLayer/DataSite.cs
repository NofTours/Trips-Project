using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
namespace DataLayer
{
    public static class DataSite
    {
        static dbEntities db = new dbEntities();
        public static List<CommonSite> RetrieveSites()
        {
            var sites = (from s in db.Sites select s).ToList<Sites>();           
            List<Sites> retrievedSites = new List<Sites>();
            List<CommonSite> siteList = new List<CommonSite>();
            retrievedSites.AddRange(sites);
            foreach (Sites site in retrievedSites)
            {
                siteList.Add(Mapper.SiteToCommon(site));
            }
            return siteList;
        }
    }
}
