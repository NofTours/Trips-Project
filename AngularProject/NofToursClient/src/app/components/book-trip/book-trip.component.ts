import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import { stringify } from 'querystring';
import { Time } from '@angular/common';
import { CommonSite } from 'src/app/models/site/commonSite';
import {SitesService} from 'src/app/services/sites.service'
@Component({
  selector: 'app-book-trip',
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.css']
})
export class BookTripComponent implements OnInit {

  trip:trip;
  hidden:boolean;
  sites:CommonSite[]=[];
  name:number[];
  constructor(private SitesService: SitesService) {    
    this.hidden=true;
    this.trip=new trip(1,new Date(),"","","","",this.name);
  }

  ngOnInit() {
  }
  

  saveDateToTrip(chosenDate: Date){
    if(chosenDate != null)
      this.trip.date = chosenDate;
  }
  saveTimeToTrip(chosenTime:Time)
  {
    this.trip.date.setHours(chosenTime.hours, chosenTime.minutes, 0, 0);
    alert(this.trip.date.toString());
    this.hidden = false;
  }

  getSites()
  {
    this.SitesService.doGetAllSites().subscribe(response => {
      // alert("reponse"+typeof(response));
      this.sites = response, err => { console.log(err);}
    })
    // debugger
    // alert(typeof(this.sites));
    // return this.sites;
  }
  

  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }
}
