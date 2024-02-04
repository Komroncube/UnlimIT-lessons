import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-working',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives-working.component.html',
  styleUrl: './directives-working.component.scss'
})
export class DirectivesWorkingComponent {
  isMatn = true;
  items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  stylecss = {color:'blue', fontSize:'20px'};
}
