import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

    constructor(private elm: ElementRef) { 
        this.elm = elm;
    }

    @HostListener('mouseover') onMouseOver() {
        this.elm.nativeElement.setAttribute("style", "text-decoration: underline;");
    }

    @HostListener('mouseout') onMouseOut() {
        this.elm.nativeElement.setAttribute("style", "text-decoration: none;");
    }

}
