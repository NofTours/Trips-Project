import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { trip } from 'src/app/models/trip/trip';

@Component({
  selector: 'app-view-trips',
  templateUrl: './view-trips.component.html',
  styleUrls: ['./view-trips.component.css']
})
export class ViewTripsComponent implements OnInit {
  clientTrips: trip[];
  email: string;
  constructor(private route: Router, private tripService: TripService) {
    this.clientTrips = [];
    this.email = sessionStorage.getItem("UserEmail");
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
}

