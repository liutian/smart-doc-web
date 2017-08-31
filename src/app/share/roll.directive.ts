import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appRoll]',
  exportAs: 'appRoll'
})
export class RollDirective {
  stepSection = [];
  currStepIndex;

  @Input() stepSelector: string;
  @Output() rollTrigger = new EventEmitter<number>();
  @Input() set currStep(index) {
    window.document.body.scrollTop = this.stepSection[index];
  }

  constructor(private ele: ElementRef) { }

  @HostListener('document:scroll', ['$event']) onscroll(e) {
    const scroll = window.document.body.scrollTop;

    for (let i = 0; i < this.stepSection.length; i++) {
      if (scroll < this.stepSection[i]) {
        if (this.currStepIndex === i) {
          return;
        }

        this.rollTrigger.emit(i);
        this.currStepIndex = i;
        return;
      }
    }
  }

  // 外部调用
  public calcSection() {
    this.stepSection.length = 0;
    const stepEleLink = this.ele.nativeElement.querySelectorAll(this.stepSelector);
    Array.from(stepEleLink).forEach((ele: Element) => {
      const section = ele.getBoundingClientRect().top + window.document.body.scrollTop;
      this.stepSection.push(section);
    });

    // this.rollTrigger.emit(0);
  }



}
