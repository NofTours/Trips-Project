using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
using DataLayer;
namespace BusinessLayer
{
    public static class SiteManager
    {
        public static List<CommonSite> RetrieveSites()
        {
            List<CommonSite> sites = new List<CommonSite>();
            sites.AddRange(DataSite.RetrieveSites());               
            return sites;
        }

        public static List<CommonSite> RetrieveSitesBySearch(Search paramsList)
        {
            List<CommonSite> sites = new List<CommonSite>();
            sites.AddRange(DataSite.RetrieveSitesBySearch(paramsList));
            return sites;
        }

    }
}
