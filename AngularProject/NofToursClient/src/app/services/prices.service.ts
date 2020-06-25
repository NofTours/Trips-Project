import { Injectable } from '@angular/core';
import { prices } from '../models/prices/prices';

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  prices:prices[];
  constructor() { 
    this.prices=new Array<prices>();
    this.prices.push(new prices(7,180));
    this.prices.push(new prices(13,340));
    this.prices.push(new prices(19,410));
    this.prices.push(new prices(22,445));
  }
  
  getPrices()
  {
    return this.prices;
  }
}
