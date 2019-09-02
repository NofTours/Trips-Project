import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { CommonClient } from "src/app/models/user/CommonClient";


@Component({
  selector: 'app-user-updates',
  templateUrl: './user-updates.component.html',
  styleUrls: ['./user-updates.component.css']
})
export class UserUpdatesComponent implements OnInit, OnChanges {

  @Input() userAdded: CommonClient;
  @Input() userDeleted: CommonClient;

  changeLog: string[] = [];
  add: string;
  delete: string;

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
      console.log(this.changeLog)
    }
    this.changeLog.push(log.join(', '));

    if(this.userAdded!=undefined)
       this.add = this.userAdded.contactName + " user was added.";
    if(this.userDeleted!=undefined)    
      this.delete = this.userDeleted.contactName + " user was deleted.";
  }
  constructor() { }
  ngOnInit() {
  }




}