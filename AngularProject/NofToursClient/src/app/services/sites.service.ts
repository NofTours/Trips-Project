import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonSite } from '../models/site/commonSite';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  sites:CommonSite[];
  constructor(private http: HttpClient) { }

  
  
  baseUrl = "http://localhost:55109";
  
 doGetAllSites(): Observable<CommonSite[]>
  {
     return this.http.get<CommonSite[]>(this.baseUrl + "/api/Site");   
  }
}
