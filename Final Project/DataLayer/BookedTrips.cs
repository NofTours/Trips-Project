//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DataLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class BookedTrips
    {
        public int TripId { get; set; }
        public int ClientId { get; set; }
        public System.DateTime Date { get; set; }
        public System.TimeSpan BeginTime { get; set; }
        public string BookingStatus { get; set; }
        public string TotalTripHours { get; set; }
        public string Polyline { get; set; }
    
        public virtual Clients Clients { get; set; }
    }
}