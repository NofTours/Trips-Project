import { Component, OnInit } from '@angular/core';
import { CommonSite } from 'src/app/models/site/commonSite';
import { SitesService } from 'src/app/services/sites.service';
import { TripService } from 'src/app/services/trip.service';
import { Search } from 'src/app/models/Search/Search';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { Message } from 'primeng/api/message';

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

 calculatedHeight:string;

 showWarn: boolean = false;

 msgs: Message[] = [];

 allSites:CommonSite[];
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
            this.availableSites = response,this.allSites=response, err => { console.log(err);}
          })
     })  
     this.msgs=[];
     this.searchInfo=new Search("none","none","none");
     this.searchHidden=false;
     this.clearSearchHidden=true;
     this.calculatedHeight='375px';
  
  }

 ngOnInit() {
 }

 drop(event) {
    //  if(this.draggedSite.OpeningHour)
     if(this.findIndexInSelectedSites(this.draggedSite)==-1 &&   //Check if site isn't already selected.
        this.draggedSite.Name){
        let draggedSiteIndex = this.findIndexInAvailableSites(this.draggedSite);
        this.selectedSites = [...this.selectedSites, this.draggedSite];       
        this.availableSites = this.availableSites.filter((val,i) => i!=draggedSiteIndex);
        this.calculatedHeight= (Number(this.calculatedHeight.slice
        (0,this.calculatedHeight.length-2)) + 50).toString()+'px'; 
       }
    else
    {
      this.showWarn=true;
      this.msgs.push({severity:'warn', summary:'Notice!', detail:'You have already added this site!'});
    }
                   
     this.draggedSite = null;
 }

 findIndexInAvailableSites(site: CommonSite) {    
    return this.availableSites.findIndex(x=>x.Name===site.Name);
}


 dragEnd(event) {
     this.draggedSite = null;
 }

 dragStart(event,site: CommonSite) {
    this.draggedSite = site;
}
 



dragStart2(event,site: CommonSite) {
    this.draggedSite2 = site;
}

drop2(event:any) {   
    var prevIndex=(this.findIndexInSelectedSites(this.draggedSite2));
    var currentIndex=(this.findIndexByName(event.target.childNodes[0].data));
    this.moveItemInArray(this.selectedSites,prevIndex,currentIndex);
 }
 
findIndexInSelectedSites(site: CommonSite) {
  return this.selectedSites.findIndex(x=>x.Name===site.Name);

}

findIndexByName(name: string) {
  return this.selectedSites.findIndex(x=>x.Name===name);
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
    this.availableSites = response, err => { console.log(err); };
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
      this.availableSites=this.allSites;
  }

  saveSitesToTrip()
  {
    debugger
    this.tripService.saveSitesToTrip(this.selectedSites);
    this.route.navigate(['/trip']);
  }  

  deleteSite(name: string)
  {
    var i:number;
    i=this.findIndexByName(name);      
    this.availableSites.push(this.selectedSites.splice(i,1)[0]);
    this.availableSites = this.availableSites;//to refresh the availableSites dataview
  }
}


