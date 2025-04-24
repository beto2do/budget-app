import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[budgetOrangeColor]',
})
export class OrangeColorDirective {
  private el = inject(ElementRef);

  constructor() {
    this.el.nativeElement.classList.add('text-orange-500');
  }
}
