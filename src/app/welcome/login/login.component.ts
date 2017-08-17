import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from 'app/core/notification/notification.service';
import { ApiService } from 'app/welcome/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public formData: {
    loginName: string,
    password: string
  } | any = {};

  constructor(
    private apiService: ApiService,
    private router: Router,
    private notification: NotificationService) { }

  login() {
    this.apiService.login(this.formData).subscribe(e => {
      this.router.navigateByUrl('/admin/manual-list');
    })
  }


}
