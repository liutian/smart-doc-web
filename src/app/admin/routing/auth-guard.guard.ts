import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StoreService } from 'app/core/store.service';
import { NotificationService } from 'app/core/notification/notification.service';

@Injectable()
export class AuthGuardGuard implements CanActivate, CanActivateChild {

  constructor(
    private storeService: StoreService,
    private router: Router,
    private notification: NotificationService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.storeService.get('userInfo')) {
      this.router.navigateByUrl('/welcome/login');
      return false;
    }

    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.storeService.get('userInfo')) {
      this.notification.show({
        title: '无权操作',
        duration: 3000
      });
      return false;
    }

    return true;
  }
}
