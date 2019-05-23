import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectOptionComponent } from './select-option/select-option.component';



@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SelectComponent,
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() multiple: boolean;
  @Input() disabled: boolean;
  @Input() showSearch: boolean;
  @Output() searchChange = new EventEmitter<string>();
  @ViewChild('multiple') multipleView: ElementRef;
  @ViewChild('multSearch') multSearchView: ElementRef;
  @ViewChild('singleSearch') singleSearchView: ElementRef;

  get showDropdown(): boolean {
    return this._showDropdown && !this.disabled;
  }
  set showDropdown(b) {
    if (b === false) {
      if (this.multiple) {
        this.multSearchView.nativeElement.value = '';
      } else {
        this.singleSearchView.nativeElement.value = '';
      }
    }
    this._showDropdown = b;
  }
  set labelStr(label: string) {
    if (!label.startsWith('$item')) {
      throw Error('The label properties of the select component must start with $item');
    }
    this._labelArr = label.split('.');
    this._labelArr.shift(); // 删除第一个$item
  }

  optionsComponent: SelectOptionComponent[] = [];
  matchModel: any | [any];
  searchInputFocus: boolean;
  nextDelMatchIndex: number;

  private searchText: string;
  private _onChange: Function;
  private _showDropdown: boolean;
  private _labelArr: string[];
  private _searchEmpty: boolean;


  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('document:click', ['$event']) onDocClick($event: MouseEvent) {
    if ($event.currentTarget === window.document) {
      this.showDropdown = false;
    }
  }

  @HostListener('click', ['$event']) startSearch($event: MouseEvent) {
    if (this.multiple && $event.target === this.multipleView.nativeElement) {
      this.multSearchView.nativeElement.focus();
    }

    if ($event.currentTarget === this.eleRef.nativeElement) {
      $event.stopPropagation();
    }
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
    if (this.multiple) {
      this.matchModel.push(match);
    } else {
      this.matchModel = match;
    }
    this.matchChange();
  }

  delMatch(match?, index?) {
    if (this.multiple) {
      this.matchModel.splice(index, 1);
    } else {
      this.matchModel = '';
    }
    this.matchChange();
  }

  private matchChange() {
    this.nextDelMatchIndex = undefined;
    this.refreshOptions();
    if (this.multiple) {
      this.multSearchView.nativeElement.focus();
    }
    this._onChange(this.matchModel);
  }

  refreshOptions() {
    for (const option of this.optionsComponent) {
      const value = option.trackBy ? option.value[option.trackBy] : option.value;

      if (this.multiple) {
        option.isShow = !this.matchModel.find(m => {
          return (option.trackBy ? m[option.trackBy] : m) === value;
        });
      } else {
        option.isShow = value !== (option.trackBy ? this.matchModel[option.trackBy] : option.trackBy);
      }
    }
  }

  resetOptionsSelect() {
    this.optionsComponent.forEach(o => {
      o.select = false;
    });
  }

  searchKeyup($event: KeyboardEvent) {
    if ($event.keyCode === 13) {
      const option = this.optionsComponent.find(o => {
        return o.isShow && o.select;
      });
      option.onselect();
    } else if ($event.keyCode === 38 || $event.keyCode === 40) {
      const copyOptions = this.optionsComponent.filter(o => {
        return o.isShow;
      });
      let selectIndex = copyOptions.findIndex(o => {
        if (o.select === true) {
          o.onLeave();
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
        if (selectIndex > this.optionsComponent.length - 1) {
          selectIndex = this.optionsComponent.length - 1;
        }
      }
      copyOptions[selectIndex].onEnter();
    } else if ($event.keyCode === 8 && this.multiple && this._searchEmpty) {
      if (Number.isInteger(this.nextDelMatchIndex)) {
        this.delMatch(this.matchModel[this.nextDelMatchIndex], this.nextDelMatchIndex);
        this.nextDelMatchIndex = undefined;
      } else if (this.matchModel.length > 0) {
        this.nextDelMatchIndex = this.matchModel.length - 1;
      } else {
        this.nextDelMatchIndex = undefined;
      }
    } else {
      this.onSearch(this.searchText);
    }
  }

  onSearchKeydown() {
    this._searchEmpty = !this.searchText;
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
