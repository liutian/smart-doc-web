import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { TreeMenuService } from 'app/share/tree-menu/tree-menu.service';

@Component({
  templateUrl: './manual-layout.component.html',
  styleUrls: ['./manual-layout.component.scss']
})
export class ManualLayoutComponent implements OnInit {
  selectArticleId;
  menuData;
  siteData;

  constructor(
    private treeMenuService: TreeMenuService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { siteData: any }) => {
      this.siteData = data.siteData;
      const articleList = data.siteData.articleList.map(a => {
        return {
          id: a.id,
          name: a.title,
          parentId: a.parentId
        };
      });

      this.menuData = this.treeMenuService.parseTreeMenu(articleList);
      this.selectArticleId = this.route.firstChild && this.route.firstChild.snapshot.paramMap.get('articleId');
    });
  }

  goto(e) {
    this.router.navigate([e.menu.id], {
      relativeTo: this.route
    });
  }

}
