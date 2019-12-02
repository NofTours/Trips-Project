import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbDateStruct, NgbCalendar, 
  NgbCalendarHebrew, NgbDate, NgbDateNativeAdapter, 
  NgbDatepickerI18n,
  NgbDatepickerI18nHebrew}
  from '@ng-bootstrap/ng-bootstrap';
import { CommonClient } from 'src/app/models/user/CommonClient';
import { trip } from 'src/app/models/trip/trip';
  

@Component({
  selector: 'app-newcalendar',
  templateUrl: './newcalendar.component.html',
  styleUrls: ['./newcalendar.component.css'],
})
export class NewcalendarComponent implements OnInit {

  @Output() chosenDate = new EventEmitter<Date>();

  ngOnInit() {
  }
  model: NgbDateStruct;
  date: {year: number, month: number};
  myDate:Date;
  year: number;
  month: number;
  day: number;
  today: NgbDate;
  

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  holidays: {month, day, text}[] = [
    {month: 1, day: 1, text: 'New Years Day'},
    {month: 3, day: 30, text: 'Good Friday (hi, Alsace!)'},
    {month: 5, day: 1, text: 'Labour Day'},
    {month: 5, day: 5, text: 'V-E Day'},
    {month: 7, day: 14, text: 'Bastille Day'},
    {month: 8, day: 15, text: 'Assumption Day'},
    {month: 11, day: 1, text: 'All Saints Day'},
    {month: 11, day: 11, text: 'Armistice Day'},
    {month: 12, day: 25, text: 'Christmas Day'}
  ];

  constructor(private calendar: NgbCalendar){//, public adapter: NgbDateNativeAdapter) {
    this.markDisabled = this.markDisabled.bind(this);
    this.today = calendar.getToday();
    this.fromDate = this.getFirstAvailableDate(this.today);
    this.toDate = this.getFirstAvailableDate(calendar.getNext(this.today, 'd', 15));
    this.myDate = new Date();
  }

  isHoliday(date: NgbDate): string {
    const holiday = this.holidays.find(h => h.day === date.day && h.month === date.month);
    return holiday ? holiday.text : '';
     
  }

  markDisabled(date: NgbDate, current: {month: number}) {
    return this.isHoliday(date) || (this.isWeekend(date) && date.month === current.month);
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && (date.after(this.fromDate) || date.equals(this.fromDate))) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.year = date.year;
    this.month = date.month;
    this.day = date.day;
    if( typeof(this.year) == "number")  
    this.myDate.setFullYear(this.year, this.month - 1, this.day);
    // alert( "in calendar: " + this.myDate.toDateString());
    
    this.chosenDate.emit(this.myDate);
  }

  

  getTooltip(date: NgbDate) {
    const holidayTooltip = this.isHoliday(date);

    if (holidayTooltip) {
      return holidayTooltip;
    } else if (this.isRange(date) && !this.isWeekend(date)) {
      return 'Vacations!';
    } else {
      return '';
    }
  }

  getFirstAvailableDate(date): NgbDate {
    while (this.isWeekend(date) || this.isHoliday(date)) {
      date = this.calendar.getNext(date, 'd', 1);
    }
    return date;
  }

  isWeekend(date: NgbDate) {
    return this.calendar.getWeekday(date) >= 6;
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }
}
