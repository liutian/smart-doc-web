import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[app-affix]'
})
export class AffixDirective {

  @Input() offset: number;
  @HostBinding('class.affix') isAffix: boolean;

  @HostListener('document:scroll') onScroll() {
    const scrollTop = window.document.body.scrollTop;
    if (!this.isAffix && (scrollTop + 10) >= +this.offset) {
      this.isAffix = true;
    } else if (this.isAffix && scrollTop <= +this.offset) {
      this.isAffix = false;
    }
  }

}
