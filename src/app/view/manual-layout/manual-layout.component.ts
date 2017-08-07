import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

import { ViewService } from '../view.service';
import { TreeMenuService } from '../../share/tree-menu/tree-menu.service';

@Component({
  selector: 'app-manual-layout',
  templateUrl: './manual-layout.component.html',
  styleUrls: ['./manual-layout.component.scss']
})
export class ManualLayoutComponent implements OnInit {

  menuData;
  constructor(
    private treeMenuService: TreeMenuService,
    private router: Router,
    private http: Http,
    private currRoute: ActivatedRoute,
    private store: ViewService) { }

  ngOnInit() {
    this.currRoute.queryParams.subscribe(params => {
      let manualId = params.manual || 1;

      if (!this.store.manual || this.store.manual.id != manualId) {
        this.store.manualList.forEach(m => {
          if (m.id == manualId) {
            this.store.manual = m;
          }
        });
        if (!this.store.manual) throw Error(`this manual(:${manualId}) not exists`);
        this.menuData = this.treeMenuService.parseTreeMenu(this.store.manual.menuList);
      }

      if (params.articleId) {
        this.activeMenu(this.store.manual.menuList, params.articleId);
      }
    })

  }

  goto(e) {
    this.router.navigate(['view/manual/article'], {
      queryParams: {
        site: this.store.siteId,
        manual: this.store.manual.id,
        articleId: e.menu.articleId
      },
      fragment: 'top-anchor'
    })
  }

  activeMenu(menuList, articleId) {
    if (!articleId) return;

    menuList.every(function (menu) {
      if (menu.articleId == articleId) {
        menu.active = true;
        if (menu.parent) {
          menu.parent.active = true;
          menu.parent.parent && (menu.parent.parent.active = true);
        }
        return false;
      }
      return true;
    })
  }
}
