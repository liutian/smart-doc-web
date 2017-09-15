import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import 'app/share/rxjs';
import { LayoutComponent } from 'app/share/layout/layout.component';
import { PaginationComponent } from 'app/share/pagination/pagination.component';
import { TreeService } from 'app/share/tree/tree.service';
import { AffixDirective } from 'app/share/affix.directive';
import { RollDirective } from 'app/share/roll.directive';
import { TopDirective } from 'app/share/top.directive';
import { ModalComponent } from 'app/share/modal/modal.component';
import { ModalConfirmComponent } from 'app/share/modal/modal-confirm/modal-confirm.component';
import { ModalService } from 'app/share/modal/modal.service';
import { UeditorComponent } from 'app/share/ueditor/ueditor.component';
import { UploadDirective } from './upload.directive';
import { SelectComponent } from './select/select.component';
import { SelectOptionComponent } from 'app/share/select/select-option/select-option.component';
import { SelectMatchComponent } from 'app/share/select/select-match/select-match.component';
import { ResizeWidthDirective } from './resize-width.directive';
import { TreeComponent } from './tree/tree.component';
import { TreeNodeComponent } from "./tree/tree-node/tree-node.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    UploadDirective,
    UeditorComponent,
    LayoutComponent,
    PaginationComponent,
    AffixDirective,
    RollDirective,
    TopDirective,
    ModalComponent,
    ModalConfirmComponent,
    SelectComponent,
    SelectOptionComponent,
    SelectMatchComponent,
    ResizeWidthDirective,
    TreeComponent,
    TreeNodeComponent
  ],

  exports: [
    UploadDirective,
    UeditorComponent,
    LayoutComponent,
    PaginationComponent,
    AffixDirective,
    RollDirective,
    TopDirective,
    CommonModule,
    FormsModule,
    RouterModule,
    SelectComponent,
    SelectOptionComponent,
    SelectMatchComponent,
    ResizeWidthDirective,
    TreeComponent
  ],
  entryComponents: [ModalComponent, ModalConfirmComponent],
  providers: [TreeService, ModalService]
})
export class ShareModule { }
