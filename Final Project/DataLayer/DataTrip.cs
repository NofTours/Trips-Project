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
        static dbEntities db = new dbEntities();
        public static Boolean AddTrip(CommonTrip trip)
        {
            Trips newTrip=Mapper.TripToDB(trip);
            try
            {
                db.Trips.Add(newTrip);
                db.SaveChanges();
                return true;
            }
            catch (DbEntityValidationException dbEx)
            {
                Debug.WriteLine(dbEx.Message);
            }
            return false;
        }
    }
}
