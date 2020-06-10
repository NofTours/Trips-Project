import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UsersService } from './users.service';
import { CommonClient } from '../models/user/CommonClient';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public client: BehaviorSubject<CommonClient> = new BehaviorSubject<CommonClient>(new CommonClient(0, "", "", "", "","","",""));

 
}
