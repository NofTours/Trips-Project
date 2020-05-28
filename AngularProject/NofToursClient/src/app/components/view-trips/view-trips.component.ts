import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { trip } from 'src/app/models/trip/trip';
import { CommonClient } from 'src/app/models/user/CommonClient';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-view-trips',
  templateUrl: './view-trips.component.html',
  styleUrls: ['./view-trips.component.css']
})
export class ViewTripsComponent implements OnInit {
  clientTrips: trip[];
  client:CommonClient;
  isUserLoggedIn:boolean;

  constructor(private route: Router,private dataSharingService:DataSharingService, private tripService: TripService) {
    this.clientTrips = [];
    this.dataSharingService.client.subscribe( value => {
      this.client = value;
  });;
  }


  ngOnInit() {
    this.tripService.getClientTrips().subscribe(response => {
      response.forEach(element => {//change properties of each element to lowercase in order to fit trip object
        Object.keys(element).forEach(k => {
          const value = element[k];
          delete element[k];
          element[k[0].toLowerCase() + k.slice(1)] = value;
        });
        this.clientTrips.push(element);
      }), err => { console.log(err); }
    })

  }

    move()
    {
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value; });
        debugger
      if(this.isUserLoggedIn==true)
        this.route.navigate(['/booktrip']);
       else this.route.navigate(['/login']);
    }
}


