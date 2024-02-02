import { Component } from '@angular/core';
import { ExponentialBoosterPipe } from "../../pipes/exponential-booster.pipe";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ObjectsWithPipesComponent } from '../../components/objects-with-pipes/objects-with-pipes.component';

@Component({
    selector: 'app-playground',
    standalone: true,
    templateUrl: './playground.component.html',
    styleUrl: './playground.component.scss',
    imports: [ExponentialBoosterPipe, CommonModule, FormsModule, ObjectsWithPipesComponent]
})
export class PlaygroundComponent {
    toggle = true;
    /**
     * @description This method is used to toggle the format of the date
     */
    toggleFormat() {
        this.toggle = !this.toggle;
    }
    /**
     * @description This property is used to get the format of the date
     */
    get format() { return this.toggle ? 'mediumDate' : 'fullDate'; }
    birthday = new Date(2003, 7, 7);

    today = new Date();

    digit:number|null|undefined;
    power:number|null|undefined;
}
