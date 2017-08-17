import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  login(data) {
    return this.http.post('/open/login', data);
  }
}
