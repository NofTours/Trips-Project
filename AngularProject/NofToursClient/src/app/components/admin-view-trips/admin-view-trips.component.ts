import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { trip } from 'src/app/models/trip/trip';
import { SitesService } from 'src/app/services/sites.service';
import { CommonSite } from 'src/app/models/site/commonSite';

@Component({
  selector: 'app-admin-view-trips',
  templateUrl: './admin-view-trips.component.html',
  styleUrls: ['./admin-view-trips.component.css'],
  styles: [`

        .ui-table.ui-table-cars .ui-table-caption.ui-widget-header {
            border: 0 none;
            padding: 12px;
            text-align: left;
            font-size: 20px;
        }

        .ui-column-filter {
            margin-top: 1em;
        }

        .ui-column-filter .ui-multiselect-label {
            font-weight: 500;
        }
        
        .ui-table.ui-table-cars .ui-table-thead > tr > th {
            border: 0 none;
            text-align: left;
        }
        
        .ui-table-globalfilter-container {
            float: right;
            display: inline;
        }

        .ui-table.ui-table-cars .ui-table-tbody > tr > td {
            border: 0 none;
        }

        .ui-table.ui-table-cars .ui-table-tbody .ui-column-title {
            font-size: 16px;
        }

        .ui-table.ui-table-cars .ui-paginator {
            border: 0 none;
            padding: 1em;
        }
    `]
})
export class AdminViewTripsComponent implements OnInit {

  rangeDates: Date[];
  value: Date;
  invalidDates: Array<Date>;
  minDate: Date;
  maxDate: Date;
  selectedDates:Array<Date>;
  trips:trip[];
  cols: any[];
  sites:CommonSite[];
  searchHidden:boolean;
  clearSearchHidden:boolean;
  constructor( private adminService:AdminService, private siteService:SitesService) { 
    this.trips=[];
    this.sites=[];
    this.invalidDates=[];
    this.selectedDates=[];
    let today=new Date();
    this.minDate = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1,);
    this.invalidDates = [today,invalidDate];
    this.searchHidden=false;
    this.clearSearchHidden=true;
  }

  ngOnInit() {
  }

  viewOrderedTrips()
  {
    this.rangeDates.forEach(element => {
      if(element!=null)
      alert(element); 
      })
      this.adminService.viewTrips(this.rangeDates).subscribe(response => {
        response.forEach(element => {//change properties of each element to lowercase in order to fit trip object
          Object.keys(element).forEach(k => {
            const value = element[k];
            delete element[k];
            element[k[0].toLowerCase() + k.slice(1)] = value;
          });
          this.trips.push(element);
        }), err => { console.log(err); }
        this.trips.forEach(element => {
          alert(element.leavingAdrress);

        });
    });
    this.searchHidden=true;
    this.clearSearchHidden=false;
  }

  getTripSites(tripSites:number[])
    {
      debugger;
      this.siteService.getSitesById(tripSites).subscribe(response => {
        this.sites=response, err => { console.log(err);};
       })
      return this.sites;
    }

    clearSearch()
    {         
       this.trips=new Array<trip>();       
        this.searchHidden=false;
        this.clearSearchHidden=true;
    }

}
