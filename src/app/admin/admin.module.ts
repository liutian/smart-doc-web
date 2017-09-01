import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArticleSetComponent } from 'app/admin/article-set/article-set.component';
import { LayoutComponent } from 'app/admin/layout/layout.component';
import { ManualAddComponent } from 'app/admin/manual-add/manual-add.component';
import { ManualArticleComponent } from 'app/admin/manual-article/manual-article.component';
import { ManualLayoutComponent } from 'app/admin/manual-layout/manual-layout.component';
import { ManualListComponent } from 'app/admin/manual-list/manual-list.component';
import { SiteAddComponent } from 'app/admin/site-add/site-add.component';
import { SiteListComponent } from 'app/admin/site-list/site-list.component';

import { ShareModule } from 'app/share/share.module';
import { ApiService } from 'app/admin/api.service';
import { UserEditComponent } from 'app/admin/user-edit/user-edit.component';
import { AdminRoutingModule } from 'app/admin/routing/admin-routing.module';

@NgModule({
  imports: [
    ShareModule,
    AdminRoutingModule
  ],
  declarations: [
    ArticleSetComponent,
    LayoutComponent,
    ManualAddComponent,
    ManualArticleComponent,
    ManualLayoutComponent,
    ManualListComponent,
    SiteAddComponent,
    SiteListComponent,
    UserEditComponent
  ],
  entryComponents: [
    ManualAddComponent,
    SiteListComponent,
    SiteAddComponent,
    ArticleSetComponent,
    UserEditComponent
  ],
  providers: [ApiService],
})
export class AdminModule { }
