import {
  Component,
  OnInit,
  SimpleChanges,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ApplicationRef,
  ViewChild,
  ElementRef
} from '@angular/core';

let idCount = 0;
let scriptPath = 'assets/lib/ueditor/';

@Component({
  selector: 'app-ueditor',
  templateUrl: './ueditor.component.html',
  styleUrls: ['./ueditor.component.scss']
})
export class UeditorComponent implements OnInit {

  @Input() content: string;
  @Output() contentChange = new EventEmitter();

  public selectorId = 'ueditor-' + (++idCount);
  constructor(private applicationRef: ApplicationRef) { }

  ngOnInit() { }


  ngAfterViewInit() {
    if (window.UE) {
      this.init.apply(this);
    } else {
      window.LazyLoad.js(scriptPath + 'ueditor.all.js', this.init, null, this);
    }
  }

  init() {
    window.UE.Editor.prototype._bkGetActionUrl_copy = window.UE.Editor.prototype._bkGetActionUrl_copy || window.UE.Editor.prototype.getActionUrl;
    window.UE.Editor.prototype._bkGetActionUrl = window.UE.Editor.prototype._bkGetActionUrl_copy;
    window.UE.Editor.prototype.getActionUrl = function (action) {
      if (action == 'uploadimage' || action == 'uploadscrawl' || action == 'uploadimage' || action == 'uploadvideo') {
        return window.env.APIURL + '/mobile/upload/one?action=' + action;
      } else {
        return this._bkGetActionUrl.call(this, action);
      }
    };

    // let toolbar = [['emotion','bold', 'italic', 'underline','fontborder',
    //       'strikethrough','customstyle', 'paragraph', 'fontfamily', 'fontsize',
    //       'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify',
    //       'simpleupload', 'insertimage']];
    let ueditor = window.UE.getEditor(this.selectorId, window.UEDITOR_CONFIG);

    ueditor.ready(() => {
      let that = this;
      ueditor.setContent(this.content || '');

      ueditor.addListener('contentChange', () => {
        this.content = ueditor.getContent();
        this.contentChange.emit(that.content);
        this.applicationRef.tick();
      });
    })
  }

}


window.UEDITOR_CONFIG = {
  zIndex: 1,
  //为编辑器实例添加一个路径，这个不能被注释
  UEDITOR_HOME_URL: scriptPath,

  // 服务器统一请求接口路径
  serverUrl: scriptPath + "config.json",

  lang: /^zh/.test(navigator.language || navigator.browserLanguage || navigator.userLanguage) ? 'zh-cn' : 'en',
  langPath: scriptPath + "lang/",

  //工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的重新定义
  toolbars: [[
    'fullscreen', 'source', '|', 'undo', 'redo', '|',
    'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
    'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
    'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
    'directionalityltr', 'directionalityrtl', 'indent', '|',
    'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
    'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
    'simpleupload', 'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'map', 'gmap', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
    'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
    'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', 'charts', '|',
    'print', 'preview', 'searchreplace', 'drafts', 'help'
  ]],
  xssFilterRules: true,
  //input xss过滤
  inputXssFilter: true,
  //output xss过滤
  outputXssFilter: true,
  initialFrameHeight: 600,
  // xss过滤白名单 名单来源: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
  whitList: {
    a: ['target', 'href', 'title', 'class', 'style'],
    abbr: ['title', 'class', 'style'],
    address: ['class', 'style'],
    area: ['shape', 'coords', 'href', 'alt'],
    article: [],
    aside: [],
    audio: ['autoplay', 'controls', 'loop', 'preload', 'src', 'class', 'style'],
    b: ['class', 'style'],
    bdi: ['dir'],
    bdo: ['dir'],
    big: [],
    blockquote: ['cite', 'class', 'style'],
    br: [],
    caption: ['class', 'style'],
    center: [],
    cite: [],
    code: ['class', 'style'],
    col: ['align', 'valign', 'span', 'width', 'class', 'style'],
    colgroup: ['align', 'valign', 'span', 'width', 'class', 'style'],
    dd: ['class', 'style'],
    del: ['datetime'],
    details: ['open'],
    div: ['class', 'style'],
    dl: ['class', 'style'],
    dt: ['class', 'style'],
    em: ['class', 'style'],
    font: ['color', 'size', 'face'],
    footer: [],
    h1: ['class', 'style'],
    h2: ['class', 'style'],
    h3: ['class', 'style'],
    h4: ['class', 'style'],
    h5: ['class', 'style'],
    h6: ['class', 'style'],
    header: [],
    hr: [],
    i: ['class', 'style'],
    img: ['src', 'alt', 'title', 'width', 'height', 'id', '_src', 'loadingclass', 'class', 'data-latex'],
    ins: ['datetime'],
    li: ['class', 'style'],
    mark: [],
    nav: [],
    ol: ['class', 'style'],
    p: ['class', 'style'],
    pre: ['class', 'style'],
    s: [],
    section: [],
    small: [],
    span: ['class', 'style'],
    sub: ['class', 'style'],
    sup: ['class', 'style'],
    strong: ['class', 'style'],
    table: ['width', 'border', 'align', 'valign', 'class', 'style'],
    tbody: ['align', 'valign', 'class', 'style'],
    td: ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
    tfoot: ['align', 'valign', 'class', 'style'],
    th: ['width', 'rowspan', 'colspan', 'align', 'valign', 'class', 'style'],
    thead: ['align', 'valign', 'class', 'style'],
    tr: ['rowspan', 'align', 'valign', 'class', 'style'],
    tt: [],
    u: [],
    ul: ['class', 'style'],
    video: ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'class', 'style']
  }
}