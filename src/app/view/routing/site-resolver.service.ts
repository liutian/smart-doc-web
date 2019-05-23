import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NotificationService } from 'app/core/notification/notification.service';
import { ApiService } from 'app/view/api.service';
import { of, throwError as observableThrowError } from 'rxjs';
import { catchError, mergeMap } from 'rxjs/operators';


@Injectable()
export class SiteViewResolver implements Resolve<any> {

  constructor(
    private apiService: ApiService,
    private notificationService: NotificationService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const api = route.queryParamMap.get('preview') ? 'getAuthSiteAndMan' : 'getSiteAndMan';
    return this.apiService[api](
      route.paramMap.get('siteId'),
      route.paramMap.get('manId')
    ).pipe(mergeMap((event: any) => {
      return of(event);
    }), catchError(e => {
      this.notificationService.show({ type: 'error', title: '该站点信息不存在' });
      return observableThrowError(e);
    }));
  }
}
