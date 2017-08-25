import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';


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
  currSelectSite: any;
  manList: [any];

  constructor(
    private modal: ModalService,
    private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.findSite().subscribe((siteList: [any]) => {
      this.siteList = siteList;
    });

    this.apiService.findManWrite().subscribe((manList: [any]) => {
      this.manList = manList;
    });
  }

  switchSite(site) {
    this.currSelectSite = site;

    if (site) {
      let param = new HttpParams({ fromString: 'siteId=' + site.id });
      this.apiService.findMan(param).subscribe((manList: [any]) => {
        this.manList = manList;
      });
    } else {
      this.apiService.findManWrite().subscribe((manList: [any]) => {
        this.manList = manList;
      });
    }
  }

  openArticleSetModal() {
    this.modal.open(ArticleSetComponent, { size: 'large' })
  }

  addManual() {
    const activeModal: ActiveModal = this.modal.open(ManualAddComponent, {
      siteId: this.currSelectSite.id
    });
    activeModal.result.then(() => {
      this.switchSite(this.currSelectSite);
    }, function (reason) {
      console.log('modal dismiss');
    })
  }

}
