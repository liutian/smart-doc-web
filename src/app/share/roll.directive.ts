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
    window.document.body.scrollTop = this.stepSection[index] - this.offset;
  }
  @Input() offset = 0;

  private lastScrollTop;

  constructor(private ele: ElementRef) { }

  @HostListener('document:mousewheel', ['$event']) onscroll(e) {
    let scroll = window.document.body.scrollTop;
    const diff = scroll - this.lastScrollTop;
    this.lastScrollTop = scroll;

    if (diff === 0) {
      if (e.wheelDelta < 0 && this.currStepIndex < this.stepSection.length - 1) {
        ++this.currStepIndex;
        this.rollTrigger.emit(this.currStepIndex);
      } else if (e.wheelDelta > 0 && this.currStepIndex > 0) {
        --this.currStepIndex;
        this.rollTrigger.emit(this.currStepIndex);
      }
    } else {
      scroll += this.offset;
      for (let i = this.stepSection.length - 1; i > 0; i--) {
        if (scroll > this.stepSection[i] - 20) {
          if (this.currStepIndex === i) {
            break;
          }

          this.rollTrigger.emit(i);
          this.currStepIndex = i;
          break;
        }
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
