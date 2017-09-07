import { Component, OnInit, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ApiService } from 'app/admin/api.service';
import { NotificationService } from 'app/core/notification/notification.service';
import { ManualLayoutComponent } from 'app/admin/manual-layout/manual-layout.component';

@Component({
  templateUrl: './manual-article.component.html',
  styleUrls: ['./manual-article.component.scss']
})
export class ManualArticleComponent implements OnInit {
  article: any = {};

  constructor(
    @Optional() @SkipSelf() private parentComponent: ManualLayoutComponent,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private notification: NotificationService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const articleId = params.get('articleId');
      this.apiService.getArticle(articleId).subscribe(res => {
        this.article = res;

        if (this.parentComponent) {
          this.parentComponent.selectArticleId = articleId;
        }
      });
    });

  }

  submit(state?) {
    const params: any = { content: this.article.content };
    if (Number.isInteger(state)) {
      params.state = state;
    }

    this.apiService.updateArticle(this.article.id, params).subscribe(res => {
      this.notification.show({ title: '更新成功' });
      if (params.state !== undefined) {
        this.article.state = params.state;
      }
    });
  }


}
