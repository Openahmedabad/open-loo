import { OpenLooPage } from './app.po';

describe('open-loo App', () => {
  let page: OpenLooPage;

  beforeEach(() => {
    page = new OpenLooPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
