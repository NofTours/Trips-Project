import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonClient } from "../models/user/CommonClient";

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{
  ngOnInit() {
  }

  users: CommonClient[];
  constructor() { 
    this.users=[
    new CommonClient("Raffi", "Raffi@fun.com", "999888765", "", "12mk3n"),
    new CommonClient("Bracha","Bracha@trips.com","3535435435","","ddd9jid"),
    new CommonClient("Sara","Sara@gmail.com","2423222","","ddejESSYk5Y")];
    console.log("Added users successfully: "+ this.users);
   }
   
  @Output() userAdded=new EventEmitter<CommonClient>();
  @Output() userkDeleted=new EventEmitter<CommonClient>()

  getUsers(){
    return this.users;
  }

  addUser(user: CommonClient){
    this.users.push(user);
  }

}
