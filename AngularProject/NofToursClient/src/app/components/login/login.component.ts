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
  email:string;
  password:string;
  validForm:boolean;
  submitted = false;
  gotResponse = false;

  ngOnInit() {
  }

  onSubmitForm(){
    this.submitted = true;    
    if (!this.form.invalid) {
      this.webApi.doUserLogin(this.email, this.password)//* Check in server if email & password are correct
        .subscribe(data => {
          console.log(data);
          if (data == true)
          {
            sessionStorage.setItem("UserEmail",this.email);
            this.route.navigate(['/booktrip']);//* TODO create correct link to MyTrips page   
          }                     
          else{
          this.gotResponse = true;
          this.email = "";
          this.password = "";
          this.form.reset();
          return;   
          }     
        })
   //this.validForm=true;
  }
  this.validForm = false;
  }


}
