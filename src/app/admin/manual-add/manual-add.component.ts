import { Component, OnInit } from '@angular/core';

import { ActiveModal } from 'app/share/modal/active-modal';
import { ApiService } from 'app/admin/api.service';

@Component({
  selector: 'app-manual-add',
  templateUrl: './manual-add.component.html',
  styleUrls: ['./manual-add.component.scss']
})
export class ManualAddComponent implements OnInit {

  formData: {
    name: string,
    cover: string,
    des: string
  } | any = {};

  logoUploader;
  constructor(
    private activeModal: ActiveModal,
    private apiService: ApiService) { }

  ngOnInit() { }

  close() {
    this.activeModal.dismiss('dismiss');
  }

  onLogoFileChange($event) {

  }

  submit() {
    this.formData.siteId = this.activeModal.option.siteId;
    this.apiService.addMan(this.formData).subscribe(v => {
      this.activeModal.close(true);
    });
  }
}
