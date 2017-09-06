import { Component, OnInit, ViewChild, Optional, SkipSelf } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { ApiService } from 'app/view/api.service';
import { ManualLayoutComponent } from 'app/view/manual-layout/manual-layout.component';

@Component({
  templateUrl: './manual-article.component.html',
  styleUrls: ['./manual-article.component.scss']
})
export class ManualArticleComponent implements OnInit {
  sectionActive = 0;
  article: any = {};
  sectionList = [];
  currArticleStep;
  preview: boolean;
  @ViewChild('vRoolView') vRollView;

  constructor(
    @Optional() @SkipSelf() private parentComponent: ManualLayoutComponent,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private sanitizer: DomSanitizer) { }

  selectSection(data) {
    this.currArticleStep = data.index;
  }

  ngOnInit() {
    this.preview = !!this.route.snapshot.queryParamMap.get('preview');
    this.route.paramMap.subscribe((params: ParamMap) => {
      const articleId = params.get('articleId');
      this.initArticle(articleId);
    });
  }

  initArticle(id) {
    const api = this.preview ? 'getAuthArticle' : 'getArticle';
    this.apiService[api](id).subscribe(article => {
      this.article = article;

      this.sectionList = [];
      this.article.content = this.processContentHtml(this.article.content || '暂无内容', ' > h2', (ele, index) => {
        this.sectionList.push({ name: ele.innerText });
        ele.className += ' article-section-step';
      });
      this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
      window.setTimeout(() => {
        this.vRollView.calcSection();
        this.sectionActive = 0;
      }, 0);

      if (this.parentComponent) {
        this.parentComponent.selectArticleId = id;
      }
    });
  }

  processContentHtml(content, selector, callback) {
    const fragment = window.document.createDocumentFragment();
    const eleHost = document.createElement('div');
    eleHost.className = 'host';
    eleHost.innerHTML = content;
    fragment.appendChild(eleHost);
    const eleLink = fragment.querySelectorAll('.host ' + selector);

    for (let i = 0; i < eleLink.length; i++) {
      callback(eleLink[i], i);
    }

    return eleHost.innerHTML;
  }

  onRoll(index) {
    this.sectionActive = index;
  }
}

