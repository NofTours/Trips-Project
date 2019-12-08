using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLayer
{
    public class CommonTripSite
    {
        public int TripSiteId { get; set; }
        public int SiteId { get; set; }
        public int TripId { get; set; }
        public int OrderInTrip { get; set; }

        //public CommonSite Sites { get; set; }
        //public CommonTrip Trips { get; set; }
    }
}
