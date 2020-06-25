using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
using DataLayer;
namespace BusinessLayer
{
    public static class AdminManager
    {
        public static List<CommonTrip> viewTrips(DateTime[] dates)
        {
            return DataAdmin.viewTrips(dates);
        }

        public static Boolean AddSite(CommonSite s)
        {
            return DataSite.AddSite(s);
        }

        public static List<CommonEquipment> GetEquipment()
        {
          return DataEquipment.GetEquipment();
           
        }
    }
}
