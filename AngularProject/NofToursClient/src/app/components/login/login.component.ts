import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("signupForm", {static: false}) form: NgForm;
  constructor(private route: Router) { 
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
      this.route.navigate(['/admin', this.email]);//server check if username and password are correct - in the future...
   this.auth=true;
   this.validForm=true;
  //route to orderTrip
    }
     
    this.validForm=false;
    return;
    //this.form.reset();      
  }


}
