import 'rxjs/add/operator/map';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ModalService } from 'app/share/modal/modal.service';
import { ModalConfirmComponent } from 'app/share/modal/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-tree-menu',
  templateUrl: './tree-menu.component.html',
  styleUrls: ['./tree-menu.component.scss']
})
export class TreeMenuComponent implements OnInit {
  @Input() showDelBtn: boolean;
  @Input() showAddBtn: boolean;
  @Output() onSelect = new EventEmitter();
  @Output() onDel = new EventEmitter();
  @Output() onAdd = new EventEmitter();
  @Input() set menuData(v) {
    this.rootMenu.menuList = v;
  }
  get menuData() {
    return this.rootMenu.menuList;
  }
  rootMenu: any = {};

  currArticleId: Observable<number>;
  constructor(private route: ActivatedRoute, private modal: ModalService) { }

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

  menuDel(menu, index) {
    this.modal.open(ModalConfirmComponent, { title: '确定删除吗?' }).result.then(result => {
      if (result === true) {
        this.onDel.emit({
          menu: menu,
          index: index
        });
      }
    });
  }

  showAddMenu(menu) {
    menu.addInput = '新增节点';
    menu.showAddInput = true;
    menu.active = true;
  }

  cancelAddInput(menu) {
    menu.showAddInput = false;
    if (!menu.menuList && menu.menuList.length <= 0) {
      menu.active = false;
    }
  }

  confirmAddInput(menu) {
    this.onAdd.emit({
      name: menu.addInput,
      parent: menu,
      callback: (ok) => {
        if (ok) {
          menu.showAddInput = false;
        }
      }
    });
  }

}
