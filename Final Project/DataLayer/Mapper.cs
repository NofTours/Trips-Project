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
                NumPeople = commonClient.NumPeople,
                HashedPassword = commonClient.Password
            };
            return dBClient;
        }

        public static CommonClient UserToCommon(Clients dBClient)
        {
            CommonClient commonClient = new CommonClient()
            {
                ClientId=dBClient.ClientId,
                ContactName = dBClient.ContactName,
                Email = dBClient.Email,
                Phone1 = dBClient.Phone1,
                Phone2 = dBClient.Phone2,
                LeavingAddress = dBClient.LeavingAddress,
                NumPeople = dBClient.NumPeople
            };
            return commonClient;
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
        /****************EquipmentSite***********************/
        public static EquipmentSites EquipmentSiteToDB(CommonEquipmentSite commonEquipmentSite)
        {
            EquipmentSites EquipmentSite = new EquipmentSites()
            {
                EquipmentId = commonEquipmentSite.EquipmentId,
                SiteId = commonEquipmentSite.SiteId
                //Sites = SiteToDB(commonEquipmentSite.Sites),
                //Equipment = EquipmentToDB(commonEquipmentSite.Equipment)
            };
            return EquipmentSite;
        }

        public static CommonEquipmentSite EquipmentSiteToCommon(EquipmentSites equipmentSite)
        {
            CommonEquipmentSite commonEquipmentSite = new CommonEquipmentSite()
            {
                EquipmentId = equipmentSite.EquipmentId,
                SiteId = equipmentSite.SiteId
                //Sites = SiteToCommon(equipmentSite.Sites),
                //Equipment = EquipmentToCommon(equipmentSite.Equipment)
            };
            return commonEquipmentSite;
        }

        /****************Site***********************/
        public static Sites SiteToDB(CommonSite commonSite)
        {
            Sites site = new Sites()
            {
                SiteId=commonSite.SiteId,
                Name = commonSite.Name,
                Description = commonSite.Description,
                Category = commonSite.Category,
                Area = commonSite.Area,
                AddressGMaps = commonSite.AddressGMaps,
                OpeningHour = commonSite.OpeningHour,
                ClosingHour = commonSite.ClosingHour,
                EstimatedStay = commonSite.EstimatedStay,
                Price = commonSite.Price,

            };
            site.EquipmentSites = new List<EquipmentSites>();
            foreach (String e in commonSite.Equipment)
            {        
                EquipmentSites equipmentSites = new EquipmentSites
                {
                    SiteId = site.SiteId,
                    EquipmentId = DataEquipment.GetEquipmentIdByName(e)
                };
                site.EquipmentSites.Add(equipmentSites);
            }
            //foreach(CommonTripSite ts in commonSite.TripSite)
            //{
            //    site.TripSite = new List<TripSite>();
            //    site.TripSite.Add(TripSiteToDB(ts));
            //}
            return site;
        }

        public static CommonSite SiteToCommon(Sites site)
        {
            CommonSite commonSite = new CommonSite()
            {
                SiteId=site.SiteId,
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
            commonSite.Equipment = new List<string>();
            foreach (EquipmentSites e in site.EquipmentSites)
            {               
                commonSite.Equipment.Add(DataEquipment.GetEquipmentNameById(e.EquipmentId));
                //commonSite.EquipmentSites = new List<CommonEquipmentSite>();
                //commonSite.EquipmentSites.Add(EquipmentSiteToCommon(e));
            }
            //foreach (TripSite ts in site.TripSite)
            //{
            //    commonSite.TripSite = new List<CommonTripSite>();
            //    commonSite.TripSite.Add(TripSiteToCommon(ts));
            //}
            return commonSite;
        }
        /****************Trip***********************/
        public static Trips TripToDB(CommonTrip commonTrip)
        {
            Trips trip = new Trips()
            {
                ClientId = commonTrip.ClientId,
                BeginTime = commonTrip.BeginTime,
                BookingStatus = commonTrip.BookingStatus,
                Date = commonTrip.Date,
                TotalTripHours = commonTrip.TotalTripHours,
                Polyline = commonTrip.Polyline,

            };
            trip.TripSite = new List<TripSite>();
            foreach (int siteId in commonTrip.TripSites)
            {                
                TripSite tripSite = new TripSite()
                {
                    TripId = trip.TripId,
                    SiteId = siteId
                };
                trip.TripSite.Add(tripSite);

            }
           // trip.Clients = DataUser.GetUserById(commonTrip.ClientId);
            return trip;
        }

        public static CommonTrip TripToCommon(Trips trip)
        {
            CommonTrip commonTrip = new CommonTrip()
            {
                TripId=trip.TripId,
                ClientId=trip.ClientId,
                BeginTime = trip.BeginTime,
                BookingStatus = trip.BookingStatus,
                Date = trip.Date,
                TotalTripHours = trip.TotalTripHours,
                Polyline = trip.Polyline
            };
            commonTrip.TripSites = new List<int>();
            foreach (TripSite ts in trip.TripSite)
            {
                commonTrip.TripSites.Add(ts.SiteId);
            }
            return commonTrip;
        }

        /****************TripSite***********************/
        public static TripSite TripSiteToDB(CommonTripSite commonTripSite)
        {
                TripSite tripSite = new TripSite()
                {
                    SiteId = commonTripSite.SiteId,
                    TripId = commonTripSite.TripId,
                    OrderInTrip = commonTripSite.OrderInTrip
                    //Sites = SiteToDB(commonTripSite.Sites),
                    //Trips = TripToDB(commonTripSite.Trips)

                };
         
            return tripSite;
        }

        public static CommonTripSite TripSiteToCommon(TripSite tripSite)
        {
            CommonTripSite commonTripSite = new CommonTripSite()
            {
                SiteId = tripSite.SiteId,
                TripId = tripSite.TripId,
                OrderInTrip = tripSite.OrderInTrip
                //Sites = SiteToCommon(tripSite.Sites),
                //Trips = TripToCommon(tripSite.Trips)
            };

            return commonTripSite;
        }
    }
}



