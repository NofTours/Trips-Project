import { Component, OnInit, Input } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import { CommonSite } from 'src/app/models/site/commonSite';
import { TripService } from 'src/app/services/trip.service';
import { SitesService } from 'src/app/services/sites.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { CommonClient } from 'src/app/models/user/CommonClient';;
import { MessageService } from 'primeng/api';
import { IfStmt } from '@angular/compiler';

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
 client:CommonClient;
 passed:boolean;
 today:Date;
 tourcalcString:string;
 sitecalcString:string;
 new=false;
  constructor(private tripService:TripService,private dataSharingService:DataSharingService,private siteService:SitesService
    ,private messageService: MessageService) {
    this.tripSites=[];
    this.passed=true;
    this.today=new Date();
   // this.messageService.add({key: 'trip',severity:'info', summary:'Please Notice', detail:'Travel Time not included in time calculation'});
    this.dataSharingService.client.subscribe( value => {
      this.client = value;
      this.showInfo();
  });;
  
   }

  ngOnInit() {  
    if(this.trip==null)
    {
     this.trip=this.tripService.getTrip();  
     this.tripSites=this.tripService.getTripSites();
     this.isOld=false;
     this.sitecalcString=this.tripService.getSiteCalc();
     this.tourcalcString=this.tripService.getTourCalc();
   }
  else {
    this.siteService.getSitesById(this.trip.tripSites).subscribe(response => {
          this.tripSites=response, err => { console.log(err);};
         })
       
         if(new Date(this.trip.date).getTime()<this.today.getTime())
            this.passed=false;
         this.isOld=true;
         this.sitecalcString=this.tripService.getSiteCalc();
         this.tourcalcString=this.tripService.getTourCalc();
       };   
  }
  ngAfterViewInit() {
    
    setTimeout(() => {
      if(!this.isOld)
        this.messageService.add(
            {key: 'tc', severity: 'info', summary: 'Please Notice', detail: 'Time calcuation excludes travel time'}
  );
    })
}
  showInfo() {

    this.messageService.add({severity:'info', summary: 'Info Message', detail:'PrimeNG rocks'});
}

  saveTrip()
  {
    this.tripService.saveTrip();  
  }

 
}
