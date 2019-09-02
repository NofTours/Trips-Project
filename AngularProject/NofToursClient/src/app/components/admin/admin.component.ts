import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonClient } from "../../models/user/CommonClient";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  user ="";
  longBoringInfo="This is lots of boring information to be made short using a pipe.";
  users: CommonClient[];
  search:string;
  userAdded1:CommonClient;
  userDeleted1:CommonClient;


  constructor(private route: ActivatedRoute, private userService:UsersService) {   
     this.search="";  
  }

  ngOnInit() {
    this.users=this.userService.getUsers(); 
    console.log(this.users);
    this.route.params.subscribe((params) => {this.user = params.user;
    console.log(params);});
  }

  onAdded(userName: CommonClient)
  {
    this.userAdded1=userName;
    //console.log(this.userAdded1);
  }

  onDeleted(userName: CommonClient)
  {
    this.userDeleted1=userName;
    //console.log(this.userDeleted1);
  }
}
