import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { Session } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  loginHide:boolean; 
  logoutHide:boolean;
  items: MenuItem[];
  isUserLoggedIn: boolean;

  constructor(private route: Router,private dataSharingService: DataSharingService) {
    this.loginHide=false;
    this.logoutHide=true;
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
      this.isUserLoggedIn = value;
  });
  }



  ngOnInit() {
      this.items = [{
          label: 'Actions',
          items: [
              {label: 'View Trips', icon: 'pi pi-fw pi-save',routerLink:"viewTrips"},
              {label: 'Plan New Trip', icon: 'pi pi-fw pi-plus',routerLink:"booktrip"},
              {label: 'logout', icon: 'pi pi-sign-out', command: (event) => {
                
                this.dataSharingService.isUserLoggedIn.next(false);
                sessionStorage.clear();
            },routerLink:"home"}
          ]
      }];
  }

  loginClick()
  {
    // alert("clicked");
    this.loginHide=true;
    this.logoutHide=false;
    this.route.navigate(['/login']);
  }

}
