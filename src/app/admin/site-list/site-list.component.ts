import { Component, OnInit } from '@angular/core';

import { ModalService } from 'app/share/modal/modal.service';
import { ActiveModal } from 'app/share/modal/active-modal';
import { SiteAddComponent } from 'app/admin/site-add/site-add.component';
import { ApiService } from 'app/admin/api.service';
import { ModalConfirmComponent } from 'app/share/modal/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  siteList: [any];

  constructor(
    private modal: ModalService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.load();
  }

  openSiteAddModal() {
    this.modal.open(SiteAddComponent).result.then((res) => {
      if (res) this.load();
    })
  }

  del(site, index) {
    this.modal.open(ModalConfirmComponent, {
      title: '确定删除吗',
      size: 'small'
    }).result.then(bool => {
      if (bool !== true) return;

      this.apiService.updateSite(site.id, { del: 1 }).subscribe(() => {
        this.siteList.splice(index, 1);
      });
    });
  }

  private load() {
    this.apiService.findSite().subscribe((siteList: [any]) => {
      this.siteList = siteList;
    })
  }

}
