import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonSite } from 'src/app/models/site/commonSite';
import { WebApiService } from 'src/app/services/web-api.service';
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip:trip;
  tripSites:number[]=[];
 
  constructor(private webApi: WebApiService) {
    this.tripSites.push(0);
    this.trip=new trip(12,new Date(),"02:05:19",
    // {hours:8,minutes:0,seconds:0},
    "booked","5","20",this.tripSites);
   }

   saveTrip()
   {
    this.webApi.doTripSave(this.trip).subscribe(data => {
      console.log(data);})
   }
  ngOnInit() {
  }
}
