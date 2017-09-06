import { Component, OnInit } from '@angular/core';

import { ActiveModal } from 'app/share/modal/active-modal';
import { ApiService } from 'app/admin/api.service';
import { pick } from 'app/util/util';

@Component({
  templateUrl: './manual-save.component.html',
  styleUrls: ['./manual-save.component.scss']
})
export class ManualSaveComponent implements OnInit {
  manId: string;
  formData: {
    name: string,
    cover: string,
    des: string,
    state: number
  } | any = {};

  constructor(
    private activeModal: ActiveModal,
    private apiService: ApiService) { }

  ngOnInit() {
    this.manId = this.activeModal.option.manId;
    if (this.manId) {
      this.apiService.getMan(this.manId).subscribe(res => {
        this.formData = pick(res, 'name cover des state');
      });
    }
  }

  close() {
    this.activeModal.close('close');
  }

  onUpload(e) {
    this.formData.cover = e[2].files[0].path;
  }

  submit() {
    if (this.manId) {
      this.apiService.updateMan(this.manId, this.formData).subscribe(res => {
        this.activeModal.close(true);
      });
    } else {
      this.formData.siteId = this.activeModal.option.siteId;
      this.apiService.addMan(this.formData).subscribe(v => {
        this.activeModal.close(true);
      });
    }
  }
}
