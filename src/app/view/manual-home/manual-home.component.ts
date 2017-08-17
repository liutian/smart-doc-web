import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ViewService } from 'app/view/view.service';

@Component({
  selector: 'app-manual-home',
  templateUrl: './manual-home.component.html',
  styleUrls: ['./manual-home.component.scss']
})
export class ManualHomeComponent implements OnInit {

  constructor(
    public store: ViewService,
    public router: Router) { }

  ngOnInit() {
    let articleId;
    let menuList = this.store.manual.menuList;
    for (var i = 0; i < menuList.length; i++) {
      var menu = menuList[i];
      if (menu.articleId) {
        articleId = menu.articleId;
        break;
      }
    }
    if (articleId) {
      let queryParams = {
        manual: this.store.manual.id,
        site: this.store.siteId,
        articleId: articleId
      }
      this.router.navigate(['/view/manual/article'], { queryParams: queryParams, fragment: 'top-anchor' });
    }
  }
}
