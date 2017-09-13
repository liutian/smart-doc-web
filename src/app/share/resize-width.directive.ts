import { Directive, HostBinding, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResizeWidth]'
})
export class ResizeWidthDirective {
  private defaultWidth = 1;
  constructor(private eleRef: ElementRef) { }

  @HostBinding('style.width.em') width = this.defaultWidth;

  @HostListener('focus') onFocus() {
    this.calcWidth(this.eleRef.nativeElement.value);
  }

  @HostListener('keyup') onKeyup() {
    this.calcWidth(this.eleRef.nativeElement.value);
  }

  calcWidth(value) {
    if (!value) {
      return;
    }

    this.width = value.length + 1;
    if (this.width < this.defaultWidth) {
      this.width = this.defaultWidth;
    }
  }
}
