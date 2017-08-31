import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ShareModule } from 'app/share/share.module';
import { ViewRoutingModule } from 'app/view/routing/view-routing.module';
import { SectionGuideComponent } from 'app/view/section-guide/section-guide.component';
import { LayoutComponent } from 'app/view/layout/layout.component';
import { ManualArticleComponent } from 'app/view/manual-article/manual-article.component';
import { ManualLayoutComponent } from 'app/view/manual-layout/manual-layout.component';
import { ApiService } from './api.service';

@NgModule({
  imports: [
    ShareModule,
    ViewRoutingModule
  ],
  declarations: [
    LayoutComponent,
    ManualLayoutComponent,
    ManualArticleComponent,
    SectionGuideComponent
  ],
  providers: [ApiService]
})
export class ViewModule { }

