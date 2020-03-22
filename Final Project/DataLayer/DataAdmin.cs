using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
namespace DataLayer
{
    public static class DataAdmin
    {
        public static List<CommonTrip> viewTrips(DateTime[] dates)
        {
            
            dbEntities db = new dbEntities();
            List<CommonTrip> result = new List<CommonTrip>();
            if (dates.Length==2) {
                DateTime beginDate = dates[0].Date;
                DateTime endDate = dates[1].Date;
                var trips = (from t in db.Trips where t.Date>= beginDate && t.Date<= endDate select t).ToList<Trips>();
                foreach( Trips t in trips)
                {
                    result.Add(Mapper.TripToCommon(t));
                }
                return result;
           }
            DateTime date = dates[0].Date;
            var trip = (from t in db.Trips where t.Date== date select t).FirstOrDefault();
            result.Add(Mapper.TripToCommon(trip));
            return result;
        }
    }
}
