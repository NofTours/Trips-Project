import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from 'src/app/services/trip.service';
import { UsersService } from 'src/app/services/users.service';
import { Data } from 'src/app/models/Data/Data';
import { CommonClient } from 'src/app/models/user/CommonClient';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Message } from 'primeng/api/message';
import { DatePipe } from '@angular/common';
import { AddressesService } from 'src/app/services/addresses.service';
import { MessageService } from 'primeng/api';


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
  houseNum:Text;
  dateChosen=false;
  // roadNames:string[];
  // cityNames:string[];
  found=false;
  constructor(private userService: UsersService,private dataSharingService:DataSharingService,private route: Router,
    private tripService:TripService,private datePipe: DatePipe, private messageService: MessageService) {   
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
                  this.datesString+=" "+this.datePipe.transform(element.date, "dd-MM-yyyy");  
                  this.found=true;
            }         
            
            })
            if(this.found==true)
              this.msgs.push({severity:'info', summary:'Remember!', detail:this.datesString});
            ;})
       

  }

  ngOnInit() {
  }
  

  saveDateToTrip(chosenDate: Date){
   this.dateChosen=true;
   this.tripService.saveDateToTrip(chosenDate);
  }
  showToast() {
    this.messageService.add({key:'req',severity:'warn', summary:'Notice!', detail:"All fields are required!"});
}
  continue()
  {
    this.tripService.saveAdrressAndPeople(String(this.leavingAddress+" "+this.houseNum),this.numOfPeople);
    if(this.houseNum==null||this.leavingAddress==null||this.tripService.getDateChosen()==false||this.numOfPeople==0)
        this.showToast();
    else this.route.navigate(['/sites']);
  }

  
  private pad(i: number): string {
    return i < 10 ? `0${i}` : `${i}`;
  }

  
}
