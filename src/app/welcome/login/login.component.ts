import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../core/notification/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private router: Router,
    private notification: NotificationService) { }

  login($event) {
    $event.preventDefault();
    this.notification.show({
      title: 'sddsdssd', type: 'error', duration: 3000, close: true, afterClose: function () {
        console.log('close notification');
      }
    })
    // this.router.navigate(['admin']);
  }


}
