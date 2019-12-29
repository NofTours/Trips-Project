import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { WebApiService } from 'src/app/services/web-api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("signupForm", {static: false}) form: NgForm;
  constructor(private route: Router, private webApi: WebApiService, 
    private storageService: StorageService) { 
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
    debugger;
    this.submitted = true;    
    if (!this.form.invalid) {
      this.webApi.doUserLogin(this.email, this.password) 
        .subscribe(data => {
<<<<<<< HEAD
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
=======
        console.log(data); 
        if (data == true){
          this.storageService.SetNewUserInStorage(this.email,"")//should be switched to token from server          
          this.route.navigate(['/myTrips', this.email]);          
        }
        else{
        debugger
        this.gotResponse = true;
        // this.submitted = false;
        this.email = "";
        this.password = "";
        this.form.reset();
        return;  
        } 
      })
>>>>>>> ba04f082dd63ef3f5b17cc0069ab09cbb0698159
   //this.validForm=true;
  }
  this.validForm = false;
  }


}
