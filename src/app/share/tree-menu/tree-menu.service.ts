import { Injectable } from '@angular/core';

@Injectable()
export class TreeMenuService {

  constructor() { }

  parseTreeMenu(treeMenu) {
    let rootMenu = [];
    let childMenu = [];
    let endMenu = [];

    treeMenu.forEach(function (menu) {
      if (menu.parentId) {
        endMenu.push(menu);
      } else {
        rootMenu.push(menu);
      }
    });

    rootMenu.forEach(function (menu) {
      menu.menuList = [];
      for (var i = 0; i < endMenu.length; i++) {
        var m = endMenu[i];
        if (m.parentId == menu.id) {
          menu.menuList.push(m);
          m.parent = menu;
          childMenu.push(m);
          endMenu.splice(i, 1);
          i--;
        }
      }
    });

    childMenu.forEach(function (menu) {
      menu.menuList = [];
      for (var i = 0; i < endMenu.length; i++) {
        var m = endMenu[i];
        if (m.parentId == menu.id) {
          menu.menuList.push(m);
          m.parent = menu;
          endMenu.splice(i, 1);
          i--;
        }
      }
    })

    return rootMenu;
  }

}
