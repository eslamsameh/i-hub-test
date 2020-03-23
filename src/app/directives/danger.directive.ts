import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDanger]'
})
export class DangerDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'red';
    el.nativeElement.style.color = '#fff';

 }

}
