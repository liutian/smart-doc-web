import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleSetComponent } from './article-set/article-set.component';
import { LayoutComponent } from './layout/layout.component';
import { ManualAddComponent } from './manual-add/manual-add.component';
import { ManualArticleComponent } from './manual-article/manual-article.component';
import { ManualLayoutComponent } from './manual-layout/manual-layout.component';
import { ManualListComponent } from './manual-list/manual-list.component';
import { SiteAddComponent } from './site-add/site-add.component';
import { SiteListComponent } from './site-list/site-list.component';
import { UeditorComponent } from './ueditor/ueditor.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'manual-list',
            component: ManualListComponent
          }, {
            path: 'manual',
            component: ManualLayoutComponent,
            children: [
              {
                path: '',
                component: ManualArticleComponent
              }
            ]
          }

        ]
      }
    ])
  ],
  declarations: [ArticleSetComponent, LayoutComponent, ManualAddComponent, ManualArticleComponent, ManualLayoutComponent, ManualListComponent, SiteAddComponent, SiteListComponent, UeditorComponent],
  entryComponents: [
    ManualAddComponent,
    SiteListComponent,
    SiteAddComponent,
    ArticleSetComponent
  ],
})
export class AdminModule { }
