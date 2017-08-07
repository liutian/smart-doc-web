import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { ManualArticleComponent } from './manual-article/manual-article.component';
import { ManualHomeComponent } from './manual-home/manual-home.component';
import { ManualLayoutComponent } from './manual-layout/manual-layout.component';
import { SectionGuideComponent } from './section-guide/section-guide.component';
import { ShareModule } from '../share/share.module';
import { ViewService } from './view.service';



let routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    resolve: { manual: ViewService },
    children: [
      {
        path: 'manual',
        component: ManualLayoutComponent,
        children: [
          {
            path: 'article',
            component: ManualArticleComponent
          },
          {
            path: 'home',
            component: ManualHomeComponent
          }
        ]
      }
    ]
  }
]


@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LayoutComponent, ManualArticleComponent, ManualHomeComponent, ManualLayoutComponent, SectionGuideComponent],
  providers: [ViewService]
})
export class ViewModule { }

