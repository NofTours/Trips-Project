using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLayer
{
    public class CommonTrip
    {
        public int TripId { get; set; }
        public int ClientId { get; set; }
        public System.DateTime Date { get; set; }
        public System.TimeSpan BeginTime { get; set; }
        public string BookingStatus { get; set; }
        public string TotalTripHours { get; set; }
        public string Polyline { get; set; }
        public string LeavingAdrress { get; set; }
        public int? NumOfPeople { get; set; }
        public int Cost { get; set; }
        public ICollection<int> TripSites { get; set; }
    }
}
