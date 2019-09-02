import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortStr'
})
export class ShortStrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length>10)
      return value.substr(0,10)+"...";
    return value;
  }

}
