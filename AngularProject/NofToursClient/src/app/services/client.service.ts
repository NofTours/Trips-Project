import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:55109";

  getClientId(email:string):Observable<number>
  {
    return this.http.get<number>(this.baseUrl + "/api/Client/?email="+email);
  }


}
