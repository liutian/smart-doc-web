import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[app-roll]',
  exportAs: 'appRoll'
})
export class RollDirective {

  @Input() stepSelector: string;
  @Output() rollTrigger = new EventEmitter<number>();
  stepSection = [];
  currStepIndex;

  constructor(private ele: ElementRef) { }

  @Input() set currStep(index) {
    window.document.body.scrollTop = this.stepSection[index];
  }

  calcSection() {
    let that = this;
    this.stepSection.length = 0;
    let stepEleLink = this.ele.nativeElement.querySelectorAll(this.stepSelector);
    Array.from(stepEleLink).forEach(function (ele: Element) {
      let section = ele.getBoundingClientRect().top + window.document.body.scrollTop;
      that.stepSection.push(section);
    })

    this.rollTrigger.emit(0);
  }

  @HostListener('document:scroll', ['$event']) onscroll(e) {
    let scroll = window.document.body.scrollTop;

    for (let i = 0; i < this.stepSection.length; i++) {
      if (scroll < this.stepSection[i]) {
        if (this.currStepIndex === i) return;

        this.rollTrigger.emit(i);
        this.currStepIndex = i;
        return;
      }
    }
  }

}
