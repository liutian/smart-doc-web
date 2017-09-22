import { Directive, HostBinding, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'textarea[appResizeHeight]'
})
export class AutoResizeHeightDirective {
  constructor(private eleRef: ElementRef, private render: Renderer2) { }

  @HostListener('keyup') onchange() {
    const scrollHeight = this.eleRef.nativeElement.scrollHeight;
    if (scrollHeight > +this.eleRef.nativeElement.clientHeight) {
      this.render.setStyle(this.eleRef.nativeElement, 'height', scrollHeight + 'px');
    }
  }
}
