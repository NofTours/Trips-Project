import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import { stringify } from 'querystring';
import { Time } from '@angular/common';
import { CommonSite } from 'src/app/models/site/commonSite';
import {SitesService} from 'src/app/services/sites.service'
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { element } from 'protractor';
import {
  mapKeys
  } from 'lodash/fp'
import { UsersService } from 'src/app/services/users.service';
import { Data } from 'src/app/models/Data/Data';
import { CommonClient } from 'src/app/models/user/CommonClient';
import { DataSharingService } from 'src/app/services/data-sharing.service';
@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.css']
})
export class BookTripComponent implements OnInit {
 
  numOfPeople:number;
  leavingAddress:Text;
  hidden:boolean;
  info:Data;
  client:CommonClient;
  constructor(private userService: UsersService,private dataSharingService:DataSharingService,private route: Router,
    private tripService:TripService) {   
      this.hidden=true;
      this.dataSharingService.client.subscribe( value => {
        this.client = value;});
  }

  ngOnInit() {
  }
  

  saveDateToTrip(chosenDate: Date){
   this.tripService.saveDateToTrip(chosenDate);
  }
  continue()
  {
    this.tripService.saveAdrressAndPeople(String(this.leavingAddress),this.numOfPeople);
    this.route.navigate(['/sites']);
    //  this.info=new Data(sessionStorage.getItem("UserEmail"),String(this.leavingAddress),this.numOfPeople.toString());
    //  this.client.LeavingAddress=this.info.Address;
    //  this.client.NumPeople=this.info.NumOfPeople;
    //  this.dataSharingService.client.next(this.client);
    //   this.userService.saveAdrressAndPeople(this.info);
  }

  
  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }

  
}
