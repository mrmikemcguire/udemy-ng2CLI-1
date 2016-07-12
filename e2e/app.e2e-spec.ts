import { UdemyNg2CLI1Page } from './app.po';

describe('udemy-ng2-cli-1 App', function() {
  let page: UdemyNg2CLI1Page;

  beforeEach(() => {
    page = new UdemyNg2CLI1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
