import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  constructor(private elm: ElementRef) { 
      elm.nativeElement.setAttribute("style", "text-decoration: underline;");
  }

}
