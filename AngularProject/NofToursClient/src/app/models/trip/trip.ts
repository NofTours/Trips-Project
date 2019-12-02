
import { CommonSite } from "../site/commonSite";
export class trip
{
    clientId:number;
    date: Date;
    // beginTime: {hours:number,minutes:number,seconds:number};
    beginTime: string;
    bookingStatus: string;
    totalTripHours: string;
    polyline: string;
    tripSites: number[];

    
    constructor(     
        clientId:number,
        date: Date,
        // beginTime:{hours:number,minutes:number,seconds:number},
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