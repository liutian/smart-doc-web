import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export enum Keys {
  SiteList
}

@Injectable()
export class BroadcastService {

  private subjectMap = new Map();

  constructor() { }

  get(name: Keys) {
    let subject = this.subjectMap.get(name);
    if (!subject) {
      subject = new Subject();
      this.subjectMap.set(name, subject);
    }

    return subject;
  }

  emit(name: Keys, data?) {
    const subject = this.get(name);
    subject.next(data);
  }

  subscribe(name: Keys, callback) {
    const subject = this.get(name);
    subject.subscribe(callback);
  }

}
