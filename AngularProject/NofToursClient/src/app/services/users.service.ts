import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonClient } from "../models/user/CommonClient";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit{
  baseUrl = "http://localhost:55109";
  
  constructor(private http: HttpClient) {
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

  getUserId(email:string): Observable<number>
  {
    return this.http.get<number>(this.baseUrl + "/api/Client/?email="+email);
  }

}
