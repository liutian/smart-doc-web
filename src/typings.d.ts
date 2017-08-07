/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface Window {
  UE: any;
  UEDITOR_CONFIG: any;
  LazyLoad: any;
  env: any;
}

interface Navigator {
  browserLanguage: any;
  userLanguage: any;
}