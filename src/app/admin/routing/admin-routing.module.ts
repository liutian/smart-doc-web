import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from 'app/admin/layout/layout.component';
import { ManualArticleComponent } from 'app/admin/manual-article/manual-article.component';
import { ManualLayoutComponent } from 'app/admin/manual-layout/manual-layout.component';
import { ManualListComponent } from 'app/admin/manual-list/manual-list.component';
import { AuthGuardGuard } from './auth-guard.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuardGuard],
        canActivateChild: [AuthGuardGuard],
        children: [
          {
            path: '',
            component: ManualListComponent
          }, {
            path: 'manual/:manId',
            component: ManualLayoutComponent,
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
  exports: [RouterModule],
  providers: [AuthGuardGuard]
})
export class AdminRoutingModule { }
