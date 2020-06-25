import { Time } from "@angular/common";
import { equipment } from "../equipment/equipment";

export class addedSite{
    
        siteId:number;
        name: string;
        area: string;
        addressGMaps: string;
        price: number;
        description: string;
        openingHour:string;
        closingHour:string;
        category:string;
        estimatedStay:string;// in c# nullable timespan
        equipment:string[];
      
    
    
        constructor(
           name: string,
            area: string,
            addressGMaps:string,
            description:string,
            price:number,
            openingHour:string,
            closingHour:string,
            category:string,
            estimatedStay:string,
            equipment:string[]
        )
        {
            this.name=name;
            this.addressGMaps=addressGMaps;
            this.category=category;
            this.description=description;
            this.estimatedStay=estimatedStay;
            this.openingHour=openingHour;
            this.closingHour=closingHour;
            this.area=area;
            this.price=price;
            this.equipment=equipment;
        }
    
    
}