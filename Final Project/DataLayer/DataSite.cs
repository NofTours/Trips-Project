using System;
using System.Collections.Generic;
using System.Diagnostics;
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

        public static List<CommonSite> RetrieveSitesBySearch(Search paramsList)
        {
            List<Sites> sites=new List<Sites>();
            if (paramsList.Area != "none" && paramsList.Category != "none")
                sites = (from s in db.Sites where s.Area == paramsList.Area && s.Category == paramsList.Category select s).ToList<Sites>();
            else if (paramsList.Area != "none")
                sites = (from s in db.Sites where s.Area == paramsList.Area select s).ToList<Sites>();
            else if(paramsList.Category != "none")
                sites = (from s in db.Sites where s.Category == paramsList.Category select s).ToList<Sites>();
            List<Sites> retrievedSites = new List<Sites>();
            List<CommonSite> siteList = new List<CommonSite>();
            retrievedSites.AddRange(sites);
            foreach (Sites site in retrievedSites)
            {
                siteList.Add(Mapper.SiteToCommon(site));
            }
            return siteList;
        }

        public static List<CommonSite> RetrieveSitesByArea(string area)
        {
            var sites = (from s in db.Sites where s.Area==area select s).ToList<Sites>();
            List<Sites> retrievedSites = new List<Sites>();
            List<CommonSite> siteList = new List<CommonSite>();
            retrievedSites.AddRange(sites);
            foreach (Sites site in retrievedSites)
            {
                siteList.Add(Mapper.SiteToCommon(site));
            }
            return siteList;
        }

        public static List<CommonSite> RetrieveSitesByCategory(string category)
        {
            var sites = (from s in db.Sites where s.Category == category select s).ToList<Sites>();
            List<Sites> retrievedSites = new List<Sites>();
            List<CommonSite> siteList = new List<CommonSite>();
            retrievedSites.AddRange(sites);
            foreach (Sites site in retrievedSites)
            {
                siteList.Add(Mapper.SiteToCommon(site));
            }
            return siteList;
        }

        public static ICollection<CommonSite> RetrieveSitesById(int[] id)
        {
            List<Sites> retrievedSites = new List<Sites>();
            foreach (int i in id)
            {
                var site = (from s in db.Sites where s.SiteId == i select s).FirstOrDefault();
                retrievedSites.Add(site);
            }           
            List<CommonSite> siteList = new List<CommonSite>();
            foreach (Sites site in retrievedSites)
            {
                siteList.Add(Mapper.SiteToCommon(site));
            }
            return siteList;
        }

        public static List<string> RetrieveCategories()
        {
            var categories = (from c in db.Sites select c.Category).Distinct().ToList();
            return categories;
        }
    }
}
