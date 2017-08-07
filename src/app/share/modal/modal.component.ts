import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from '@angular/core';

import { ActiveModal } from './modal.service';

@Component({
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  public show = false;
  @ViewChild('backdrop') backdropRef: ElementRef;
  constructor(public activeModal: ActiveModal) {
  }

  close(e, force?) {
    if (e.target === this.backdropRef.nativeElement || force) {
      this.show = false;
      window.setTimeout(() => {
        this.activeModal.close('backdrop');
      }, 300);
    }
  }

  ngAfterViewInit() {
    window.setTimeout(() => this.show = true, 100);
  }

}