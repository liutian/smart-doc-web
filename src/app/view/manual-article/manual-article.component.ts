import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import { articleMock } from './article-mock';

@Component({
  selector: 'app-manual-article',
  templateUrl: './manual-article.component.html',
  styleUrls: ['./manual-article.component.scss']
})
export class ManualArticleComponent implements OnInit {

  @ViewChild('vRoolView') vRollView;
  sectionActive: number = 0;
  article: any = {};
  sectionList = [];
  currArticleStep;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
    private sanitizer: DomSanitizer) { }

  selectSection(data) {
    this.currArticleStep = data.index;
  }

  ngOnInit() {

    this.route.queryParams.map(params => params.articleId).subscribe(id => this.initArticle(id));
  }

  initArticle(id) {
    this.http.get('assets/mock/article/' + id + '.json').map(res => res.json()).subscribe(article => {
      this.article = article;

      _processContent(+id, this.article);

      this.sectionList = [];
      this.article.content = this.processContentHtml(this.article.content, ' > h2', (ele, index) => {
        this.sectionList.push({ name: ele.innerText });
        ele.className += ' article-section-step';
      });
      this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
      window.setTimeout(() => {
        this.vRollView.calcSection();
      }, 0);

    })
  }

  processContentHtml(content, selector, callback) {
    var fragment = window.document.createDocumentFragment();
    var eleHost = document.createElement('div');
    eleHost.className = 'host';
    eleHost.innerHTML = content;
    fragment.appendChild(eleHost);
    var eleLink = fragment.querySelectorAll('.host ' + selector);

    for (var i = 0; i < eleLink.length; i++) {
      callback(eleLink[i], i);
    }

    return eleHost.innerHTML;
  }

  onRoll(index) {
    this.sectionActive = index;
  }
}


function _processContent(id, article) {
  switch (id) {
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
      article.content = articleMock[id];
  }
}