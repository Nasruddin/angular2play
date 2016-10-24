import { PlayingPage } from './app.po';

describe('playing App', function() {
  let page: PlayingPage;

  beforeEach(() => {
    page = new PlayingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
