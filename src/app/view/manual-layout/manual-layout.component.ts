import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: './manual-layout.component.html',
  styleUrls: ['./manual-layout.component.scss']
})
export class ManualLayoutComponent implements OnInit {
  selectArticleId;
  articleList;
  siteData;
  selectMan;
  showManList: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { siteData: any }) => {
      this.siteData = data.siteData;
      const manId = this.route.snapshot.paramMap.get('manId');
      this.selectMan = this.siteData.manList.find(m => {
        return m.id === manId;
      });
      this.articleList = data.siteData.articleList.map(a => {
        return {
          id: a.id,
          name: a.title,
          parentId: a.parentId
        };
      });

      // if (!this.route.firstChild && this.menuData.length > 0) {
      //   if (this.menuData[0].menuList.length === 0) {
      //     this.goto({ menu: this.menuData[0] }, true);
      //   } else if (this.menuData[0].menuList[0].menuList.length === 0) {
      //     this.goto({ menu: this.menuData[0].menuList[0] }, true);
      //   } else if (this.menuData[0].menuList[0].menuList[0].length === 0) {
      //     this.goto({ menu: this.menuData[0].menuList[0].menuList[0] }, true);
      //   }
      // }
    });
  }

  goto(e, replace?) {
    this.router.navigate([e.node.id], {
      replaceUrl: replace,
      relativeTo: this.route,
      queryParamsHandling: 'merge'
    });
  }

  switchMan(man) {
    this.selectMan = man;
    const urlTree = this.router.createUrlTree(['../../', man.siteId, man.id], {
      relativeTo: this.route,
    });

    this.router.navigateByUrl(urlTree, {
      queryParamsHandling: 'merge'
    });
    this.showManList = false;
  }

}
