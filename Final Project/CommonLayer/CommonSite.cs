using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLayer
{
     public class CommonSite
    {
        public int SiteId { get; set; }
        public string Name { get; set; }
        public string Area { get; set; }
        public string AddressGMaps { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public System.TimeSpan OpeningHour { get; set; }
        public System.TimeSpan ClosingHour { get; set; }
        public string Category { get; set; }
        public Nullable<System.TimeSpan> EstimatedStay { get; set; }

        public List<string> Equipment { get; set; }

        //public ICollection<CommonEquipmentSite> EquipmentSites { get; set; }
        //public ICollection<CommonTripSite> TripSite { get; set; }


    }
}
