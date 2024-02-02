import { Component } from '@angular/core';
import { OnlyLetterDirective } from '../../directives/only-letter.directive';
import { CommonModule } from '@angular/common';
import { MyCurrencyPipe } from "../../pipes/my-currency.pipe";

@Component({
    selector: 'app-best-practices',
    standalone: true,
    templateUrl: './best-practices.component.html',
    styleUrl: './best-practices.component.scss',
    imports: [
        OnlyLetterDirective,
        CommonModule,
        MyCurrencyPipe
    ]
})
export class BestPracticesComponent {

}
