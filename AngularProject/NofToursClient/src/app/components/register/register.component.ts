import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonClient } from "src/app/models/user/CommonClient";
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("signupForm",{static:false}) form: NgForm;

  constructor(private userService: UsersService, private route: Router,private dataSharingService: DataSharingService) {
    this.newUser = new CommonClient(0, "", "", "", "","","","");
    this.validForm = false;
  }
  submitted = false;
  auth = false;
  newUser: CommonClient;
  validForm: boolean;  
  client:CommonClient;
  ngOnInit() {
    sessionStorage.clear();
  }

  onSubmitForm() {
    this.validForm = false;
    if (this.form.valid) {
      this.userService.registerUser(this.newUser)    
      .subscribe(data => {
        console.log(data);
        if (data == true)
        {
          sessionStorage.setItem("UserEmail",this.newUser.Email);
          this.auth = true;
          this.validForm = true;
          this.dataSharingService.isUserLoggedIn.next(true);
          debugger
          this.userService.getUser(sessionStorage.getItem("UserEmail")).subscribe(response => {
            this.client=response, this.dataSharingService.client.next(this.client);
            this.route.navigate(['/booktrip']),err => { console.log(err);}
          });
         //* TODO create correct link to MyTrips page   
        }                     
        // else{
        // this.gotResponse = true;
        // this.email = "";
        // this.password = "";
        // this.form.reset();
        // return;   
        // }     
      })
    
    }
  } 
}
