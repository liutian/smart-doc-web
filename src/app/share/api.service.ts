import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('/open/login', data);
  }

  logout() {
    return this.http.post('/auth/logout', {});
  }


}
