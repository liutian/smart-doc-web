import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAffix]'
})
export class AffixDirective {

  @Input('appAffix') offset: number;
  @HostBinding('class.affix') isAffix: boolean;

  @HostListener('document:scroll') onScroll() {
    let scrollTop = window.document.body.scrollTop;
    if (!this.isAffix && (scrollTop + 10) >= +this.offset) {
      this.isAffix = true;
    } else if (this.isAffix && scrollTop <= +this.offset) {
      this.isAffix = false;
    }
  }

}
