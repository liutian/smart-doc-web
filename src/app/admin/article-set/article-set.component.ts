import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { TreeMenuService } from 'app/share/tree-menu/tree-menu.service';
import { ApiService } from 'app/admin/api.service';
import { ActiveModal } from 'app/share/modal/active-modal';

@Component({
  selector: 'app-article-set',
  templateUrl: './article-set.component.html',
  styleUrls: ['./article-set.component.scss']
})
export class ArticleSetComponent implements OnInit {
  public menuData;

  constructor(private apiService: ApiService,
    private treeMenuService: TreeMenuService,
    private activeModal: ActiveModal) { }

  ngOnInit() {
    this.apiService.findArticle(
      new HttpParams().set('manId', this.activeModal.option.manId)
    ).subscribe((res: [any]) => {
      const articleList = res.map(a => {
        return {
          id: a.id,
          name: a.title,
          parentId: a.parentId
        };
      });

      this.menuData = this.treeMenuService.parseTreeMenu(articleList);
    });
  }

  articleDel(e) {
    this.apiService.updateArticle(e.menu.id, { del: 1 }).subscribe(() => {
      if (e.menu.parent) {
        e.menu.parent.menuList.slice(e.index, 1);
      } else {
        e.menu.root.menuList.slice(e.index, 1);
      }
    });
  }

  articleAdd(e) {
    const data = {
      title: e.name,
      parentId: e.parent && e.parent.id,
      manId: this.activeModal.option.manId
    };

    this.apiService.addArticle(data).subscribe((res: any) => {
      e.parent.menuList.unshift({
        id: res.id,
        name: res.title,
        parentId: data.parentId,
        parent: e.parent,
        menuList: []
      });
      e.callback(true);
    }, () => {
      e.callback(false);
    });
  }

}
