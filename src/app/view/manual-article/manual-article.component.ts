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
  @ViewChild('vRoolView') vRollView;
  sectionActive = 0;
  article: any = {};
  sectionList = [];
  currArticleStep;
  preview: boolean;
  private tagName = 'h2';
  private tagReg = new RegExp('(<' + this.tagName + ')([^>]*)>(.*?)<(\/' + this.tagName + '>)', 'img');
  private tagClassReg = new RegExp('(class=)(\'|")([^\'"]*)(\'|")', 'i');
  private tagAppendClass = 'article-section-step';

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
      if (this.parentComponent) {
        this.parentComponent.selectArticleId = id;
      }

      this.article = article;
      this.sectionList = [];
      this.article.content = this.processContentHtml(this.article.content || '暂无内容', this.sectionList);
      this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);

      window.setTimeout(() => {
        this.vRollView.calcSection();
        this.sectionActive = 0;
      }, 0);

      if (window.renderReady) {
        window.setTimeout(() => {
          window.renderReady();
        }, 100);
      }
    });
  }

  processContentHtml(content: string, list: any[]) {
    content = content.replace(this.tagReg, (all, tagStart, attr, text, tagEnd) => {
      list.push({ name: text.replace(/<[^>]*>/img, '').trim() });

      if (attr && attr.includes('class=')) {
        attr = attr.replace(this.tagClassReg, '$1$2$3 ' + this.tagAppendClass + '$4');
      } else {
        attr = (attr || '') + ' class="' + this.tagAppendClass + '"';
      }

      return tagStart + attr + '>' + text + '<' + tagEnd;
    });

    return content;
  }

  onRoll(index) {
    this.sectionActive = index;
  }
}

