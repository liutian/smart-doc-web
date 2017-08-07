import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-site-add',
  templateUrl: './site-add.component.html',
  styleUrls: ['./site-add.component.scss']
})
export class SiteAddComponent implements OnInit {
  logoUploader: FileUploader = new FileUploader({
    url: '/upload'
  })
  constructor() { }

  onLogoFileChange($event) {
    console.log('onLogoFileChange');
  }
  ngOnInit() {
    this.logoUploader.onSuccessItem = function () {
      console.log('sss');
    }
  }

}
