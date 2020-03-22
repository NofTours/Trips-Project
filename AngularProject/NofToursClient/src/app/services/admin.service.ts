import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trip } from '../models/trip/trip';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = "http://localhost:55109";

  constructor(private http: HttpClient) { }

  viewTrips(dates:Date[])
  {
    return this.http.post<trip[]>(this.baseUrl + "/api/Admin",dates);
  }
  
}
