import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable()
export class ViewService implements Resolve<any>{
  siteId;
  manual;
  private _manualList;

  constructor(public http: HttpClient) { }

  public get manualList() {
    return this._manualList;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.siteId = route.queryParams.site || 1;
    return this.http.get('assets/mock/tree.json').switchMap(res => {
      this._manualList = res;

      return Observable.of(res);
    });
  }
}