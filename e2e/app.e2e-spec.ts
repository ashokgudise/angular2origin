import { Angular2originPage } from './app.po';

describe('angular2origin App', function() {
  let page: Angular2originPage;

  beforeEach(() => {
    page = new Angular2originPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
