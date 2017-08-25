import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { ModalService } from 'app/share/modal/modal.service';
import { SiteListComponent } from 'app/admin/site-list/site-list.component';
import { ApiService } from 'app/share/api.service';

@Component({
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private modal: ModalService,
    private apiService: ApiService,
    private router: Router,
    @Inject(DOCUMENT) private doc) { }

  ngOnInit() {
    this.doc.body.style.backgroundColor = '#E6E7EC';
  }

  openSiteListModal() {
    this.modal.open(SiteListComponent, { size: 'large' });
  }

  logout() {
    this.apiService.logout().subscribe(() => {
      this.router.navigateByUrl('/welcome/login');
    }, () => {
      this.router.navigateByUrl('/welcome/login');
    });
  }

}
