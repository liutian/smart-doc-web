import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NotificationComponent } from 'app/core/notification/notification.component';
import { NotificationService } from 'app/core/notification/notification.service';
import { CommonInterceptorService } from 'app/core/common-interceptor.service';
import { StoreService } from 'app/core/store.service';
import { ApiService } from 'app/core/api.service';


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

  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
