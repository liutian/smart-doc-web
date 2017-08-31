import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'app/view/layout/layout.component';
import { ManualArticleComponent } from 'app/view/manual-article/manual-article.component';
import { ManualLayoutComponent } from 'app/view/manual-layout/manual-layout.component';
import { SiteViewResolver } from 'app/view/routing/site-resolver.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 's/:siteId/:manId',
            component: ManualLayoutComponent,
            resolve: { siteData: SiteViewResolver },
            children: [
              {
                path: ':articleId',
                component: ManualArticleComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  providers: [SiteViewResolver]
})
export class ViewRoutingModule { }
