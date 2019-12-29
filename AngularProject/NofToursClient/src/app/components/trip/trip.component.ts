import { Component, OnInit } from '@angular/core';
import { trip } from 'src/app/models/trip/trip';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CommonSite } from 'src/app/models/site/commonSite';
import { WebApiService } from 'src/app/services/web-api.service';
@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

  trip:trip;
 
  constructor(private webApi: WebApiService) {
   }

  ngOnInit() {
  }
}
