import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { ModalService } from 'app/share/modal/modal.service';
import { SiteListComponent } from 'app/admin/site-list/site-list.component';
import { ApiService } from 'app/core/api.service';
import { StoreService } from 'app/core/store.service';
import { UserEditComponent } from 'app/admin/user-edit/user-edit.component';
import { BroadcastService, Keys } from 'app/core/broadcast.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  userInfo: any;

  constructor(
    private broadcastService: BroadcastService,
    private modal: ModalService,
    private apiService: ApiService,
    private router: Router,
    private store: StoreService,
    @Inject(DOCUMENT) private doc) { }

  ngOnInit() {
    this.userInfo = this.store.get('userInfo');
    this.doc.body.style.backgroundColor = '#E6E7EC';
  }

  openSiteListModal() {
    this.modal.open(SiteListComponent, { size: 'large', backdrop: false }).result.then(result => {
      if (result === true) {
        this.broadcastService.emit(Keys.SiteList);
      }
    });
  }

  openUserEditModal() {
    this.modal.open(UserEditComponent).result.then((result) => {
      if (result === true) {
        this.userInfo = this.store.get('userInfo');
      }
    });
  }

  logout() {
    this.apiService.logout().subscribe(() => {
      this.router.navigateByUrl('/welcome/login');
    }, () => {
      this.router.navigateByUrl('/welcome/login');
    });
  }

}
