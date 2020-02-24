import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from './users.service';
import { CommonClient } from '../models/user/CommonClient';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public client: BehaviorSubject<CommonClient> = new BehaviorSubject<CommonClient>(new CommonClient(0, "", "", "", "","","",""));
  // client:CommonClient;
  constructor(private userService:UsersService)  {
    // debugger
    // this.userService.getUser(sessionStorage.getItem("UserEmail")).subscribe(response => {
    //   this.client=response,err => { console.log(err);}
    // });
  }
  // getClientFromServer()
  // {
    
  //   this.userService.getUser(sessionStorage.getItem("UserEmail")).subscribe(response => {
  //     debugger
  //     this.client=response,err => { console.log(err);}
  //   });
    
  // }
  // getClient()
  // {
  //   return this.client;
  // }
}
