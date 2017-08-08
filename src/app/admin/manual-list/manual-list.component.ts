import { Component, OnInit } from '@angular/core';


import { ActiveModal } from '../../share/modal/active-modal';
import { ModalService } from '../../share/modal/modal.service';
import { ManualAddComponent } from '../manual-add/manual-add.component';
import { ArticleSetComponent } from '../article-set/article-set.component';

@Component({
  selector: 'app-manual-list',
  templateUrl: './manual-list.component.html',
  styleUrls: ['./manual-list.component.scss']
})
export class ManualListComponent {

  constructor(private modal: ModalService) { }

  openArticleSetModal() {
    this.modal.open(ArticleSetComponent, { size: 'large' })
  }
  addManual() {
    const activeModal: ActiveModal = this.modal.open(ManualAddComponent);
    activeModal.result.then(function (result) {
      console.log('modal close');
    }, function (reason) {
      console.log('modal dismiss');
    })
  }

}
