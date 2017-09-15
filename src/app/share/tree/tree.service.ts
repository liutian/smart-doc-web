import { Injectable } from '@angular/core';

@Injectable()
export class TreeService {

  constructor() { }

  parseTree(list: any[], parent?, root?) {
    if (!parent) {
      parent = {};
    }
    if (!parent.level) {
      parent.level = 0;
    }
    if (!root) {
      root = {};
    }

    const otherNodes = [];
    const nodes = list.filter(n => {
      if (n.parentId === parent.id) {
        n.parent = parent;
        n.level = n.parent.level + 1;
        n.children = [];
      } else {
        otherNodes.push(n);
      }

      n.root = root;
      return n.parentId === parent.id;
    });
    parent.children = nodes;

    if (!parent.id) {
      root.children = nodes;
    }

    nodes.forEach(n => {
      this.parseTree(otherNodes, n, root);
    });

    return root;
  }

}
