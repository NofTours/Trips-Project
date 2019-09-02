using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLayer
{
    public class CommonTrip
    {
        public int CodeTrip { get; set; }
        public int ClientCode { get; set; }
        public System.DateTime Date { get; set; }
        public System.TimeSpan BeginTime { get; set; }
        public string BookingStatus { get; set; }
        public string TotalTripHours { get; set; }
        public string Polyline { get; set; }
    }
}
