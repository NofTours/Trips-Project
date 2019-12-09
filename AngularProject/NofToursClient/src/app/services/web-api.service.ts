import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { CommonClient } from "../models/user/CommonClient";
import { trip } from '../models/trip/trip';


@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  constructor(private http: HttpClient) {
   }

  baseUrl = "http://localhost:55109";
  
  doGetAllUsers(): Observable<string[]>
  {
     return this.http.get<string[]>(this.baseUrl + "/api/Register")
  }

  doGetUserById(id: number): Observable<string>
  {    
    return this.http.get<string>(this.baseUrl + "/api/Register?id=" + id);
  }

  doGetValueToUppercase(value: String): Observable<string>
  {
    if(value!="")
      return this.http.get<string>(this.baseUrl + "/api/Register?value=" + value);
    return this.http.get<string>(this.baseUrl + "/api/Register?value=" + "value");
  }

  doPostUserById(commomClient: CommonClient): Observable<Boolean>
  {        
   debugger 
   return this.http.post<Boolean>(this.baseUrl + "/api/Register", commomClient);
  }

  doUserLogin(email: string, password: string): Observable<Boolean>
  {
    var login = {
      email: email,
      password: password
    }
  return this.http.post<Boolean>(this.baseUrl + "/api/Login", login);    
  }

  doTripSave(trip: trip)
  {
    return this.http.post<Boolean>(this.baseUrl + "/api/Trips", trip);
  }
}
