import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    this.route.params.subscribe((params: any) => {
      this.backSiteId = params.siteId;
      this.backViewType = params.viewType;
      const manId = params.manId;
      this.apiService.findArticle(
        new HttpParams().set('manId', manId)
      ).subscribe((res: any) => {
        this.articleList = res.map(a => {
          return {
            id: a.id,
            name: a.title,
            parentId: a.parentId,
          };
        });
      });
      this.apiService.getMan(manId).subscribe((res) => {
        this.man = res;
      });
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
