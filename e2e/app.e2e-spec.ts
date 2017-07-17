import { AngularUniversalDemoPage } from './app.po';

describe('angular-universal-demo App', () => {
  let page: AngularUniversalDemoPage;

  beforeEach(() => {
    page = new AngularUniversalDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
