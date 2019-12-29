import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import { stringify } from 'querystring';
import { Time } from '@angular/common';
import { CommonSite } from 'src/app/models/site/commonSite';
import {SitesService} from 'src/app/services/sites.service'
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { TripService } from 'src/app/services/trip.service';
@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.css']
})
export class BookTripComponent implements OnInit {

  numOfPeople:number;
  constructor(private SitesService: SitesService,private route: Router,private clientService:ClientService,
    private tripService:TripService) {    
  }

  ngOnInit() {
  }
  

  saveDateToTrip(chosenDate: Date){
   this.tripService.saveDateToTrip(chosenDate);
  }
  saveTimeToTrip(chosenTime:Time)
  {
    debugger
   this.tripService.saveTimeToTrip(chosenTime);
    this.route.navigate(['/sites']);

  }

  
  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}
