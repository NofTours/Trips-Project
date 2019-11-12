import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar, 
  NgbCalendarHebrew, NgbDate,
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew}
  from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-newcalendar',
  templateUrl: './newcalendar.component.html',
  styleUrls: ['./newcalendar.component.css'],
})
export class NewcalendarComponent implements OnInit {

  ngOnInit() {
  }
  model: NgbDateStruct;
  date: {year: number, month: number};
  value:Date;
  constructor(private calendar: NgbCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
  select(event:Date)
  {
this.value=event;
  }
}
