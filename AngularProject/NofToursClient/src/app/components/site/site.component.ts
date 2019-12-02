import { Component, OnInit } from '@angular/core';
import { CommonSite } from 'src/app/models/site/commonSite';
import { SitesService } from 'src/app/services/sites.service';
@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {
 
 availableSites: CommonSite[];

 selectedSites: CommonSite[];

 draggedSite: CommonSite;

 constructor(private SiteService: SitesService) { }

 ngOnInit() {
     this.selectedSites = [];
     this.SiteService.doGetAllSites().subscribe(response => {
      this.availableSites = response, err => { console.log(err);}
    })
 }

 dragStart(event,site: CommonSite) {
     this.draggedSite = site;
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

}
