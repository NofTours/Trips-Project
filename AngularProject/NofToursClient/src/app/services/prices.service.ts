import { Injectable } from '@angular/core';
import { prices } from '../models/prices/prices';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  prices:prices[];
  constructor() { 
    this.prices=new Array<prices>();
    this.prices.push(new prices(2,60));
    this.prices.push(new prices(4,45));
    this.prices.push(new prices(6,40));
    this.prices.push(new prices(8,35));
    this.prices.push(new prices(10,30));
  }
  
  getPrices()
  {
    return this.prices;
  }
}
