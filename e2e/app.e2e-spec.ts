import { DkutChatRoomPage } from './app.po';

describe('dkut-chat-room App', function() {
  let page: DkutChatRoomPage;

  beforeEach(() => {
    page = new DkutChatRoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
