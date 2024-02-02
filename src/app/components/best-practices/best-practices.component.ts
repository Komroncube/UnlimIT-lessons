import { Component } from '@angular/core';
import { OnlyLetterDirective } from '../../directives/only-letter.directive';

@Component({
  selector: 'app-best-practices',
  standalone: true,
  imports: [OnlyLetterDirective],
  templateUrl: './best-practices.component.html',
  styleUrl: './best-practices.component.scss'
})
export class BestPracticesComponent {

}
