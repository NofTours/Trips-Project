import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonClient } from "../models/user/CommonClient";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Data } from '../models/Data/Data';
import { DataSharingService } from './data-sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{
  baseUrl = "http://localhost:55109";
  data1:boolean;
  data2:boolean;
 
  constructor(private http: HttpClient,private route:Router) {
    this.data1=false;
    this.data2=false;
 
  }
  ngOnInit() {
  }

  registerUser(user: CommonClient){
    return this.http.post<Boolean>(this.baseUrl + "/api/Register", user);
  }

  userLogin(email: string, password: string): Observable<Boolean>
  {
    var login = {
      email: email,
      password: password
    }
  return this.http.post<Boolean>(this.baseUrl + "/api/Login", login) ;    
  }

  getUser(email:string): Observable<CommonClient>
  {
    return this.http.get<CommonClient>(this.baseUrl + "/api/Client/?email="+email);
  }

  getUserById(id:number): Observable<CommonClient>
  {
    debugger
    return this.http.get<CommonClient>(this.baseUrl + "/api/client/GetUserById/?id="+id);
  }

  saveAdrressAndPeople(info:Data)
  {
    this.http.post<boolean>(this.baseUrl+"/api/Client/SaveAddressAndNum",info).subscribe(data => {
      console.log(data);
      if (data == true)
      {
        this.route.navigate(['/sites']);}
      }
      );
  }


}
