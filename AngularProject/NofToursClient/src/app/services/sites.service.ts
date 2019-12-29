import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonSite } from '../models/site/commonSite';
import { Search } from '../models/Search/Search';


@Injectable({
  providedIn: 'root'
})
export class SitesService {

  sites:CommonSite[];
  parameters:string[];
  constructor(private http: HttpClient) { }

  
  
  baseUrl = "http://localhost:55109";
  
 getAllSites(): Observable<CommonSite[]>
  {
     return this.http.get<CommonSite[]>(this.baseUrl + "/api/Site");   
  }
  getSitesBySearch(searchInfo:Search)
  {
    debugger
    return this.http.post<CommonSite[]>(this.baseUrl + "/api/Site",searchInfo);
  }
}
