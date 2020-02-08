import { Component, OnInit } from '@angular/core';
import { CommonSite } from 'src/app/models/site/commonSite';
import { SitesService } from 'src/app/services/sites.service';
import { TripService } from 'src/app/services/trip.service';
import { Search } from 'src/app/models/Search/Search';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

//import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';

 interface area {
    name: string;
  }
  
 interface category {
    name: string;
  }
 
  
  @Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})

export class SiteComponent implements OnInit {
 
 availableSites: CommonSite[];

 selectedSites: CommonSite[];

 draggedSite: CommonSite;

 draggedSite2: CommonSite;

 areas:area[];

 categories:category[];

 searchInfo:Search;

 called:number;

 searchHidden:boolean;

 clearSearchHidden:boolean;
 
 constructor(private route: Router,private siteService: SitesService,private tripService: TripService) {
    this.areas=[
        {name: 'North'},
        {name: 'South'},
        {name: 'East'},
        {name: 'West'}
      ];
    this.siteService.getCategories().subscribe(response => {
        this.categories=[];
        response.forEach(element => {
           this.categories.push({name:element})}) ,err => { console.log(err);}
           
           this.selectedSites = [];
           this.siteService.getAllSites().subscribe(response => {
            this.availableSites = response, err => { console.log(err);}
          })
     })  
     
     this.searchInfo=new Search("none","none","none");
     this.searchHidden=false;
     this.clearSearchHidden=true;
  
  }

 ngOnInit() {
 }

 drop(event) {
     if(this.draggedSite) {
         let draggedSiteIndex = this.findIndex(this.draggedSite);
         this.selectedSites = [...this.selectedSites, this.draggedSite];// whats ...?
         this.availableSites = this.availableSites.filter((val,i) => i!=draggedSiteIndex);
         this.draggedSite = null;
     }
 }

 dragEnd(event) {
     this.draggedSite = null;
 }

 dragStart(event,site: CommonSite) {
    this.draggedSite = site;
}
 findIndex(site: CommonSite) {
     let index = -1;
     for(let i = 0; i < this.availableSites.length; i++) {
         if(site.Name === this.availableSites[i].Name) {
             index = i;
             break;
         }
     }
     return index;
 }




dragStart2(event,site: CommonSite) {
    this.draggedSite2 = site;
}

findIndex2(site: CommonSite) {
   let index = -1;
   for(let i = 0; i < this.selectedSites.length; i++) {
       if(site.Name === this.selectedSites[i].Name) {
           index = i;
           break;
       }
   }
   return index;
}

findIndexByName(name: string) {
    let index = -1;
    for(let i = 0; i < this.selectedSites.length; i++) {
        if(name === this.selectedSites[i].Name) {
            index = i;
            break;
        }
    }
    return index;
}
 cdkdrop(event:any) {   
    var prevIndex=(this.findIndex2(this.draggedSite2));
    var currentIndex=(this.findIndexByName(event.target.childNodes[0].data));
    this.moveItemInArray(this.selectedSites,prevIndex,currentIndex);
 }
  
  moveItemInArray(array:CommonSite[],index1:number,index2:number)
  {
      var site:CommonSite;
      site=array[index1];
      array[index1]=array[index2];
      array[index2]=site;
  }

  changeArea(event: any)
  {
      this.searchInfo.Area=event.value.name;
  }
  
  changeCategory(event: any)
  {
      this.searchInfo.Category=event.value.name;
  }
  search()
  {
    this.siteService.getSitesBySearch(this.searchInfo).subscribe(response => {
    this.availableSites = response, err => { console.log(err);};
   })
   this.searchHidden=true;
   this.clearSearchHidden=false;
  }

  clearSearch()
  {
     
      this.searchInfo.Area="none";
      this.searchInfo.Category="none";
      this.searchHidden=false;
      this.clearSearchHidden=true;
  }

  saveSitesToTrip()
{
    
    this.tripService.saveSitesToTrip(this.selectedSites);
    // alert(this.tripService.getTripBeginTime()+this.tripService.getTripBookingStatus()+this.tripService.getTripTotalTripHours());
    this.route.navigate(['/trip']);
}  
}


