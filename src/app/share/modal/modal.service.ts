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
import { ActiveModal } from './active-modal';

@Injectable()
export class ModalService {

  defaultOption = {
    size: 'normal',
    backdrop: true
  };

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

