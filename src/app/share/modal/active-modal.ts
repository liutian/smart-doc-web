import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  ReflectiveInjector,
  Injector,
  ApplicationRef,
  ComponentRef,
} from '@angular/core';

import { ModalComponent } from './modal.component';


export class ActiveModal {
  windowModalRef: ComponentRef<ModalComponent>;
  contentRef?: ComponentRef<any>;
  result: Promise<any> = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });

  private resolve: any;
  private reject: any;

  constructor(public option: any) { }

  close(result) {
    if (!this.windowModalRef) {
      return;
    }

    this.windowModalRef.instance.show = false;
    window.setTimeout(() => {
      this.removeEle();
    }, 300);

    if (result instanceof Error) {
      this.reject(result);
    } else {
      this.resolve(result);
    }
  }

  backdrop() {
    if (!this.windowModalRef) {
      return;
    }

    this.resolve('backdrop');
    this.removeEle();
  }

  private removeEle() {
    const windowModalEle = this.windowModalRef.location.nativeElement;
    windowModalEle.parentNode.removeChild(windowModalEle);
    this.windowModalRef.destroy();

    if (this.contentRef) {
      this.contentRef.destroy();
    }

    this.windowModalRef = null;
    this.contentRef = null;
  }
}
