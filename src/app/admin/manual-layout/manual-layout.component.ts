import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TreeMenuService } from 'app/share/tree-menu/tree-menu.service';

@Component({
  selector: 'app-manual-layout',
  templateUrl: './manual-layout.component.html',
  styleUrls: ['./manual-layout.component.scss']
})
export class ManualLayoutComponent implements OnInit {
  public manual;
  public menuData;

  constructor(
    private treeMenuService: TreeMenuService,
    private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/mock/tree.json').subscribe(res => {
      this.manual = res[0];
      this.menuData = this.treeMenuService.parseTreeMenu(this.manual.menuList);
    });
  }

}
