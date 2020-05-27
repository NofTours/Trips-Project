using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
namespace DataLayer
{
    public static class DataTrip
    {
        //static dbEntities db = new dbEntities();
        public static Boolean AddTrip(CommonTrip trip)
        {
            dbEntities db = new dbEntities();
            Trips newTrip=Mapper.TripToDB(trip);
            //newTrip.Date.AddHours(3);
            try
            {
                db.Trips.Add(newTrip);
                db.Calendar.Add(new Calendar { Date=trip.Date,DayStatus="booked"});
                db.SaveChanges();
                return true;
            }
            catch (DbEntityValidationException dbEx)
            {
                Debug.WriteLine(dbEx.Message);
            }
             return false;            
        }

        public static IEnumerable<CommonTrip> RetrieveTripsByClient(string email)
        {
            dbEntities db = new dbEntities();
            int clientId =DataUser.GetUserByEmail(email).ClientId;
            var trips = (from t in db.Trips where t.ClientId == clientId select t).ToList<Trips>();
            List<CommonTrip> clientTrips = new List<CommonTrip>();
            foreach(Trips t in trips)
            {
                clientTrips.Add(Mapper.TripToCommon(t));
            }
            return clientTrips;
        }
    }
}
