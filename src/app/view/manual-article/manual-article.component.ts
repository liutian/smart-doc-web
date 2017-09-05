import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

import { ApiService } from 'app/view/api.service';

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

  constructor(
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
      this.initArticle(params.get('articleId'));
    });
  }

  initArticle(id) {
    const api = this.preview ? 'getAuthArticle' : 'getArticle';
    this.apiService[api](id).subscribe(article => {
      this.article = article;

      this.sectionList = [];
      this.article.content = this.processContentHtml(this.article.content, ' > h2', (ele, index) => {
        this.sectionList.push({ name: ele.innerText });
        ele.className += ' article-section-step';
      });
      this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
      window.setTimeout(() => {
        this.vRollView.calcSection();
        this.sectionActive = 0;
      }, 0);

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

