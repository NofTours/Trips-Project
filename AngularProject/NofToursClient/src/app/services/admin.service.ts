import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trip } from '../models/trip/trip';
import { addedSite } from '../models/addedSite/addedSite';
import { equipment } from '../models/equipment/equipment';
import { Observable } from 'rxjs';
import {SelectItem} from 'primeng/api';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = "http://localhost:55109";

  constructor(private http: HttpClient) { }

  viewTrips(dates:Date[])
  {
    return this.http.post<trip[]>(this.baseUrl + "/api/Admin/ViewTrips",dates);
  }
  addSite(site:addedSite)
  {
    debugger
    return this.http.post<Boolean>(this.baseUrl + "/api/Admin",site);
  }

  getEquipment():Observable<equipment[]>
  { debugger
    return this.http.get<equipment[]>(this.baseUrl + "/api/admin");
  }
  
}
