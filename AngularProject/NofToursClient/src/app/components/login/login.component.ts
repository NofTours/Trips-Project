import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WebApiService } from 'src/app/services/web-api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("signupForm", {static: false}) form: NgForm;
  constructor(private route: Router, private webApi: WebApiService) { 
    this.email="";
    this.password="";
    this.validForm = false;
  }
  email:String;
  password:String;
  validForm:boolean;
  submitted = false;
  auth=false;

  ngOnInit() {
  }

  onSubmitForm(){
    this.submitted = true;
  if (!this.form.invalid) {
    if(this.webApi.doUserLogin(this.email, this.password))//* Check in server if email & password are correct
      this.route.navigate(['/MyTrips', this.email]);//* TODO create correct link to MyTrips page
    else this.auth = false;
   this.auth=true;
   //this.validForm=true;
    }
     
    this.validForm=false;
    return;
    //this.form.reset();      
  }


}
