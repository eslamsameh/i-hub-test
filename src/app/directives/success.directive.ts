import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSuccess]'
})
export class SuccessDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'green';
    el.nativeElement.style.color = '#fff';

 }

}
