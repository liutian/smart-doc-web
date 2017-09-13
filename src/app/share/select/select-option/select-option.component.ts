import { Component, OnInit, Host, Input, HostListener, OnDestroy, ElementRef, Renderer2, HostBinding } from '@angular/core';

import { SelectComponent } from '../select.component';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit, OnDestroy {
  @Input() value: any;
  @HostBinding('class.hide') hostHide: boolean;
  set isShow(b) {
    this._isShow = b;
    this.hostHide = !b;
  }
  get isShow() {
    return this._isShow;
  }
  set select(s) {
    this._select = s;
    if (s === true) {
      this.render.addClass(this.ele.nativeElement, 'active');
    } else {
      this.render.removeClass(this.ele.nativeElement, 'active');
    }
  }
  get select() {
    return this._select;
  }
  private _select: boolean;
  private _isShow = true;

  constructor(
    @Host() private parent: SelectComponent,
    private render: Renderer2,
    private ele: ElementRef) { }


  @HostListener('click') selectOption() {
    this.parent.addMatch(this.value);
    this.isShow = false;
  }

  @HostListener('mouseenter') onselect() {
    this.parent.refreshOptionsSelect();
    this.select = true;
  }

  @HostListener('mouseleave') onunSelect() {
    this.parent.refreshOptionsSelect();
    this.select = false;
  }

  ngOnInit() {
    this.parent.options.push(this);
  }

  ngOnDestroy() {
    this.parent.options.splice(this.parent.options.indexOf(this), 1);
  }


}
