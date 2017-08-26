import { Injectable } from '@angular/core';

@Injectable()
export class TreeMenuService {

  constructor() { }

  parseTreeMenu(treeMenu) {
    const rootMenu = [];
    const childMenu = [];
    const endMenu = [];

    treeMenu.forEach(function (menu) {
      if (menu.parentId) {
        endMenu.push(menu);
      } else {
        rootMenu.push(menu);
      }
    });

    rootMenu.forEach(function (menu) {
      menu.menuList = [];
      for (let i = 0; i < endMenu.length; i++) {
        const m = endMenu[i];
        if (m.parentId === menu.id) {
          menu.menuList.push(m);
          m.parent = menu;
          m.root = rootMenu;
          childMenu.push(m);
          endMenu.splice(i, 1);
          i--;
        }
      }
    });

    childMenu.forEach(function (menu) {
      menu.menuList = [];
      for (let i = 0; i < endMenu.length; i++) {
        const m = endMenu[i];
        if (m.parentId === menu.id) {
          menu.menuList.push(m);
          m.parent = menu;
          m.root = rootMenu;
          endMenu.splice(i, 1);
          i--;
        }
      }
    });

    return rootMenu;
  }

}
