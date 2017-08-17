import { Component } from '@angular/core';

import { ModalService } from '../../share/modal/modal.service';
import { SiteListComponent } from 'app/admin/site-list/site-list.component';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  constructor(public modal: ModalService) { }
  openSiteListModal() {
    this.modal.open(SiteListComponent, { size: 'large' });
  }

}
