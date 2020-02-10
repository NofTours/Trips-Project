import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Time } from '@angular/common';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

 
  //@Output() chosenTime = new EventEmitter<Time>();
  timeObj:Time={hours:13,minutes:30};
  time:string[];
  constructor(private tripService:TripService) { 

}

  ngOnInit() {
  }
  

  saveHour(event)
  {
    debugger;
  this.timeObj.hours=event;
  }

  saveTime(event){
    this.time=event.split(":");
    this.timeObj.hours=Number(this.time[0]);
    this.timeObj.minutes=Number(this.time[1]);
    debugger;
    this.tripService.saveTimeToTrip(this.timeObj);
  }
}
