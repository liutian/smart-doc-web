import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { StoreService } from 'app/core/store.service';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient, private store: StoreService) { }

  login(data) {
    return this.http.post('/open/login', data).do(res => {
      this.store.set('userInfo', res);
    });
  }

  logout() {
    return this.http.post('/auth/logout', {}).do(() => {
      this.store.set('userInfo', null);
    });
  }

  updateUserInfo(data) {
    return this.http.post('/auth/user', data).do(res => {
      this.store.set('userInfo', res);
    });
  }

  getArticle(id) {
    return this.http.get(`/open/article/${id}`);
  }


}
