import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialBooster',
  standalone: true
})
export class ExponentialBoosterPipe implements PipeTransform {

  transform(value: number, exponent:number = 1): unknown {
    return Math.pow(value, exponent)
  }

}
