import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { TreeService } from "./tree.service";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, OnChanges {
  @Input() selectNodeId: string;
  @Input() treeData: any;
  @Input() showBtn: boolean;
  @Output() select = new EventEmitter();
  @Output() del = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() edit = new EventEmitter();

  rootNode: any;

  constructor(private treeService: TreeService) { }

  ngOnInit() {
  }

  ngOnChanges(simple: SimpleChanges) {
    if (simple.selectNodeId && simple.selectNodeId.currentValue) {
      let selectNode;
      this.treeData.forEach(d => {
        if (d.id === simple.selectNodeId.currentValue) {
          selectNode = d;
        }

        d.active = false;
        d.expend = false;
      });
      while (selectNode) {
        selectNode.active = true;
        selectNode.expend = true;
        selectNode = selectNode.parent;
      }
    }

    if (simple.treeData && simple.treeData.currentValue) {
      this.rootNode = this.treeService.parseTree(simple.treeData.currentValue);
    }
  }

}
