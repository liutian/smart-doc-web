import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChange = new EventEmitter<number>();
  @Input() showMaxPage: number;
  @Input() current: number;
  @Input() pageSize: number;
  @Input() total: number;
  pages: number[];
  totalPage: number;

  constructor() { }

  onPage(page: number) {
    this.current = page;
    this.calc();
    this.pageChange.emit(page);
  }

  ngOnInit() {
    this.current = this.current || 1;
    this.total = this.total || 1;
    this.pageSize = this.pageSize || 1;
    this.showMaxPage = this.showMaxPage || 5;
    this.calc();
  }

  ngOnChanges() {
    this.calc();
  }

  morePage(next) {
    if (next) {
      let nextCurrent = this.pages[this.pages.length - 1] + Math.floor(this.showMaxPage / 2);
      this.current = Math.min(nextCurrent, this.totalPage);
    } else {
      let preCurrent = this.pages[0] - Math.floor(this.showMaxPage / 2);
      this.current = Math.max(preCurrent, 1);
    }
    this.calc();
  }

  calc() {
    if (!this.total || !this.pageSize) return;
    this.totalPage = this.total / this.pageSize;
    this.pages = (new Array(this.totalPage)).fill('0').map((v, i) => { return i + 1 });

    if (!this.showMaxPage || !this.current) return;
    if (this.totalPage > this.showMaxPage) {
      let count = Math.floor(this.showMaxPage / 2);
      let even = this.showMaxPage % 2 === 0;
      this.pages = even ? [] : [this.current];
      for (let i = 1; i <= count; i++) {
        if (even) {
          this.pages.unshift(this.current - (i - 1));
        } else {
          this.pages.unshift(this.current - i);
        }
        this.pages.push(this.current + i);
      }
      let pagesArr = Array.from(this.pages);
      this.pages.forEach(val => {
        if (val < 1) {
          pagesArr.push(pagesArr[pagesArr.length - 1] + 1);
        } else if (val > this.totalPage) {
          pagesArr.unshift(pagesArr[0] - 1);
        }
      });
      this.pages = pagesArr.filter(val => val > 0 && val <= this.totalPage);
    }
  }
}
