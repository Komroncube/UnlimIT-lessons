import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency',
  standalone: true
})
export class MyCurrencyPipe extends DecimalPipe {

  override transform(value: any, suffix?:string): any {
    let number = super.transform(value);
    if(!number)
    {
      return '';
    }
    number = number.replace(/,/g, ' ');
    if(suffix)
    {
      return number + ' ' + suffix;
    }
    return number;
  }
}
