import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adminName = '';
  title = 'NofToursClient';
  ngOnInit() {
    
   Date.prototype.toJSON = function () {
    var timezoneOffsetInHours = -((this.getTimezoneOffset() / 60).toFixed(0)); //UTC minus local time
    var sign = timezoneOffsetInHours >= 0 ? '+' : '-';
    var leadingZero = (timezoneOffsetInHours < 10) ? '0' : '';
    
    //It's a bit unfortunate that we need to construct a new Date instance 
    //(we don't want _this_ Date instance to be modified)
    var correctedDate = new Date(this.getFullYear(), this.getMonth(),
    this.getDate(), this.getHours(), this.getMinutes(), this.getSeconds(),
    this.getMilliseconds());
    correctedDate.setHours(this.getHours() + timezoneOffsetInHours);
    var iso = correctedDate.toISOString().replace('Z', '');
    
    return iso + sign + leadingZero + Math.abs(timezoneOffsetInHours).toString() + ':00';
    } 

  }

}
