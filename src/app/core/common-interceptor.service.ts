import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/do';

import { environment } from 'environments/environment';
import { NotificationService } from 'app/core/notification/notification.service';

@Injectable()
export class CommonInterceptorService implements HttpInterceptor {

  constructor(private notification: NotificationService,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let _req = req.clone();

    if (_req.url.indexOf('//') == -1) {
      _req = _req.clone({ url: environment.apiPath + _req.url });
    }

    // IE 浏览器可能对get请求结果进行缓存
    // if (_req.method == 'GET') {
    //   _req = _req.clone({
    //     setHeaders: {
    //       'If-Modified-Since': '0',
    //       'Cache-Control': 'no-cache'
    //     }
    //   })
    // }

    return next.handle(_req).catch(resError => {
      let notice = '';
      if (resError.status == 401) {
        notice = '会话超时';
        this.router.navigateByUrl('/admin');
      } else if (resError.status == 400) {
        notice = '网络异常';
      } else {
        notice = '网络错误';
      }

      this.notification.show({
        title: notice,
        type: 'error',
        duration: 3000,
        close: true
      });
      return Observable.throw(resError);
    }).do((e) => {
      if (!(e instanceof HttpResponse)) return;

      let res = e as HttpResponse<any>;

    });
  }

}
