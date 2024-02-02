import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from './hero';
import { FlyingHeroesPipe } from "../../pipes/flying-heroes.pipe";
import { FlyingHeroesImpurePipe } from '../../pipes/flying-heroes-impure.pipe';


@Component({
    selector: 'app-objects-with-pipes',
    standalone: true,
    templateUrl: './objects-with-pipes.component.html',
    styleUrl: './objects-with-pipes.component.scss',
    imports: [FormsModule, CommonModule, FlyingHeroesPipe, FlyingHeroesImpurePipe]
})
export class ObjectsWithPipesComponent {
  value:string="";

  heroes:Hero[]=[]
  canFly = true;
  
  addHero()
  {
    // this.value = this.value.trim()
    console.log(this.value);
    if(!this.value) return;
    const hero = { name:this.value, canFly:this.canFly }
    this.heroes.push(hero);
    this.value = "";
  }
  reset() {this.heroes = this.heroes.slice(0,0)}
}
