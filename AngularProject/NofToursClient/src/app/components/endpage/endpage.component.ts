import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endpage',
  templateUrl: './endpage.component.html',
  styleUrls: ['./endpage.component.css']
})
export class EndpageComponent implements OnInit {

  images: any[];
  constructor() { }
    ngOnInit() {
        this.images = [];
        this.images.push({source:'../../../assets/img/DeerLand Park.jpg', alt:'Description for Image 1', title:'Title 1'});
        this.images.push({source:'../../../assets/img/Ein Gedi.jpg', alt:'Description for Image 2', title:'Title 2'});
        this.images.push({source:'../../../assets/img/Rosh Hanikra.jpg', alt:'Description for Image 5', title:'Title 5'});
        this.images.push({source:'../../../assets/img/bg.png', alt:'Description for Image 6', title:'Title 6'});
    }
}


