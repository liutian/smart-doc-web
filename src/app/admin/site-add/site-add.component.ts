import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { ActiveModal } from 'app/share/modal/active-modal';
import { ApiService } from 'app/admin/api.service';

@Component({
  templateUrl: './site-add.component.html',
  styleUrls: ['./site-add.component.scss']
})
export class SiteAddComponent implements OnInit {
  logoUploader: FileUploader = new FileUploader({
    url: '/upload'
  });
  formData: {
    name: string,
    logo: string,
    type: number
  } | any = {};

  constructor(
    private apiService: ApiService,
    private activeModal: ActiveModal) { }

  ngOnInit() {
    this.logoUploader.onSuccessItem = function () {
      console.log('sss');
    };
  }

  close() {
    this.activeModal.dismiss('dismiss');
  }

  onLogoFileChange($event) {
    console.log('onLogoFileChange');
  }

  submit() {
    this.apiService.addSite(this.formData).subscribe(v => {
      this.activeModal.close(true);
    });
  }

}
