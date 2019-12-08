export interface CommonSite
{
    Name: string;
    Area: string;
    AddressGMaps: string;
    Price: number;
    Description: string;
    OpeningHour:string;
    ClosingHour:string;
    Category:string;
    EstimatedStay:string;// in c# nullable timespan
    Equipment:string[];
    // equipment?
    // tripCommonSite?
}

//     constructor(
//        Name: string,
//         area: string,
//         addressGMaps:string,
//         description:string,
//         price:number,
//         openingHour:string,
//         closingHour:string,
//         category:string,
//         estimatedStay:string
//     )
//     {
//         this.name=name;
//         this.addressGMaps=addressGMaps;
//         this.category=category;
//         this.description=description;
//         this.estimatedStay=estimatedStay;
//         this.openingHour=openingHour;
//         this.closingHour=closingHour;
//         this.area=area;
//         this.price=price;
//     }

// }