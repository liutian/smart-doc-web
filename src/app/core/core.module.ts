import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NotificationComponent } from 'app/core/notification/notification.component';
import { NotificationService } from 'app/core/notification/notification.service';
import { CommonInterceptorService } from 'app/core/common-interceptor.service';
import { StoreService } from 'app/core/store.service';
import { ApiService } from 'app/core/api.service';
import { BroadcastService } from './broadcast.service';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NotificationComponent],
  entryComponents: [NotificationComponent],
  exports: [NotificationComponent],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptorService,
      multi: true,
    },
    NotificationService,
    StoreService,
    BroadcastService,

  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private swUpdate: SwUpdate,
    private notification: NotificationService) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    this.init();
  }

  init() {
    this.swUpdate.available.subscribe((e: UpdateAvailableEvent) => {
      this.notification.show({
        title: '发现新版本',
        type: 'info',
        duration: 3000,
        close: true
      });
    });
  }
}
