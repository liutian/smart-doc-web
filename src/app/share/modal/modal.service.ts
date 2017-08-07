import {
  Injectable,
  ComponentFactoryResolver,
  ComponentFactory,
  ReflectiveInjector,
  Injector,
  ApplicationRef,
  ComponentRef,
  Optional
} from '@angular/core';

import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {

  defaultOption = {
    size: 'normal'
  }

  constructor(
    private comFacResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef) { }

  open(content: any, option?: any): ActiveModal {
    const modalOption = option ? Object.assign({}, this.defaultOption, option) : this.defaultOption;
    const activeModal = new ActiveModal(modalOption);
    const modalInjector = ReflectiveInjector.resolveAndCreate([{ provide: ActiveModal, useValue: activeModal }], this.injector);

    let contentEle;
    if (typeof content === 'string') {
      contentEle = document.createElement('div');
      contentEle.innerHTML = content;
    } else {
      const contentFactory = this.comFacResolver.resolveComponentFactory(content);
      const contentRef = contentFactory.create(modalInjector);
      this.applicationRef.attachView(contentRef.hostView);
      contentEle = contentRef.location.nativeElement;
      activeModal.contentRef = contentRef;
    }

    const windowFactory = this.comFacResolver.resolveComponentFactory(ModalComponent);
    const windowRef = windowFactory.create(modalInjector, [[contentEle]]);
    this.applicationRef.attachView(windowRef.hostView);
    document.body.appendChild(windowRef.location.nativeElement);

    activeModal.windowModalRef = windowRef;

    return activeModal;
  }
}


@Injectable()
export class ActiveModal {
  windowModalRef: ComponentRef<ModalComponent>;
  contentRef?: ComponentRef<any>;
  result: Promise<any> = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  })

  private resolve: any;
  private reject: any;

  constructor( @Optional() public option: any) { }

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
