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



  constructor(private tripService:TripService) { }

  ngOnInit() {
  }

  saveDateToTrip(chosenDate: Date){
    debugger
    this.tripService.saveDateToTrip(this.value);
   }

}
