import { Toh.NoPage } from './app.po';

describe('toh.no App', () => {
  let page: Toh.NoPage;

  beforeEach(() => {
    page = new Toh.NoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
