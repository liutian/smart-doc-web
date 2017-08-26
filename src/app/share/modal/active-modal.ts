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
    if (!this.windowModalRef) return;
    this.resolve(result);
    this.removeEle();
  }

  dismiss(reason) {
    if (!this.windowModalRef) return;
    this.reject(reason);
    this.removeEle();
  }

  private removeEle() {
    const windowModalEle = this.windowModalRef.location.nativeElement;
    windowModalEle.parentNode.removeChild(windowModalEle);
    this.windowModalRef.destroy();

    if (this.contentRef) this.contentRef.destroy();

    this.windowModalRef = null;
    this.contentRef = null;
  }
}
