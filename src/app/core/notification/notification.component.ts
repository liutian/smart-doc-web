import { Component, OnInit, HostBinding, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @HostBinding('style.top.px')
  top = 20;
  duration = 4000;
  list = [];

  constructor() { }

  ngOnInit() { }

  public push(item) {
    this.list.push(item);
    window.setTimeout(() => {
      item.show = true;
      window.setTimeout(() => {
        this.remove(item);
      }, item.duration || this.duration);
    }, 100);
  }

  remove(item) {
    item.remove = true;
    window.setTimeout(() => {
      const index = this.list.findIndex((val) => item === val);
      this.list.splice(index, 1);
      item.afterClose && item.afterClose();
    }, 300);
  }

}
