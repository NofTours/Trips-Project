import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css']
})
export class TimePickerComponent implements OnInit {

 
  //@Output() chosenTime = new EventEmitter<Time>();
  timeObj:Time={hours:13,minutes:30};
  time = {hour: 13, minute: 30};
  constructor() { 

}

  ngOnInit() {
  }
  
  getTime(): Time {
    this.timeObj.hours = this.time.hour;
    this.timeObj.minutes = this.time.minute;
    alert(this.timeObj.hours + " " + this.timeObj.minutes);
    return this.timeObj;
  }
}
