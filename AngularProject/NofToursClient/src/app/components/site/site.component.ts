import { Component, OnInit } from '@angular/core';
import { CommonSite } from 'src/app/models/site/commonSite';
import { SitesService } from 'src/app/services/sites.service';
//import { moveItemInArray, CdkDragDrop } from '@angular/cdk/drag-drop';
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
  

 constructor(private SiteService: SitesService) {
  }

 ngOnInit() {
     this.selectedSites = [];
     this.SiteService.doGetAllSites().subscribe(response => {
      this.availableSites = response, err => { console.log(err);}
    })
 }

 drop(event) {
     if(this.draggedSite) {
         let draggedSiteIndex = this.findIndex(this.draggedSite);
         this.selectedSites = [...this.selectedSites, this.draggedSite];// whats ...?
         debugger
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
    //debugger
    var prevIndex=(this.findIndex2(this.draggedSite2));
    //alert("prev"+ prevIndex);
    var currentIndex=(this.findIndexByName(event.target.childNodes[0].data));
    //alert("cur"+ currentIndex);
    this.moveItemInArray(this.selectedSites,prevIndex,currentIndex);
    for(let i = 0; i < this.selectedSites.length; i++) {
        //alert(i+" "+ this.selectedSites[i].Name);
    }
    ///alert("after move"+this.selectedSites[0].Name+ this.selectedSites[1].Name);
  }
  
  moveItemInArray(array:CommonSite[],index1:number,index2:number)
  {
      var site:CommonSite;
      site=array[index1];
      array[index1]=array[index2];
      array[index2]=site;
  }

}
