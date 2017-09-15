import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

import { ApiService } from 'app/admin/api.service';
import { ActiveModal } from 'app/share/modal/active-modal';
import { NotificationService } from 'app/core/notification/notification.service';

@Component({
  templateUrl: './article-set.component.html',
  styleUrls: ['./article-set.component.scss']
})
export class ArticleSetComponent implements OnInit {
  articleList;

  constructor(
    private notificationService: NotificationService,
    private apiService: ApiService,
    private activeModal: ActiveModal) { }

  ngOnInit() {
    this.apiService.findArticle(
      new HttpParams().set('manId', this.activeModal.option.manId)
    ).subscribe((res: [any]) => {
      this.articleList = res.map(a => {
        return {
          id: a.id,
          name: a.title,
          parentId: a.parentId
        };
      });

    });
  }

  close() {
    this.activeModal.close('close');
  }

  articleDel(e) {
    this.apiService.updateArticle(e.node.id, { del: 1 }).subscribe(() => {
      e.callback(true);
    }, () => {
      e.callback(false);
    });
  }

  articleAdd(e) {
    const data = {
      title: e.name,
      parentId: e.parent && e.parent.id,
      manId: this.activeModal.option.manId
    };

    this.apiService.addArticle(data).subscribe((res: any) => {
      e.callback(true, res.id);
    }, (resError: HttpErrorResponse) => {
      e.callback(false);
      if (resError.error.code === 1000) {
        this.notificationService.show({ title: '文章标题有重复' });
      }
    });
  }

  articleEdit(e) {
    this.apiService.updateArticle(e.id, { title: e.name }).subscribe((res: any) => {
      e.callback(true);
    }, (resError: HttpErrorResponse) => {
      e.callback(false);
      if (resError.error.code === 1000) {
        this.notificationService.show({ title: '文章标题有重复' });
      }
    });
  }

}

