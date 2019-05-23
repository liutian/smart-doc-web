import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StoreService } from 'app/core/store.service';
import { map } from 'rxjs/operators';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private store: StoreService) { }

  login(data) {
    return this.http.post('/open/login', data).pipe(map(res => {
      this.store.set('userInfo', res);
    }));
  }

  logout() {
    return this.http.post('/auth/logout', {}).pipe(map(() => {
      this.store.set('userInfo', null);
    }));
  }

  updateUserInfo(data) {
    return this.http.post('/auth/user', data).pipe(map(res => {
      this.store.set('userInfo', res);
    }));
  }

  getArticle(id) {
    return this.http.get(`/open/article/${id}`);
  }


}
