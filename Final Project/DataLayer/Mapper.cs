using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommonLayer;

namespace DataLayer
{
    static class Mapper
    {
        /****************Client***********************/ 
        public static Clients UserToDB(CommonClient commonClient)
            {
            Clients dBClient = new Clients()
            {
                ContactName = commonClient.ContactName,
                Email = commonClient.Email,
                Phone1 = commonClient.Phone1,
                Phone2 = commonClient.Phone2,
                LeavingAddress = commonClient.LeavingAddress,
                NumPeople = commonClient.NumPeople
            };
            return dBClient;
        }

        public static CommonClient UserToCommon(Clients dBClient)
        {
            CommonClient commonClient = new CommonClient()
            {
                ContactName = dBClient.ContactName,
                Email = dBClient.Email,
                Phone1 = dBClient.Phone1,
                Phone2 = dBClient.Phone2,
                LeavingAddress = dBClient.LeavingAddress,
                NumPeople = dBClient.NumPeople
            };
            return commonClient;
        }

        /****************BookedTrip***********************/
        public static BookedTrips BookedTripToDB(CommonBookedTrip commonBookedTrip)
        {
            BookedTrips dBBookedTrip = new BookedTrips()
            {
                BeginTime = commonBookedTrip.BeginTime,
                BookingStatus = commonBookedTrip.BookingStatus,
                Date = commonBookedTrip.Date,
                Polyline = commonBookedTrip.Polyline,
                TotalTripHours = commonBookedTrip.TotalTripHours 
            };
            return dBBookedTrip;
        }

        public static CommonBookedTrip BookedTripToCommon(BookedTrips dBBookedTrip)
        {
            CommonBookedTrip commonBookedTrip = new CommonBookedTrip()
            {
                BeginTime = dBBookedTrip.BeginTime,
                BookingStatus = dBBookedTrip.BookingStatus,
                Date = dBBookedTrip.Date,
                Polyline = dBBookedTrip.Polyline,
                TotalTripHours = dBBookedTrip.TotalTripHours
            };
            return commonBookedTrip;
        }

        /****************Calendar***********************/

        public static Calendar CalendarToDB(CommonCalendar commonCalendar)
        {
            Calendar calendar = new Calendar()
            {
                Date = commonCalendar.Date,
                DayStatus = commonCalendar.DayStatus               
            };
            return calendar;
        }

        public static CommonCalendar CalendarToCommon(Calendar calendar)
        {
            CommonCalendar commonCalendar = new CommonCalendar()
            {
                Date = calendar.Date,
                DayStatus = calendar.DayStatus
            };
            return commonCalendar;
        }

        /****************Equipment***********************/
        public static Equipment EquipmentToDB(CommonEquipment commonEquipment)
        {
            Equipment equipment = new Equipment()
            {   
                Name = commonEquipment.Name
            };
            return equipment;
        }

        public static CommonEquipment EquipmentToCommon(Equipment Equipment)
        {
            CommonEquipment commonEquipment = new CommonEquipment()
            {
                Name = Equipment.Name
            };
            return commonEquipment;
        }
        /****************Site***********************/
        public static Sites SiteToDB(CommonSite commonSite)
        {
            Sites site = new Sites()
            {
                Name = commonSite.Name,
                Description = commonSite.Description,
                Category = commonSite.Category,
                Area = commonSite.Area,
                AddressGMaps = commonSite.AddressGMaps,
                OpeningHour = commonSite.OpeningHour,
                ClosingHour = commonSite.ClosingHour,
                EstimatedStay = commonSite.EstimatedStay,
                Price = commonSite.Price                             
            };
            return site;
        }

        public static CommonSite SiteToCommon(Sites site)
        {
            CommonSite commonSite = new CommonSite()
            {
                Name = site.Name,
                Description = site.Description,
                Category = site.Category,
                Area = site.Area,
                AddressGMaps = site.AddressGMaps,
                OpeningHour = site.OpeningHour,
                ClosingHour = site.ClosingHour,
                EstimatedStay = site.EstimatedStay,
                Price = site.Price
            };
            return commonSite;
        }
        /****************Trip***********************/
         public static Trips TripToDB(CommonTrip commonTrip)
        {
            Trips trip = new Trips()
            {
                BeginTime = commonTrip.BeginTime,
                BookingStatus = commonTrip.BookingStatus,
                Date = commonTrip.Date,
                TotalTripHours = commonTrip.TotalTripHours,
                Polyline = commonTrip.Polyline
            };
            return trip;
        }

        public static CommonTrip TripToCommon(Trips trip)
        {
            CommonTrip commonTrip = new CommonTrip()
            {
                BeginTime = trip.BeginTime,
                BookingStatus = trip.BookingStatus,
                Date = trip.Date,
                TotalTripHours = trip.TotalTripHours,
                Polyline = trip.Polyline
            };
            return commonTrip;
        }
    }
}
