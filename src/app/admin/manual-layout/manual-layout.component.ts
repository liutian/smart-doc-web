import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ApiService } from 'app/admin/api.service';

@Component({
  templateUrl: './manual-layout.component.html',
  styleUrls: ['./manual-layout.component.scss']
})
export class ManualLayoutComponent implements OnInit {
  public selectArticleId;
  articleList;
  man;

  private backSiteId;
  private backViewType;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.switchMap((paramsMap: ParamMap) => {
      this.backSiteId = paramsMap.get('siteId');
      this.backViewType = paramsMap.get('viewType');
      const manId = paramsMap.get('manId');
      return Observable.zip(this.apiService.findArticle(
        new HttpParams().set('manId', manId)
      ), this.apiService.getMan(manId));
    }).subscribe((res: [any]) => {
      this.articleList = res[0].map(a => {
        return {
          id: a.id,
          name: a.title,
          parentId: a.parentId,
        };
      });

      this.man = res[1];

      // if (!this.route.firstChild) {
      //   if (this.menuData[0].menuList.length === 0) {
      //     this.selectArticle({ menu: this.menuData[0] }, true);
      //   } else if (this.menuData[0].menuList[0].menuList.length === 0) {
      //     this.selectArticle({ menu: this.menuData[0].menuList[0] }, true);
      //   } else if (this.menuData[0].menuList[0].menuList[0].length === 0) {
      //     this.selectArticle({ menu: this.menuData[0].menuList[0].menuList[0] }, true);
      //   }
      // }
    });

  }

  selectArticle(data, replace?) {
    if (!data.node.menuList || data.node.menuList.length <= 0) {
      this.router.navigate([data.node.id], {
        relativeTo: this.route,
        replaceUrl: replace
      });
    }
  }

  back() {
    this.router.navigate(['admin', {
      siteId: this.backSiteId,
      viewType: this.backViewType
    }]);
  }

}
