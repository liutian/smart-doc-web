import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual-article',
  templateUrl: './manual-article.component.html',
  styleUrls: ['./manual-article.component.scss']
})
export class ManualArticleComponent implements OnInit {

  public content = 'sdfsdf';
  constructor() { }

  ngOnInit() { }

}
