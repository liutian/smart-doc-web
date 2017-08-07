import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appTop]'
})
export class TopDirective {

  @Input('appTop') offset;

  @HostBinding('style.display') display: string = 'none';

  @HostListener('document:scroll') onscroll() {
    let scroll = window.document.body.scrollTop;
    if (scroll < +this.offset) {
      this.display = 'none';
    } else {
      this.display = 'block';
    }
  }

  @HostListener('click') onclick() {
    window.document.body.scrollTop = 0;
  }

}
