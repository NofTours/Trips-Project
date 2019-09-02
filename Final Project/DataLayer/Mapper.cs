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
        public static Client UserToDB(CommonClient commonClient)
            {
            Client dBClient = new Client()
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

        public static CommonClient UserToCommon(Client dBClient)
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
        public static BookedTrip BookedTripToDB(CommonBookedTrip commonBookedTrip)
        {
            BookedTrip dBBookedTrip = new BookedTrip()
            {
                BeginTime = commonBookedTrip.BeginTime,
                BookingStatus = commonBookedTrip.BookingStatus,
                Date = commonBookedTrip.Date,
                Polyline = commonBookedTrip.Polyline,
                TotalTripHours = commonBookedTrip.TotalTripHours 
            };
            return dBBookedTrip;
        }

        public static CommonBookedTrip BookedTripToCommon(BookedTrip dBBookedTrip)
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
        public static Site SiteToDB(CommonSite commonSite)
        {
            Site site = new Site()
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

        public static CommonSite SiteToCommon(Site site)
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
         public static Trip TripToDB(CommonTrip commonTrip)
        {
            Trip trip = new Trip()
            {
                BeginTime = commonTrip.BeginTime,
                BookingStatus = commonTrip.BookingStatus,
                Date = commonTrip.Date,
                TotalTripHours = commonTrip.TotalTripHours,
                Polyline = commonTrip.Polyline
            };
            return trip;
        }

        public static CommonTrip TripToCommon(Trip trip)
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
