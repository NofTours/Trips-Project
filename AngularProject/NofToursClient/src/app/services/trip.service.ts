import { Injectable } from '@angular/core';
import { trip } from '../models/trip/trip';
import { HttpClient } from '@angular/common/http';
import { CommonSite } from '../models/site/commonSite';
import { Time } from '@angular/common';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TripService {
 trip:trip;
 email:string;
 time:string[];
 hourTimeSlice:number;
 minuteTimeSlice:number;
 selectedSites:CommonSite[];
 baseUrl = "http://localhost:55109";

  constructor(private http: HttpClient,private userService:UsersService,private route:Router) 
  {   
    this.trip=new trip(0,new Date()," "," "," "," ",new Array<number>());
    this.hourTimeSlice=0;
    this.minuteTimeSlice=0;
    // this.email= sessionStorage.getItem("UserEmail");
    // this.saveClientIdToTrip();
   }

   saveDateToTrip(chosenDate: Date){
    if(chosenDate != null)
      this.trip.date = chosenDate;
  }
  saveTimeToTrip(chosenTime:Time)
  {
    this.trip.beginTime=chosenTime.hours.toString()+":"+chosenTime.minutes.toString()+":00";
    this.trip.date.setHours(chosenTime.hours, chosenTime.minutes, 0, 0);//why does this not work?
  }
  saveClientIdToTrip()
  {
    this.userService.getUserId(sessionStorage.getItem("UserEmail")).subscribe(response => {
      this.trip.clientId = response, err => { console.log(err);}
    });
  }
  saveSitesToTrip(selectedSites: CommonSite[])
  {
     this.selectedSites=selectedSites;
     selectedSites.forEach(site => {
     this.trip.tripSites.push(site.SiteId);
     this.time=site.EstimatedStay.split(":");
     this.hourTimeSlice+=Number(this.time[0]);
     this.minuteTimeSlice+=Number(this.time[1]);
   });
   if(this.minuteTimeSlice>=60)
   {        
      this.hourTimeSlice+=Math.floor(this.minuteTimeSlice/60);
      this.minuteTimeSlice-=Math.floor(this.minuteTimeSlice/60)*60;
    }
   this.trip.totalTripHours=this.pad(this.hourTimeSlice)+":"+this.pad(this.minuteTimeSlice)+":00";
   this.trip.bookingStatus="Booked";
   //alert(this.trip.totalTripHours);
  }

  getTrip()
  {
    return this.trip;
  }

  getTripSites(){
    return this.selectedSites;
  }

  getEmail(){
    return this.email;
  }

  saveTrip()
  { 
    
    this.saveClientIdToTrip();
    if(this.trip.clientId!=0)
    {
    return this.http.post<Boolean>(this.baseUrl + "/api/Trips",this.trip).subscribe(data => {
      console.log(data);
      if (data == true)
      {
        this.route.navigate(['/endPage']);}
        
      }
      );
  }
}

  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }

  getClientTrips()
  {
    return this.http.get<trip[]>(this.baseUrl+"/api/Trips/?email="+sessionStorage.getItem("UserEmail"));
  }

}
