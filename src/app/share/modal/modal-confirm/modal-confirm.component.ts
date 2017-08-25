import {
  Component,
  AfterViewInit,
  AfterViewChecked,
  ViewChild,
  ElementRef
} from '@angular/core';

import { ActiveModal } from '../active-modal';

@Component({
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {

  constructor(private activeModal: ActiveModal) { }

  confirm(bool) {
    this.activeModal.close(bool);
  }

}