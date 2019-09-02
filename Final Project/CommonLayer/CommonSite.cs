using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommonLayer
{
     public class CommonSite
    {
        public int CodeSite { get; set; }
        public string Name { get; set; }
        public string Area { get; set; }
        public string AddressGMaps { get; set; }
        public decimal Price { get; set; }
        public string Description { get; set; }
        public System.TimeSpan OpeningHour { get; set; }
        public System.TimeSpan ClosingHour { get; set; }
        public string Category { get; set; }
        public Nullable<System.TimeSpan> EstimatedStay { get; set; }
    }
}
