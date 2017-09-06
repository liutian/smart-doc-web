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
  rootMenu: any = {};
  @Input() showBtn: boolean;
  @Output() select = new EventEmitter();
  @Output() del = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() set menuData(v) {
    this.rootMenu.menuList = v;
  }
  get menuData() {
    return this.rootMenu.menuList;
  }
  @Input() set selectMenuId(val: string) {
    if (this._selectMenuId !== val) {
      this._selectMenuId = val;
      if (this.menuData && val) {
        this.expendMenu(this.menuData, val);
      }
    }
  }
  get selectMenuId() {
    return this._selectMenuId;
  }

  private _selectMenuId;

  constructor(private route: ActivatedRoute, private modal: ModalService) { }

  ngOnInit() {

  }

  confirmEditInput(menu) {
    this.edit.emit({
      id: menu.id,
      name: menu.name,
      callback: (ok) => {
        menu.showEdit = false;
      }
    });
  }

  cancelEditInput(menu) {
    menu.name = menu._name;
    menu.showEdit = false;
  }

  showEditInput(menu) {
    menu._name = menu.name;
    menu.showEdit = true;
  }

  menuClick(menu, index) {
    if (menu.menuList && menu.menuList.length) {
      menu.expend = !menu.expend;
    } else {
      this._selectMenuId = menu.id;
      this.select.emit({
        menu: menu,
        index: index
      });
    }
  }

  menuDel(menu, index) {
    this.modal.open(ModalConfirmComponent, { title: '确定删除吗?' }).result.then(result => {
      if (result === true) {
        this.del.emit({
          menu: menu,
          index: index
        });
      }
    });
  }

  showAddMenu(menu) {
    menu.addInput = '新增文章';
    menu.showAddInput = true;
    menu.expend = true;
  }

  cancelAddInput(menu) {
    menu.showAddInput = false;
    if (!menu.menuList && menu.menuList.length <= 0) {
      menu.expend = false;
    }
  }

  confirmAddInput(menu) {
    this.add.emit({
      name: menu.addInput,
      parent: menu,
      callback: (ok) => {
        if (ok) {
          menu.showAddInput = false;
        }
      }
    });
  }

  private expendMenu(menuList, id) {
    for (let i = 0; i < menuList.length; i++) {
      const menu = menuList[i];
      if (menu.menuList && menu.menuList.length > 0) {
        const expend = this.expendMenu(menu.menuList, id);
        if (expend) {
          this.menuClick(menu, i);
          return true;
        }
      } else if (menu.id === id) {
        return true;
      }
    }
    return false;
  }
}
