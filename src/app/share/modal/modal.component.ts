import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from '@angular/core';

import { ActiveModal } from './active-modal';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  public show = false;

  @ViewChild('backdrop') backdropRef: ElementRef;

  constructor(public activeModal: ActiveModal) { }

  close(e) {
    if (e.target === this.backdropRef.nativeElement) {
      this.show = false;
      window.setTimeout(() => {
        this.activeModal.close('backdrop');
      }, 300);
    }
  }

  backdropClick(e) {
    if (this.activeModal.option.backdrop) {
      this.close(e);
    }
  }

  ngAfterViewInit() {
    window.setTimeout(() => this.show = true, 100);
  }

}
