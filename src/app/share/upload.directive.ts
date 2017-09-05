import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from 'environments/environment';

@Directive({
  selector: '[appUpload]',
  exportAs: 'appUpload'
})
export class UploadDirective implements OnInit {

  private scriptPath = 'assets/lib/fine-uploader/';
  public uploader: any;
  @Input() endpoint: string;
  @Input() autoUpload: boolean;
  @Output() allComplete = new EventEmitter();
  @Output() complete = new EventEmitter();

  constructor(private eleRef: ElementRef) { }

  ngOnInit() {
    if (window.UE) {
      this.init.apply(this);
    } else {
      window.LazyLoad.js(this.scriptPath + 'fine-uploader.core.min.js', this.init, null, this);
    }
  }

  init() {
    this.endpoint = new window.qq.FineUploaderBasic({
      // debug: true,
      button: this.eleRef.nativeElement,
      request: {
        endpoint: this.endpoint ? this.endpoint : environment.uploadPath
      },
      cors: {
        expected: true,
        sendCredentials: true,
        allowXdr: true
      },
      callbacks: {
        onAllComplete: (...params) => {
          this.allComplete.emit(params);
        },
        onComplete: (...params) => {
          this.complete.emit(params);
        }
      },
      autoUpload: this.autoUpload === undefined ? true : this.autoUpload
    });
  }
}
