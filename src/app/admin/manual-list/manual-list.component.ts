import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


import { ActiveModal } from 'app/share/modal/active-modal';
import { ModalService } from 'app/share/modal/modal.service';
import { ManualSaveComponent } from 'app/admin/manual-save/manual-save.component';
import { ArticleSetComponent } from 'app/admin/article-set/article-set.component';
import { ApiService } from 'app/admin/api.service';
import { SiteSaveComponent } from 'app/admin/site-save/site-save.component';
import { StoreService } from 'app/core/store.service';
import { BroadcastService, Keys } from 'app/core/broadcast.service';
import { ModalConfirmComponent } from 'app/share/modal/modal-confirm/modal-confirm.component';

@Component({
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent implements OnInit {
  siteList: any[];
  selectSite: any;
  manList: [any];
  viewType: string;
  userInfo: any;
  dataTotal = 1;
  dataCurrentPage = 1;
  dataPageSize = 16;

  constructor(
    private broadcastService: BroadcastService,
    private store: StoreService,
    private router: Router,
    private modal: ModalService,
    private route: ActivatedRoute,
    private apiService: ApiService) {
    this.userInfo = this.store.get('userInfo');
  }

  ngOnInit() {
    this.broadcastService.subscribe(Keys.SiteList, () => {
      this.loadData();
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.viewType = params.get('viewType') || 'table';
      this.loadData(params.get('siteId'));
    });
  }

  delMan(item, index) {
    this.modal.open(ModalConfirmComponent, {
      title: '确定删除吗',
      size: 'small'
    }).result.then(bool => {
      if (bool === true) {
        this.apiService.updateMan(item.id, { del: 1 }).subscribe(res => {
          this.manList.splice(index, 1);
        });
      }
    });
  }

  openManEditModal(item) {
    this.modal.open(ManualSaveComponent, {
      manId: item.id,
      size: 'large'
    }).result.then((res) => {
      this.switchSite(this.selectSite, true);
    });
  }

  loadData(siteId?) {
    this.apiService.findSiteAboutMe().subscribe((siteList: [any]) => {
      this.siteList = siteList.map(s => {
        s.own = s.createBy === this.userInfo.id;
        return s;
      });

      if (siteId && this.siteList.find(s => s.id === siteId)) {
        this.switchSite(this.siteList.find(s => s.id === siteId));
      } else if (this.selectSite && this.siteList.find(s => s.id === this.selectSite.id)) {
        this.switchSite(this.selectSite);
      } else if (this.siteList.length > 0) {
        this.switchSite(this.siteList[0]);
      }
    });
  }

  openSiteAddModal() {
    this.modal.open(SiteSaveComponent, { size: 'large' }).result.then((res) => {
      if (res === true) {
        this.loadData();
      }
    });
  }

  switchSite(site, force?) {
    if (this.selectSite === site && !force) {
      return;
    }
    this.selectSite = site;
    this.selectSite.own = this.userInfo.id === site.createBy;

    this.dataCurrentPage = 1;
    this.loadManData();
  }

  goPage(page) {
    this.dataCurrentPage = page;
    this.loadManData();
  }

  openArticleSetModal(man) {
    this.modal.open(ArticleSetComponent, {
      manId: man.id,
      size: 'large'
    });
  }

  addManual() {
    this.modal.open(ManualSaveComponent, {
      siteId: this.selectSite.id,
      size: 'large'
    }).result.then((res) => {
      if (res === true) {
        this.switchSite(this.selectSite, true);
      }
    });
  }

  goMan(man) {
    this.router.navigate(['admin', 'manual', man.id, {
      siteId: this.selectSite.id,
      viewType: this.viewType
    }]);
  }

  private loadManData() {
    const params = new HttpParams({
      fromString: [
        'siteId=' + this.selectSite.id,
        'pageSize=' + this.dataPageSize,
        'page=' + this.dataCurrentPage
      ].join('&')
    });
    this.apiService.findMan(params).subscribe((res: any) => {
      this.manList = res.data;
      this.dataTotal = res.total;
    });
  }
}
