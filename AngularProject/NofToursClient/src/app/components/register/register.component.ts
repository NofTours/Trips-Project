import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonClient } from "src/app/models/user/CommonClient";
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("signupForm",{static:false}) form: NgForm;

  constructor(private userService: UsersService, private route: Router, private webApi: WebApiService) {
    this.newUser = new CommonClient("", "", "", "", "");
    this.validForm = false;
  }
  submitted = false;
  auth = false;
  newUser: CommonClient;
  validForm: boolean;  

  ngOnInit() {
  }

  postUserToServer(){
    // debugger;
    this.webApi.doPostUserById(this.newUser);
    }

  onSubmitForm() {
    this.validForm = false;
    if (this.form.valid) {
      this.userService.addUser(this.newUser);//send values to server (through service)
      this.postUserToServer();
      //if user found relocate to homepage/mytrips
      this.auth = true;
      this.validForm = true;
      sessionStorage.setItem("UserEmail",this.newUser.email);
      this.route.navigate(['/booktrip']);
    }

    this.submitted = true;
    //this.form.reset();      
  }

}
