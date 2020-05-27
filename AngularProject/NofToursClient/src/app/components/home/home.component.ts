import { Component, OnInit, Input } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isUserLoggedIn:boolean;
  constructor(private dataSharingService: DataSharingService,private route:Router) { 
   

  }
    ngOnInit() {

    }

    move()
    {
      this.dataSharingService.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value; });
        debugger
      if(this.isUserLoggedIn==true)
        this.route.navigate(['/booktrip']);
       else this.route.navigate(['/login']);
    }
  }

