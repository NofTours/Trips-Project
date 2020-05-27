import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  baseUrl = "http://localhost:55109";

  constructor(private http: HttpClient) { }

  getDates():Observable<Date[]>
  {
    return this.http.get<Date[]>(this.baseUrl+"/api/Calendar");
  }
 
}
