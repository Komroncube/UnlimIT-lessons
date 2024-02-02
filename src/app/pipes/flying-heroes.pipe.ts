import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../components/objects-with-pipes/hero';

@Pipe({
  name: 'flyingHeroes',
  standalone: true,
  pure: true
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(allHeroes:Hero[]): Hero[] {
    return allHeroes.filter(hero => hero.canFly);
  }
}
