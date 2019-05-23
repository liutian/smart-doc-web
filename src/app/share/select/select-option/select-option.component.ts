import { Component, ElementRef, Host, HostBinding, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { SelectComponent } from '../select.component';


@Component({
  selector: 'app-select-option',
  templateUrl: './select-option.component.html',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements OnInit, OnDestroy {
  @Input() value: any;
  @Input() trackBy: string;
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


  @HostListener('click') onselect() {
    this.parent.addMatch(this.value);
    this.isShow = false;
  }

  @HostListener('mouseenter') onEnter() {
    this.parent.resetOptionsSelect();
    this.select = true;
  }

  @HostListener('mouseleave') onLeave() {
    this.parent.resetOptionsSelect();
    this.select = false;
  }

  ngOnInit() {
    this.parent.optionsComponent.push(this);
    const value = this.trackBy ? this.value[this.trackBy] : this.value;

    if (this.parent.multiple) {
      this.isShow = !this.parent.matchModel.find(m => {
        return (this.trackBy ? m[this.trackBy] : m) === value;
      });
    } else {
      this.isShow = value !== (this.trackBy ? this.parent.matchModel[this.trackBy] : this.parent.matchModel);
    }
  }

  ngOnDestroy() {
    this.parent.optionsComponent.splice(this.parent.optionsComponent.indexOf(this), 1);
  }


}
