import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  findSite() {
    return this.http.get('/auth/site');
  }

  findManWrite() {
    return this.http.get('/auth/man-write');
  }

  findMan(params: HttpParams) {
    return this.http.get('/auth/man', {
      params: params
    });
  }

  addSite(data) {
    return this.http.post('/auth/site', data);
  }

  updateSite(id, data) {
    return this.http.post('/auth/site/' + id, data);
  }

  addMan(data) {
    return this.http.post('/auth/man', data);
  }
}
