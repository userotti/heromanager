import { VelvetcakecoPage } from './app.po';

describe('velvetcakeco App', function() {
  let page: VelvetcakecoPage;

  beforeEach(() => {
    page = new VelvetcakecoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
