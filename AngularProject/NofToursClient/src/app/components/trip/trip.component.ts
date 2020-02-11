import { Component, OnInit, Input } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonSite } from 'src/app/models/site/commonSite';
import { TripService } from 'src/app/services/trip.service';
import { SitesService } from 'src/app/services/sites.service';
import { element } from 'protractor';
import { Router } from '@angular/router';

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
 isOld:boolean;
 email:string;
  constructor(private tripService:TripService,private siteService:SitesService,private route: Router) {
    this.tripSites=[];
    this.email=sessionStorage.getItem("UserEmail");
   }

  ngOnInit() {
    if(this.trip==null)
    {
     this.trip=this.tripService.getTrip();
     this.tripSites=this.tripService.getTripSites();
     this.isOld=false;
   }
  else {
    this.siteService.getSitesById(this.trip.tripSites).subscribe(response => {
          this.tripSites=response, err => { console.log(err);};
         })
         this.isOld=true;
       };
  //   this.trip.tripSites.forEach(element => {
  //    this.siteService.getSitesById(element).subscribe(response => {
  //     this.tripSites.push(response), err => { console.log(err);};
  //    })
  //  });}
  }

  saveTrip()
  {
    alert("in save trip");
    this.tripService.saveTrip();
    // this.route.navigate(['/endPage']);
this.tripSites[0].Equipment.length
  }
}
