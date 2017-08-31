import { Component, OnInit, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private doc) {
    this.doc.body.style.backgroundColor = '#E6E7EC';
  }

  ngOnInit() {
  }

}
