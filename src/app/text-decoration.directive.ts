import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextDecoration]'
})
export class TextDecorationDirective {

  constructor(private elm: ElementRef) { 
        this.elm = elm;
    }

    @HostListener('mouseover') onMouseOver() {
        this.elm.nativeElement.setAttribute("style", "text-decoration: underline; font-weight: bold;");
    }

    @HostListener('mouseout') onMouseOut() {
        this.elm.nativeElement.setAttribute("style", "text-decoration: none; font-weight: normal;");
    }

}
