
import { CommonSite } from "../site/commonSite";
import { Time } from "@angular/common";
export class trip
{
    clientId:number;//trip service intializes
    date: Date;//book trip
    beginTime: string;//book trip
    bookingStatus: string;// trip conclusion
    totalTripHours: string;// trip conclusion
    polyline: string;
    tripSites: number[];//save on db according to client id and site id - info from site componenet

    
    constructor(     
        clientId:number,
        date: Date,
        beginTime:string,
        bookingStatus: string,
        totalTripHours: string,
        polyline: string,
        tripSites: number[]

    )
    {
        this.clientId=clientId;
        this.date=date;
        this.beginTime=beginTime;
        this.bookingStatus=bookingStatus;
        this.totalTripHours=totalTripHours;
        this.polyline=polyline;
        this.tripSites=tripSites;
    }

}