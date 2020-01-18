import { Component, OnInit, Input } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonSite } from 'src/app/models/site/commonSite';
import { TripService } from 'src/app/services/trip.service';
import { SitesService } from 'src/app/services/sites.service';
import { element } from 'protractor';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
 sites:CommonSite[];
 @Input()
 trip:trip;
 tripSites:CommonSite[];
  constructor(private tripService:TripService,private siteService:SitesService) {
    this.tripSites=[];
   }

  ngOnInit() {
    if(this.trip==null)
    {
     this.trip=this.tripService.getTrip();
     this.tripSites=this.tripService.getTripSites();
   }
  else {
    this.siteService.getSitesById(this.trip.tripSites).subscribe(response => {
      debugger
          this.tripSites=response, err => { console.log(err);};
         })
       };
  //   this.trip.tripSites.forEach(element => {
  //    this.siteService.getSitesById(element).subscribe(response => {
  //     this.tripSites.push(response), err => { console.log(err);};
  //    })
  //  });}
  }

  saveTrip()
  {
    this.tripService.saveTrip();
  }
}
