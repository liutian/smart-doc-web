import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { NotificationService } from 'app/core/notification/notification.service';
import { ApiService } from 'app/share/api.service';
import { StoreService } from 'app/core/store.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formData: {
    loginName: string,
    password: string
  } | any = {};

  constructor(
    private apiService: ApiService,
    private router: Router,
    private notification: NotificationService,
    private store: StoreService,
    @Inject(DOCUMENT) private doc) { }

  ngOnInit() {
    this.doc.body.style.backgroundColor = '#E6E7EC';
  }

  login() {
    this.apiService.login(this.formData).subscribe(res => {
      this.router.navigateByUrl('/admin/manual-list');
    }, resError => {
      this.notification.show({
        title: '用户名密码错误',
        type: 'error',
        duration: 300000,
        close: true
      });
    });
  }


}
