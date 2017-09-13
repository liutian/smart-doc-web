import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';


import { ActiveModal } from 'app/share/modal/active-modal';
import { ApiService } from 'app/admin/api.service';
import { pick } from 'app/util/util';

@Component({
  templateUrl: './manual-save.component.html',
  styleUrls: ['./manual-save.component.scss']
})
export class ManualSaveComponent implements OnInit {
  manId: string;
  adminList: any[] = [];
  adminAllList: any[] = [];
  formData: {
    name: string,
    cover: string,
    des: string,
    state: number,
  } | any = {};

  constructor(
    private activeModal: ActiveModal,
    private apiService: ApiService) { }

  ngOnInit() {
    this.manId = this.activeModal.option.manId;
    if (this.manId) {
      this.apiService.getMan(this.manId).subscribe((res: any) => {
        this.formData = pick(res, 'name cover des state');
        this.adminList = res.admins;
      });
    }
  }

  onSearchAdmin(text) {
    this.apiService.findUser(new HttpParams().set('loginName', text)).subscribe((userList: any[]) => {
      this.adminAllList = userList;
    });
  }
  close() {
    this.activeModal.close('close');
  }

  onUpload(e) {
    this.formData.cover = e[2].files.fileList[0].path;
  }

  submit() {
    const formData = Object.assign(this.formData, {
      admins: this.adminList.map(a => {
        return a.id;
      })
    });

    if (this.manId) {
      this.apiService.updateMan(this.manId, formData).subscribe(res => {
        this.activeModal.close(true);
      });
    } else {
      formData.siteId = this.activeModal.option.siteId;
      this.apiService.addMan(formData).subscribe(v => {
        this.activeModal.close(true);
      });
    }
  }
}
