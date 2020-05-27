using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer
{
    public static class DataCalendar
    {
        public static List<DateTime> GetDates()
        {
            dbEntities db = new dbEntities();
            var dates = (from c in db.Calendar select c.Date).ToList<DateTime>();
            return dates;
        }
    }
}
