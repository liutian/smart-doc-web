import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef, ReflectiveInjector } from '@angular/core';

import { NotificationComponent } from './notification.component';

@Injectable()
export class NotificationService {

  private componentRef: ComponentRef<NotificationComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef: ApplicationRef) { }

  show(option) {
    if (!this.componentRef) {
      this.createComponent();
    }

    this.componentRef.instance.push(option);
  }

  createComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NotificationComponent);
    const injecter = ReflectiveInjector.resolveAndCreate([]);
    this.componentRef = componentFactory.create(injecter);
    this.applicationRef.attachView(this.componentRef.hostView);
    document.body.appendChild(this.componentRef.location.nativeElement);
  }

}
