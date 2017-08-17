import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TreeMenuService } from 'app/share/tree-menu/tree-menu.service';

@Component({
  selector: 'app-article-set',
  templateUrl: './article-set.component.html',
  styleUrls: ['./article-set.component.scss']
})
export class ArticleSetComponent implements OnInit {
  public manual;
  public menuData;

  constructor(private http: HttpClient, private treeMenuService: TreeMenuService) { }

  ngOnInit() {
    this.http.get('assets/mock/tree.json').subscribe(res => {
      this.manual = res[0];
      this.menuData = this.treeMenuService.parseTreeMenu(this.manual.menuList);
    });
  }

}
