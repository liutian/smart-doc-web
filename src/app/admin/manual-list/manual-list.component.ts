import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


import { ActiveModal } from 'app/share/modal/active-modal';
import { ModalService } from 'app/share/modal/modal.service';
import { ManualAddComponent } from 'app/admin/manual-add/manual-add.component';
import { ArticleSetComponent } from 'app/admin/article-set/article-set.component';
import { ApiService } from 'app/admin/api.service';
import { SiteAddComponent } from 'app/admin/site-add/site-add.component';
import { StoreService } from 'app/core/store.service';
import { BroadcastService, Keys } from 'app/core/broadcast.service';

@Component({
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent implements OnInit {

  public siteList: any[];
  selectSite: any;
  manList: [any];

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

  loadData(siteId?) {
    this.apiService.findSiteAboutMe().subscribe((siteList: [any]) => {
      const user = this.store.get('userInfo');
      this.siteList = siteList.map(s => {
        s.own = s.createBy === user.id;
        return s;
      });

      if (siteId && this.siteList.find(s => s.id === siteId)) {
        this.switchSite(this.siteList.find(s => s.id === siteId));
      }
    });
  }

  openSiteAddModal() {
    this.modal.open(SiteAddComponent).result.then((res) => {
      if (res) {
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
    this.modal.open(ManualAddComponent, {
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
