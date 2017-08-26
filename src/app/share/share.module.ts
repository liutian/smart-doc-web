import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TreeMenuService } from './tree-menu/tree-menu.service';
import { AffixDirective } from './affix.directive';
import { RollDirective } from './roll.directive';
import { TopDirective } from './top.directive';
import { FileUploadModule } from 'ng2-file-upload';
import { ApiService } from './api.service';
import { ModalConfirmComponent } from './modal/modal-confirm/modal-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    LayoutComponent,
    ModalComponent,
    TreeMenuComponent,
    PaginationComponent,
    AffixDirective,
    RollDirective,
    TopDirective,
    ModalConfirmComponent],

  exports: [
    LayoutComponent,
    TreeMenuComponent,
    PaginationComponent,
    AffixDirective,
    RollDirective,
    TopDirective,
    FileUploadModule,
    CommonModule,
    FormsModule
  ],

  entryComponents: [ModalComponent, ModalConfirmComponent],
  providers: [ModalService, TreeMenuService, ApiService]
})
export class ShareModule { }
