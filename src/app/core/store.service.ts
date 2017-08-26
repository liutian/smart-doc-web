import { Injectable, Inject, Optional } from '@angular/core';

@Injectable()
export class StoreService {

  private hasLocalStorage: boolean;
  private store = {};

  constructor( @Optional() @Inject('storeName') private storeName) {
    if (!this.storeName) {
      this.storeName = 'sn-';
    }

    this.hasLocalStorage = !!window.localStorage;

    if (this.hasLocalStorage) {
      for (let i = 0; i < window.localStorage.length; i++) {
        const key: string = window.localStorage.key(i);
        const prop = key.split('-')[1];
        if (key.indexOf(this.storeName) === 0 && prop) {
          try {
            this.store[prop] = JSON.parse(window.localStorage.getItem(key));
          } catch (e) { }
        }
      }
    }
  }

  get(key: string) {
    return this.store[key];
  }

  set(key: string, value: any) {
    if (value) {
      if (Object.prototype.toString.call(value) !== '[object Object]') {
        throw new Error('must be Object');
      }

      this.store[key] = value;
      window.localStorage.setItem(this.storeName + key, JSON.stringify(value));

    } else {
      delete this.store[key];
      window.localStorage.removeItem(this.storeName + key);
    }
  }

}
