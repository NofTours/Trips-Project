import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { CommonClient } from "../models/user/CommonClient";

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

  doPostUserById(commomClient: CommonClient)
  {        
   debugger 
     this.http.post(this.baseUrl + "/api/Register", commomClient).subscribe(data=>{console.log(data)});
  }

  doUserLogin(email: string, password: string): Observable<Boolean>
  {
    var login = {
      email: email,
      password: password
    }
  return this.http.post<Boolean>(this.baseUrl + "/api/Login", login);    
  }



}
