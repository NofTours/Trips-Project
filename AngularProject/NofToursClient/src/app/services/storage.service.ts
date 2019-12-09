import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  tokenTestingString = "TokenTestingString";
  constructor() { }

  IsUserLoggedIn(email, token){
    token = this.tokenTestingString;//just for testing

    if (localStorage.getItem("user") == email &&//if this is the same user
        localStorage.getItem("token") == token) //if the user's session did not expire.
    //then -> Authorized to continue
    return true;
    //user is logged in already!!
    else//either different user or token expired -> too much time passed... need relogin.
    return false;
    //* TODO - should check if jwt token is valid.
    //because obviously paaword will not be saved in LocalStorage. 
    //Maybe can use the salted password from the db. 
    
  }


SetNewUserInStorage(email:string, token: string){
  if (!this.IsUserLoggedIn(email, token)){//* if not current user
    localStorage.removeItem("user");
    localStorage.setItem("user", email);
    // localStorage.setItem("token", this.token);
    localStorage.setItem("token", this.tokenTestingString);//TODO - switch to tokens, instead of hardcoded...
    //Here can be added retrieving of all user's trips, etc.
  }
}

}
