import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoExpand]',
  standalone: true
})
export class AutoExpandDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    this.extend();
   }

   @HostListener('input') onInput() {
    this.extend();
   }

   private extend() {
    const element = this.element.nativeElement;
    this.renderer.setStyle(element, 'height', 'auto')
    this.renderer.setStyle(element, 'height', `${element.scrollHeight}px`);

   }

}
