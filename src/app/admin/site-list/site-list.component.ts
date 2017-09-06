import { Component, OnInit } from '@angular/core';

import { ModalService } from 'app/share/modal/modal.service';
import { ActiveModal } from 'app/share/modal/active-modal';
import { SiteSaveComponent } from 'app/admin/site-save/site-save.component';
import { ApiService } from 'app/admin/api.service';
import { ModalConfirmComponent } from 'app/share/modal/modal-confirm/modal-confirm.component';

@Component({
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {
  siteList: [any];
  private listChange = false;

  constructor(
    private activeModal: ActiveModal,
    private modal: ModalService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.load();
  }

  close() {
    this.activeModal.close(this.listChange);
  }

  switchType(item) {
    const params = { type: item.type ? 0 : 1 };
    this.apiService.updateSite(item.id, params).subscribe(() => {
      // this.listChange = true;
      item.type = params.type;
    });
  }

  openSiteAddModal() {
    this.modal.open(SiteSaveComponent).result.then((res) => {
      if (res === true) {
        this.load();
        this.listChange = true;
      }
    });
  }

  openSiteEditModal(item) {
    this.modal.open(SiteSaveComponent, { siteId: item.id }).result.then((res) => {
      if (res === true) {
        this.load();
        this.listChange = true;
      }
    });
  }

  del(site, index) {
    this.modal.open(ModalConfirmComponent, {
      title: '确定删除吗',
      size: 'small'
    }).result.then(bool => {
      if (bool !== true) {
        return;
      }

      this.apiService.updateSite(site.id, { del: 1 }).subscribe(() => {
        this.siteList.splice(index, 1);
        this.listChange = true;
      });
    });
  }

  private load() {
    this.apiService.findSite().subscribe((siteList: [any]) => {
      this.siteList = siteList;
    });
  }

}
