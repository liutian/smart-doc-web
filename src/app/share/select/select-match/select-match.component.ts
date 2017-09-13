import { Component, OnInit, Input, OnChanges, SimpleChanges, Host } from '@angular/core';

import { SelectComponent } from '../select.component';

@Component({
  selector: 'app-select-match',
  template: ''
})
export class SelectMatchComponent implements OnInit {
  @Input() label: string;

  constructor( @Host() private parent: SelectComponent) { }

  ngOnInit() {
    this.parent.labelStr = this.label;
  }


}
