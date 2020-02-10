import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TripService } from 'src/app/services/trip.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Output() chosenDate = new EventEmitter<Date>();
  value: Date;
  invalidDates: Array<Date>;
  minDate: Date;
  maxDate: Date;
  selectedDates:Array<Date>;
  constructor(private tripService:TripService) { }

  ngOnInit() {
    this.invalidDates=[];
    this.selectedDates=[];
    let today=new Date();
    this.minDate = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1,);
    this.invalidDates = [today,invalidDate];
  }

  saveDateToTrip(){
    this.invalidDates.push(this.value);
    this.selectedDates.push(this.value);
    this.tripService.saveDateToTrip(this.value);
   }

}
