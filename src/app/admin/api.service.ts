import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  findSite() {
    return this.http.get('/auth/site');
  }

  findSiteAboutMe() {
    return this.http.get('/auth/site-about-me');
  }

  findMan(params: HttpParams) {
    return this.http.get('/auth/man', {
      params: params
    });
  }

  getMan(id) {
    return this.http.get(`/auth/man/${id}`);
  }

  findArticle(params: HttpParams) {
    return this.http.get('/auth/article', {
      params: params
    });
  }

  getArticle(id) {
    return this.http.get(`/auth/article/${id}`);
  }

  updateArticle(id, data) {
    return this.http.post(`/auth/article/${id}`, data);
  }

  addArticle(data) {
    return this.http.post('/auth/article', data);
  }

  addSite(data) {
    return this.http.post('/auth/site', data);
  }

  updateSite(id, data) {
    return this.http.post(`/auth/site/${id}`, data);
  }

  addMan(data) {
    return this.http.post('/auth/man', data);
  }
}
