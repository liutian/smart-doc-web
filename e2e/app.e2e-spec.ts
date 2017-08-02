import { ManWebPage } from './app.po';

describe('man-web App', () => {
  let page: ManWebPage;

  beforeEach(() => {
    page = new ManWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
