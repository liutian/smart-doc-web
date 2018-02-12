import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalService } from 'app/share/modal/modal.service';
import { ModalConfirmComponent } from 'app/share/modal/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-tree-node',
  styleUrls: ['./tree-node.component.scss'],
  templateUrl: './tree-node.component.html',
  animations: [
    trigger('heightTrigger', [
      state('expend', style({ height: '*' })),
      state('shrink', style({ height: 0 })),
      transition('expend <=> shrink', [
        animate('0.2s ease-in')
      ])
    ])
  ]
})
export class TreeNodeComponent implements OnInit {
  @Input() node: any;
  @Input() showBtn: boolean;
  @Input() index: number;
  @Output() select = new EventEmitter();
  @Output() del = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();

  showEdit: boolean;
  showAddInput: boolean;
  addInput: string;


  constructor(private route: ActivatedRoute, private modal: ModalService) { }

  ngOnInit() {
    console.log('node' + this.node);
  }

  confirmEditInput(node) {
    this.edit.emit({
      id: node.id,
      name: node.name,
      callback: (ok) => {
        this.showEdit = false;
      }
    });
  }

  cancelEditInput(node) {
    node.name = node._name;
    this.showEdit = false;
  }

  showEditInput(node) {
    node._name = node.name;
    this.showEdit = true;
  }

  nodeClick(node, index) {
    if (node.children && node.children.length) {
      node.expend = !node.expend;
    } else {
      this.select.emit({
        node: node,
        index: index
      });
    }
  }

  nodeDel(node, index) {
    this.modal.open(ModalConfirmComponent, { title: '确定删除吗?' }).result.then(result => {
      if (result === true) {
        this.del.emit({
          node: node,
          index: index,
          callback: (ok) => {
            if (ok) {
              if (node.parent) {
                node.parent.children.splice(index, 1);
              } else {
                node.root.splice(index, 1);
              }
            }
          }
        });
      }
    });
  }

  showAddNode() {
    this.addInput = '新节点';
    this.showAddInput = true;
    this.node.expend = true;
  }

  cancelAddInput(node) {
    this.showAddInput = false;
    if (!node.children && node.children.length <= 0) {
      this.node.expend = false;
    }
  }

  confirmAddInput(node) {
    this.add.emit({
      name: this.addInput,
      parent: node,
      callback: (ok, id) => {
        if (ok) {
          node.children.push({
            id: id,
            name: this.addInput,
            parentId: node.parentId,
            parent: node.parent,
            root: node.root,
            children: []
          });
          this.showAddInput = false;
        }
      }
    });
  }

  calcHeight(node) {
    return (node.expend || (!node.name && !node.parent)) ? 'expend' : 'shrink'
  }

  // private expendMenu(children, id) {
  //   for (let i = 0; i < children.length; i++) {
  //     const menu = children[i];
  //     if (menu.children && menu.children.length > 0) {
  //       const expend = this.expendMenu(menu.children, id);
  //       if (expend) {
  //         this.menuClick(menu, i);
  //         return true;
  //       }
  //     } else if (menu.id === id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
}
