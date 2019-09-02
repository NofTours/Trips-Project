import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonHover]'
})
export class ButtonHoverDirective {
  @Input('appButtonHover')
  textToChange="";
  original="";

  @HostListener('mouseenter') onMouseEnter() {
    this.original=this.textToChange;
    this.Change(this.textToChange||"Hacker");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.ChangeBack(this.original);
  }

  private Change(text: string) {
    this.renderer.setElementProperty(this.el.nativeElement, 'textContent', text.toUpperCase());
  }

  private ChangeBack(text: string) {
    this.renderer.setElementProperty(this.el.nativeElement, 'textContent', text);
  }

  constructor(private el: ElementRef, private renderer: Renderer) { 
  }
}
