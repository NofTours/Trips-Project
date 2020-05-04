import { Component, OnInit } from '@angular/core';
import { prices } from 'src/app/models/prices/prices';
import { PricesService } from 'src/app/services/prices.service';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.css']
})
export class PriceTableComponent implements OnInit {

  pricesInfo:prices[];
  constructor(private pricesService: PricesService) { 
    this.pricesInfo=new Array<prices>();
   this.pricesInfo=this.pricesService.getPrices();
  }

  ngOnInit() {
  }

  getPrevious(price:prices)
  {
    var index:number;
    index=this.pricesInfo.indexOf(price);
    if(index==0)
    return 0;
    // if(index==4)
    // return '10 +';
    else return this.pricesInfo[index-1].numOfPeople;
  }
}
