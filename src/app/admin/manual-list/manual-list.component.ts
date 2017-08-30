import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


import { ActiveModal } from 'app/share/modal/active-modal';
import { ModalService } from 'app/share/modal/modal.service';
import { ManualAddComponent } from 'app/admin/manual-add/manual-add.component';
import { ArticleSetComponent } from 'app/admin/article-set/article-set.component';
import { ApiService } from 'app/admin/api.service';

@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent implements OnInit {

  public siteList: [any];
  selectSiteId: any;
  manList: [any];

  constructor(
    private router: Router,
    private modal: ModalService,
    private route: ActivatedRoute,
    private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const siteId = params.get('siteId');

      this.apiService.findSite().subscribe((siteList: [any]) => {
        this.siteList = siteList;
      });

      if (siteId) {
        this.switchSite(params.get('siteId'));
      } else {
        this.apiService.findManWrite().subscribe((manList: [any]) => {
          this.manList = manList;
        });
      }

    });
  }

  switchSite(siteId) {
    this.selectSiteId = siteId;

    if (siteId) {
      const param = new HttpParams({ fromString: 'siteId=' + siteId });
      this.apiService.findMan(param).subscribe((manList: [any]) => {
        this.manList = manList;
      });
    } else {
      this.apiService.findManWrite().subscribe((manList: [any]) => {
        this.manList = manList;
      });
    }
  }

  openArticleSetModal(man) {
    this.modal.open(ArticleSetComponent, { size: 'large', manId: man.id });
  }

  addManual() {
    const activeModal: ActiveModal = this.modal.open(ManualAddComponent, {
      siteId: this.selectSiteId
    });
    activeModal.result.then(() => {
      this.switchSite(this.selectSiteId);
    }, function (reason) {
    });
  }

  goMan(man) {
    this.router.navigate(['admin', 'manual', man.id, {
      siteId: this.selectSiteId ? this.selectSiteId : ''
    }]);
  }

}
