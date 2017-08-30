import { Component, OnInit } from '@angular/core';

import { StoreService } from 'app/core/store.service';
import { ApiService } from 'app/core/api.service';
import { pick } from 'app/util/util';
import { NotificationService } from 'app/core/notification/notification.service';
import { ActiveModal } from 'app/share/modal/active-modal';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  formData: any = {};

  constructor(
    private store: StoreService,
    private apiService: ApiService,
    private notification: NotificationService,
    private activeModal: ActiveModal) {
    this.formData = Object.assign({}, this.store.get('userInfo'));
  }

  ngOnInit() {
  }

  close() {
    this.activeModal.dismiss('dismiss');
  }

  submit() {
    const data = pick(this.formData, 'nickname password');
    this.apiService.updateUserInfo(data).subscribe(() => {
      window.setTimeout(() => {
        this.activeModal.close(true);
      }, 1500);

      this.notification.show({
        title: '修改成功',
        type: 'success',
        duration: 1500,
        close: true
      });
    });
  }

}
