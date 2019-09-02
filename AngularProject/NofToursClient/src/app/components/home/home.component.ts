import { Component, OnInit, Input } from '@angular/core';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getUsersFromServer: string[];
  toUpperValueFromServer: string; 
  getValue: string; 
  getId: number;  
  postId: number;
  @Input()
  getUserByIdFromServer: string;
  @Input()
  postUserByIdFromServer: string;
  postAll = "true";


  constructor(private webApi: WebApiService) { 
    this.getId = 0;
    this.postId = 0;
  }

  
  ngOnInit() {
    this.webApi.doGetAllUsers().subscribe(response => {
      this.getUsersFromServer = response, err => { console.log(err);}
    })
  }

  getUserById(){
    this.webApi.doGetUserById(this.getId).subscribe(response => {
      this.getUserByIdFromServer = response, err => { console.log(err);}
    })
  }

  // postUserById(){
  //   this.webApi.doPostUserById(this.postId).subscribe(response => {
  //     this.postUserByIdFromServer = response, err => { console.log(err);}
  //   })
  // }

  getUpperCaseValue(){
    this.webApi.doGetValueToUppercase(this.getValue).subscribe(response => {
      this.toUpperValueFromServer = response, err => { console.log(err);}
    })
  }

  getUsers(){
    return this.getUsersFromServer;
  }
}
