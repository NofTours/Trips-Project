import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(usersList: any[], term: string): any {
    return usersList.filter(user=> user.getContactName().toUpperCase().indexOf(term.toUpperCase())!=-1);
  }

}
