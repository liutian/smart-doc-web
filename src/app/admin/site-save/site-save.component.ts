import { Component, OnInit, ViewChild } from '@angular/core';

import { ActiveModal } from 'app/share/modal/active-modal';
import { ApiService } from 'app/admin/api.service';
import { environment } from 'environments/environment';
import { pick } from 'app/util/util';

@Component({
  templateUrl: './site-save.component.html',
  styleUrls: ['./site-save.component.scss']
})
export class SiteSaveComponent implements OnInit {
  siteId;
  formData: {
    name: string,
    logo: string,
    type: number
  } | any = {};

  constructor(
    private apiService: ApiService,
    private activeModal: ActiveModal) { }

  ngOnInit() {
    this.siteId = this.activeModal.option.siteId;
    if (this.siteId) {
      this.apiService.getSite(this.activeModal.option.siteId).subscribe(res => {
        this.formData = pick(res, 'name logo des');
      });
    }
  }

  onUpload(e) {
    this.formData.logo = e[2].files.fileList[0].path;
  }

  close() {
    this.activeModal.close('dismiss');
  }

  submit() {
    if (this.siteId) {
      this.apiService.updateSite(this.siteId, this.formData).subscribe(res => {
        this.activeModal.close(true);
      });
    } else {
      this.apiService.addSite(this.formData).subscribe(v => {
        this.activeModal.close(true);
      });
    }
  }

}
