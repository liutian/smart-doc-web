import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { TreeMenuService } from '../../share/tree-menu/tree-menu.service';

@Component({
  selector: 'app-article-set',
  templateUrl: './article-set.component.html',
  styleUrls: ['./article-set.component.scss']
})
export class ArticleSetComponent implements OnInit {
  public manual;
  public menuData;

  constructor(private http: Http, private treeMenuService: TreeMenuService) { }

  ngOnInit() {
    this.http.get('assets/mock/tree.json').map(res => res.json().data).subscribe(res => {
      this.manual = res[0];
      this.menuData = this.treeMenuService.parseTreeMenu(this.manual.menuList);
    });
  }

}
