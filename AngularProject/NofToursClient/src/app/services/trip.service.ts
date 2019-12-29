import { Injectable } from '@angular/core';
import { trip } from '../models/trip/trip';
import { HttpClient } from '@angular/common/http';
import { CommonSite } from '../models/site/commonSite';
import { ClientService } from './client.service';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TripService {
 trip:trip;
 email:string;
 time:string[];
 hourTimeSlice:number;
 minuteTimeSlice:number;
 baseUrl = "http://localhost:55109";

  constructor(private http: HttpClient,private clientService:ClientService) 
  {
    this.trip=new trip(0,new Date()," "," "," "," ",new Array<number>());
    this.email= sessionStorage.getItem("UserEmail");
    this.clientService.getClientId(this.email).subscribe(response => {
    this.trip.clientId = response, err => { console.log(err);} 
    this.hourTimeSlice=0;
    this.minuteTimeSlice=0;
   });
   }
   saveDateToTrip(chosenDate: Date){
    if(chosenDate != null)
      this.trip.date = chosenDate;
  }
  saveTimeToTrip(chosenTime:Time)
  {
    debugger
    this.trip.beginTime=chosenTime.hours.toString()+":"+chosenTime.minutes.toString()+":0";
    this.trip.date.setHours(chosenTime.hours, chosenTime.minutes, 0, 0);
  }
  saveSitesToTrip(selectedSites: CommonSite[])
  {
     selectedSites.forEach(site => {
     this.trip.tripSites.push(site.SiteId);
     this.time=site.EstimatedStay.split(":");
     this.hourTimeSlice+=Number(this.time[0]);
     this.minuteTimeSlice+=Number(this.time[1]);
   });
   debugger
   this.trip.totalTripHours=this.pad(this.hourTimeSlice)+":"+this.pad(this.minuteTimeSlice)+":00";
   //alert(this.trip.totalTripHours);
  }
  getTripDate()
  {
    return this.trip.date.toString();
  }
  saveTrip()
  {
    debugger
    return this.http.post<Boolean>(this.baseUrl + "/api/Trips",this.trip).subscribe();
  }
  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}
