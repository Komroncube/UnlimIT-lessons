import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[onlyLetter]',
  standalone: true
})
export class OnlyLetterDirective {

  @HostListener('input', ['$event'])
  input(event: any){
    const target = event.target;
    target.value = target.value.replace(/[^a-zA-Z]/g, '');

  }
}
