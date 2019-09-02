import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appWarning]'
})
export class WarningDirective {

  constructor(private el: ElementRef, private renderer: Renderer) { 
    renderer.setElementStyle(el.nativeElement, 'color', 'red');
    renderer.setElementStyle(el.nativeElement, 'font-style', 'italic');
    renderer.setElementStyle(el.nativeElement, 'font-weight', '400');    
  }

}
