import {
  Component,
  OnInit,
  forwardRef,
  Input,
  EventEmitter,
  Output,
  ContentChildren,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs/Subject';

import { SelectOptionComponent } from './select-option/select-option.component';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() multiple: boolean;
  @Input() disabled: boolean;
  @Output() searchChange = new EventEmitter<string>();
  @Input() showSearch: boolean;
  @ViewChild('multiple') multipleView: ElementRef;
  @ViewChild('search') searchView: ElementRef;
  searchText: string;
  options: SelectOptionComponent[] = [];
  matchModel: any | [any];
  matchSubject: Subject<any>;
  searchInputFocus: boolean;
  showSearchText: boolean;

  get showDropdown(): boolean {
    if (this._showDropdown && !this.disabled) {
      return true;
    }
    return false;
  }
  set showDropdown(b) {
    this._showDropdown = b;
  }
  set labelStr(label: string) {
    if (!label.startsWith('$item')) {
      throw Error('The label properties of the select component must start with $item');
    }
    this._labelArr = label.split('.');
    this._labelArr.shift();
  }

  private nextDelMatchIndex: number;
  private _onChange: Function;
  private _showDropdown: boolean;
  private _labelArr: string[];


  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) onDocClick($event: MouseEvent) {
    if ($event.currentTarget === window.document) {
      this.showDropdown = false;
    }
  }

  @HostListener('click', ['$event']) startSearch($event: MouseEvent) {
    if (this.multiple) {
      if ($event.target === this.multipleView.nativeElement) {
        this.searchView.nativeElement.focus();
      }
    }

    if ($event.currentTarget === this.eleRef.nativeElement) {
      $event.stopPropagation();
    }
  }

  onClickSingle() {
    this.showSearchText = this.showSearch;
    this.showDropdown = true;
  }

  onSearch(text) {
    this._showDropdown = true;
    if (this.searchText === text) {
      return;
    }

    this.searchText = text;
    this.searchChange.emit(text);
  }

  writeValue(obj: any) {
    this.matchModel = obj;
    this.refreshOptions();
  }

  registerOnChange(fn: any) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any) {

  }

  setDisabledState?(isDisabled: boolean) {

  }

  addMatch(match) {
    this.nextDelMatchIndex = undefined;
    if (this.multiple) {
      this.matchModel.push(match);
    } else {
      this.matchModel = match;
      this.refreshOptions();
    }
    this._onChange(this.matchModel);
    this.searchView.nativeElement.focus();
  }

  delMatch(match?, index?) {
    this.nextDelMatchIndex = undefined;
    if (this.multiple) {
      this.matchModel.splice(index, 1);
    } else {
      this.matchModel = '';
    }
    this.refreshOptions();
    this._onChange(this.matchModel);
    this.searchView.nativeElement.focus();
  }

  refreshOptions() {
    for (const option of this.options) {
      if (this.multiple ? this.matchModel.includes(option.value) : option.value === this.matchModel) {
        option.isShow = false;
      } else {
        option.isShow = true;
      }
    }
  }

  refreshOptionsSelect() {
    this.options.forEach(o => {
      o.select = false;
    });
  }

  searchKeyup($event: KeyboardEvent, text) {
    if ($event.keyCode === 13) {
      const selectOption = this.options.find(o => {
        return o.isShow && o.select;
      });
      selectOption.selectOption();
    } else if ($event.keyCode === 38 || $event.keyCode === 40) {
      const copyOptions = this.options.filter(o => {
        return o.isShow;
      });
      let selectIndex = copyOptions.findIndex(o => {
        if (o.select === true) {
          o.onunSelect();
          return true;
        }
        return false;
      });
      // copyOptions.forEach(o => {
      //   o.select = false;
      // });
      if ($event.keyCode === 38) {
        selectIndex -= 1;
        if (selectIndex < 0) {
          selectIndex = 0;
        }
      } else {
        selectIndex += 1;
        if (selectIndex > this.options.length - 1) {
          selectIndex = this.options.length - 1;
        }
      }
      copyOptions[selectIndex].onselect();
    } else if ($event.keyCode === 8 && this.multiple && !text) {
      if (Number.isInteger(this.nextDelMatchIndex)) {
        this.delMatch(this.matchModel[this.nextDelMatchIndex], this.nextDelMatchIndex);
        this.nextDelMatchIndex = undefined;
      } else if (this.matchModel.length > 0) {
        this.nextDelMatchIndex = this.matchModel.length - 1;
      } else {
        this.nextDelMatchIndex = undefined;
      }
    } else {
      this.onSearch(text);
    }
  }

  getLabel(item) {
    let result = item;
    for (const prop of this._labelArr) {
      result = result[prop];
      if (!result) {
        break;
      }
    }
    return result;
  }
}
