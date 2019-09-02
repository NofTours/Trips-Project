import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonClient } from "src/app/models/user/CommonClient";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user : CommonClient;
  constructor() { }
  
  @Output() userAdded=new EventEmitter<CommonClient>();
  @Output() userDeleted=new EventEmitter<CommonClient>();

  ngOnInit() {
  }
  OnUserAdd(){
    this.userAdded.emit(this.user);
    //console.log('user' + this.user.contactName + 'added..');
  }
  OnUserDelete(){
    this.userDeleted.emit(this.user);
    //console.log('user' + this.user.contactName + 'deleted..');
  }
  
}
