import 'rxjs/add/operator/map';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Input() menuData;
  @Output() onSelect = new EventEmitter();
  currArticleId: Observable<number>;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currArticleId = this.route.queryParams.map(params => params.articleId || -1);
  }

  menuClick(menu, index) {
    if (menu.menuList && menu.menuList.length) {
      menu.active = !menu.active;
    } else {
      this.onSelect.emit({
        menu: menu,
        index: index
      });
    }

  }

}
