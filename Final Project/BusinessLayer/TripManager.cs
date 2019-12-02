using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;
using DataLayer;
namespace BusinessLayer
{
    public static class TripManager
    {
        public static Boolean AddTrip(CommonTrip trip)
        { if(DataTrip.AddTrip(trip)==false)
            {
                Debug.WriteLine("trip could not be added successfully");
                return false;
            }
            Debug.WriteLine("trip was added successfully");
            return true;
        }

        public static Boolean RetrieveTripTemplates(string area)
        {
            return true;
        }
    }
}
