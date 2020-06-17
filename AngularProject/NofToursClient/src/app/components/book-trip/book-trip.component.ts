import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { UsersService } from 'src/app/services/users.service';
import { Data } from 'src/app/models/Data/Data';
import { CommonClient } from 'src/app/models/user/CommonClient';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Message } from 'primeng/api/message';
import { DatePipe } from '@angular/common';


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
  msgs: Message[] = [];
  datesString:string;

  constructor(private userService: UsersService,private dataSharingService:DataSharingService,private route: Router,
    private tripService:TripService,private datePipe: DatePipe) {   
      this.hidden=true;
      this.datesString="You have ordered trips in: ";
      this.dataSharingService.client.subscribe( value => {
        this.client = value;});
        this.tripService.getClientTrips().subscribe(response => {
          response.forEach(element => {//change properties of each element to lowercase in order to fit trip object
            Object.keys(element).forEach(k => {
              const value = element[k];
              delete element[k];
              element[k[0].toLowerCase() + k.slice(1)] = value;
            });
            if(new Date(element.date).getTime()>new Date().getTime())
            {
                  alert(element.date);
                  debugger
                  
                  this.datesString+=" "+this.datePipe.transform(element.date, "dd-MM-yyyy"); 
                  alert(this.datesString) 
            }         
            
            })
            this.msgs.push({severity:'info', summary:'Remember!', detail:this.datesString});
            ;})
       

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
