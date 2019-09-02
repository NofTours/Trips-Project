import { Directive, ElementRef, Renderer, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {
  defaultColor = 'red';
  @Input('appBgColor')
  chosenColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.chosenColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
  }

  constructor(private el: ElementRef, private renderer: Renderer) { 
  }
}

