import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[app-top]'
})
export class TopDirective {

  @Input() offset: number;

  @HostBinding('class.active') active: boolean;

  @HostListener('document:scroll') onscroll() {
    let scroll = window.document.body.scrollTop;
    if (scroll < this.offset) {
      this.active = false;
    } else {
      this.active = true;
    }
  }

  @HostListener('click') onclick() {
    window.document.body.scrollTop = 0;
  }

}
