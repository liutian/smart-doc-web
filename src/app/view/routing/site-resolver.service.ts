import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { ApiService } from 'app/view/api.service';

@Injectable()
export class SiteViewResolver implements Resolve<any> {

  constructor(private apiService: ApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const api = route.queryParamMap.get('preview') ? 'getAuthSiteAndMan' : 'getSiteAndMan';
    return this.apiService[api](
      route.paramMap.get('siteId'),
      route.paramMap.get('manId')
    ).switchMap(res => {
      return Observable.of(res);
    });
  }
}
