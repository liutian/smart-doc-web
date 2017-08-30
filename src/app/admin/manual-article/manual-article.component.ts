import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { ApiService } from 'app/admin/api.service';
import { NotificationService } from 'app/core/notification/notification.service';

@Component({
  selector: 'app-manual-article',
  templateUrl: './manual-article.component.html',
  styleUrls: ['./manual-article.component.scss']
})
export class ManualArticleComponent implements OnInit {

  public article: any = {};

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private notification: NotificationService) { }

  ngOnInit() {
    this.route.paramMap.switchMap((params: ParamMap) => {
      return this.apiService.getArticle(params.get('articleId'));
    }).subscribe(article => {
      this.article = article;
    });

  }

  submit(issue) {
    this.apiService.updateArticle(this.article.id, {
      content: this.article.content,
      state: issue ? 0 : 1
    }).subscribe(res => {
      this.notification.show({ title: '更新成功' });
    });
  }
}
