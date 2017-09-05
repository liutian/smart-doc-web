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

  public siteList: any[];
  selectSite: any;
  manList: [any];
  viewType = 'list';

  constructor(
    private broadcastService: BroadcastService,
    private store: StoreService,
    private router: Router,
    private modal: ModalService,
    private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.broadcastService.subscribe(Keys.SiteList, () => {
      this.loadData();
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const siteId = params.get('siteId');

      this.loadData(siteId);
    });
  }

  delMan(item, index) {
    this.modal.open(ModalConfirmComponent, {
      title: '确定删除吗',
      size: 'small'
    }).result.then(bool => {
      if (bool) {
        this.apiService.updateMan(item.id, { del: 1 }).subscribe(res => {
          this.manList.splice(index, 1);
        });
      }
    });
  }

  openManEditModal(item) {
    this.modal.open(ManualSaveComponent, { manId: item.id }).result.then((res) => {
      this.switchSite(this.selectSite, true);
    });
  }

  loadData(siteId?) {
    this.apiService.findSiteAboutMe().subscribe((siteList: [any]) => {
      const user = this.store.get('userInfo');
      this.siteList = siteList.map(s => {
        s.own = s.createBy === user.id;
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
    this.modal.open(SiteSaveComponent).result.then((res) => {
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

    const param = new HttpParams({ fromString: 'siteId=' + this.selectSite.id });
    this.apiService.findMan(param).subscribe((manList: [any]) => {
      this.manList = manList;
    });
  }

  openArticleSetModal(man) {
    this.modal.open(ArticleSetComponent, { size: 'large', manId: man.id });
  }

  addManual() {
    this.modal.open(ManualSaveComponent, {
      siteId: this.selectSite.id
    }).result.then((res) => {
      if (res === true) {
        this.switchSite(this.selectSite, true);
      }
    });
  }

  goMan(man) {
    this.router.navigate(['admin', 'manual', man.id, {
      siteId: this.selectSite.id
    }]);
  }

}
