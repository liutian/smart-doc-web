import { Component, OnInit } from '@angular/core';

import { ActiveModal } from 'app/share/modal/active-modal';

@Component({
  selector: 'app-manual-add',
  templateUrl: './manual-add.component.html',
  styleUrls: ['./manual-add.component.scss']
})
export class ManualAddComponent implements OnInit {

  logoUploader;
  constructor(private activeModal: ActiveModal) { }

  close() {
    this.activeModal.dismiss('dismiss');
  }

  onLogoFileChange($event) {

  }
  ngOnInit() { }

}
