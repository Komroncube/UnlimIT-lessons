import { Pipe, PipeTransform } from '@angular/core';

/**
 * @description This pipe is used to boost the value of a number by an exponent
 * @example <div>{{ 2 | exponentialBooster: 3 }}</div>
 */
@Pipe({
  name: 'exponentialBooster',
  standalone: true
})
export class ExponentialBoosterPipe implements PipeTransform {
  transform(value: number, exponent:number = 1): number {
    return Math.pow(value, exponent)
  }

}
