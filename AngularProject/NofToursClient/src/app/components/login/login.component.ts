import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { CommonClient } from 'src/app/models/user/CommonClient';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("signupForm", {static: false}) form: NgForm;
  constructor(private route: Router, private userService: UsersService,private dataSharingService: DataSharingService  ) { 
    this.email="";
    this.password="";
    this.validForm = false;
    this.client=new CommonClient(0, "", "", "", "","","","");
  }
  email:string;
  password:string;
  validForm:boolean;
  submitted = false;
  gotResponse = false;
  client:CommonClient;
  ngOnInit() {
  }

  onSubmitForm(){
    // alert("in login submit");
    this.submitted = true;    
    if (!this.form.invalid) {
      this.userService.userLogin(this.email, this.password) 
        .subscribe(data => {
          console.log(data);
          if (data == true)
          {
            sessionStorage.setItem("UserEmail",this.email);
            this.dataSharingService.isUserLoggedIn.next(true);
            this.userService.getUser(sessionStorage.getItem("UserEmail")).subscribe(response => {
              this.client=response,this.dataSharingService.client.next(this.client);
              debugger;
              if(this.client.ContactName=="admin")              
              this.route.navigate(['/viewAdmin']);
              else this.route.navigate(['/booktrip']),err => { console.log(err);}
            });
            ;//* TODO create correct link to MyTrips page   
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
