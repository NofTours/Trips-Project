import { Injectable } from '@angular/core';
import { trip } from '../models/trip/trip';
import { HttpClient } from '@angular/common/http';
import { CommonSite } from '../models/site/commonSite';
import { Time } from '@angular/common';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { CommonClient } from '../models/user/CommonClient';
import { DataSharingService } from './data-sharing.service';
import { PricesService } from './prices.service';

@Injectable({
  providedIn: 'root'
})
export class TripService{
 trip:trip;
 email:string;
 time:string[];
 hourTimeSlice:number;
 minuteTimeSlice:number;
 selectedSites:CommonSite[];
 client:CommonClient;
 sitecalcString:string;
 tourcalcString:string;
 baseUrl = "http://localhost:55109";
 midCalc:number;
 dateChosen=false;
  constructor(private http: HttpClient,private usersService:UsersService,private route:Router,
    private dataSharingService:DataSharingService, private pricesService: PricesService) 
  {   
    this.trip=new trip(0,new Date()," "," "," "," ","",0,0,new Array<number>());
    this.hourTimeSlice=0;
    this.minuteTimeSlice=0;
    this.tourcalcString="";
    this.sitecalcString="";
    this.dataSharingService.client.subscribe( value => {
      this.client = value;
     });;
    // this.email= sessionStorage.getItem("UserEmail");
    // this.saveClientIdToTrip();
   }

   saveDateToTrip(chosenDate: Date){
    this.dateChosen=true;
    if(chosenDate != null)
      this.trip.date = chosenDate;
  }
  saveTimeToTrip(chosenTime:Time)
  {
    this.trip.beginTime=this.pad(chosenTime.hours)+":"+this.pad(chosenTime.minutes)+":00";
    this.trip.date.setHours(chosenTime.hours, chosenTime.minutes, 0, 0);//why does this not work?
  }
  saveClientIdToTrip()
  {
    this.trip.clientId=this.client.ClientId;
  }
  saveSitesToTrip(selectedSites: CommonSite[], approxTravelTime: number)
  {
    debugger;
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
   this.hourTimeSlice += approxTravelTime;
   this.trip.totalTripHours=this.pad(this.hourTimeSlice)+":"+this.pad(this.minuteTimeSlice)+":00";
   this.trip.bookingStatus="Booked";
   this.saveCost();
   //alert(this.trip.totalTripHours);
  }

  saveCost()
  {
     
    var found=false;
   
    this.selectedSites.forEach(site => {
      if(site.Price>0)
      {
      if(this.selectedSites.indexOf(site)>0&&this.trip.cost!=0)
          this.sitecalcString+="+";
      this.trip.cost+=site.Price*Number(this.trip.numOfPeople);
      this.sitecalcString+=site.Price.toString()+"x"+this.trip.numOfPeople.toString();
    }
   
    });
    this.midCalc=this.trip.cost;
    this.sitecalcString+="="+this.trip.cost.toString();
    
    this.pricesService.getPrices().forEach(info => {
 
      if(this.trip.numOfPeople<=info.numOfPeople&& found==false)
      {
      this.trip.cost+=info.price*this.hourTimeSlice+(this.minuteTimeSlice/60)*info.price;
      found=true;
      if(this.minuteTimeSlice==0)
      this.tourcalcString+=info.price.toString()+"x"+this.hourTimeSlice.toString()+"="+(this.trip.cost-this.midCalc).toString();
       else this.tourcalcString+=info.price.toString()+"x"+this.hourTimeSlice.toString()+"+"+(this.minuteTimeSlice/60).toString()+"x"+info.price.toString()+"="+(this.trip.cost-this.midCalc).toString();
     }
    }
   
    );
    
  }

  saveAdrressAndPeople(address:string,num:number)
  {
  this.trip.leavingAdrress=address;
  this.trip.numOfPeople=num;
  }
  getTrip()
  {
    return this.trip;
  }
  getSiteCalc()
  {
    return this.sitecalcString;
  }
  getTourCalc()
  {
    return this.tourcalcString;
  }
  getTripSites(){
    return this.selectedSites;
  }

  getEmail(){
    return this.email;
  }

  getDateChosen()
  {
    return this.dateChosen;
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
        this.route.navigate(['/endPage']);
        window.scrollTo(0, 0)};        
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
