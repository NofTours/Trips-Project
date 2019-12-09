import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonClient } from "src/app/models/user/CommonClient";
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild("signupForm",{static:false}) form: NgForm;

  constructor(private storageService: StorageService, private route: Router, 
    private webApi: WebApiService) {
    this.newUser = new CommonClient("", "", "", "", "");
    this.validForm = false;
  }
  submitted = false;
  auth = false;
  newUser: CommonClient;
  validForm: boolean;  

  ngOnInit() {
  }

  onSubmitForm() {
    this.validForm = false;
    if (this.form.valid) {
      //this.userService.addUser(this.newUser);//send values to server (through service)
      //this.postUserToServer();
      debugger
      this.webApi.doPostUserById(this.newUser)
      .subscribe(data => {
        console.log(data); 
        if (data == true){
          this.storageService.SetNewUserInStorage(this.newUser.email,"")//should be switched to token from server
          this.route.navigate(['/myTrips', this.newUser.email]);
          //if user found relocate to homepage/mytrips
          this.auth = true;
          this.validForm = true;
          //this.route.navigate(['/admin',this.newUser.contactName]);
        }
        else{
        this.submitted = true;
        this.form.resetForm();
        }
        //this.form.reset();      
      })
    }
  } 
}
