import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, map, startWith, take } from 'rxjs';

@Component({
  selector: 'app-observable-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './observable-items.component.html',
  styleUrl: './observable-items.component.scss'
})
export class ObservableItemsComponent {
  /**
   *
   */
  constructor() {
    this.message = this.getResendObservable();
  }
  private messages = [
    'First message',
    'Second message',
    'Third message'
  ];
  message: Observable<string>;

  private getResendObservable() {
    return interval(1000).pipe(
      map(i => `Message #${i+1}: ${this.messages[i]}`),
      take(this.messages.length),
      startWith("Waiting for messages"));
  }
  resend() {
    this.message = this.getResendObservable();
  }
}
