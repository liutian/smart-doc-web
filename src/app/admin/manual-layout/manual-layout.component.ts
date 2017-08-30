import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { TreeMenuService } from 'app/share/tree-menu/tree-menu.service';
import { ApiService } from 'app/admin/api.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-manual-layout',
  templateUrl: './manual-layout.component.html',
  styleUrls: ['./manual-layout.component.scss']
})
export class ManualLayoutComponent implements OnInit {
  public menuData;
  man = {};
  backSiteId;
  selectArticleId;

  constructor(
    private treeMenuService: TreeMenuService,
    private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.switchMap((paramsMap: ParamMap) => {
      this.backSiteId = paramsMap.get('siteId');
      const manId = paramsMap.get('manId');
      return Observable.zip(this.apiService.findArticle(
        new HttpParams().set('manId', manId)
      ), this.apiService.getMan(manId));
    }).subscribe((res: [any]) => {
      const articleList = res[0].map(a => {
        return {
          id: a.id,
          name: a.title,
          parentId: a.parentId
        };
      });
      this.menuData = this.treeMenuService.parseTreeMenu(articleList);
      this.man = res[1];

      if (this.route.firstChild) {
        this.selectArticleId = this.route.firstChild.snapshot.paramMap.get('articleId');
      }
    });

  }

  selectArticle(data) {
    if (!data.menu.menuList || data.menu.menuList.length <= 0) {
      this.router.navigate([data.menu.id], { relativeTo: this.route });
    }
  }

  back() {
    this.router.navigate(['admin', { siteId: this.backSiteId }]);
  }

}
