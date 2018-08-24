/* global it, expect, describe, jest */
import Cookies from 'universal-cookie';
import * as Util from './index';

describe('Share tests', () => {
  global.open = jest.fn();

  it('share on facebook', () => {
    Util.shareOnFacebook('link');

    const top = (global.innerHeight - 675) / 2;
    const left = (global.innerWidth - 575) / 2;

    expect(global.open.mock.calls.length).toEqual(1);
    expect(global.open.mock.calls[0]).toEqual([
      'https://www.facebook.com/sharer/sharer.php?u=link',
      'facebook-share-dialog',
      `width=575,height=675,top=${top},left=${left}`,
    ]);
  });

  it('share on twitter with only link', () => {
    global.open.mockReset();

    const link = 'https://test.com/some?weird=0&things=1';

    const encodedLink = encodeURIComponent(link);

    Util.shareOnTwitter(link);

    const top = (global.innerHeight - 675) / 2;
    const left = (global.innerWidth - 300) / 2;

    expect(global.open.mock.calls.length).toEqual(1);
    expect(global.open.mock.calls[0]).toEqual([
      `https://twitter.com/share?url=${encodedLink}`,
      'twitter-share-dialog',
      `width=575,height=300,top=${top},left=${left}`,
    ]);
  });

  it('share on twitter with link and text', () => {
    global.open.mockReset();

    const link = 'https://test.com/some?weird=0&things=1';
    const text = 'text with 🇸🇪 🐣 🐱 emojis';

    const encodedLink = encodeURIComponent(link);
    const encodedText = encodeURIComponent(text);

    Util.shareOnTwitter(link, text);

    const top = (global.innerHeight - 675) / 2;
    const left = (global.innerWidth - 300) / 2;

    expect(global.open.mock.calls.length).toEqual(1);
    expect(global.open.mock.calls[0]).toEqual([
      `https://twitter.com/share?url=${encodedLink}&text=${encodedText}`,
      'twitter-share-dialog',
      `width=575,height=300,top=${top},left=${left}`,
    ]);
  });

  it('share on twitter with link, text, and hashtags', () => {
    global.open.mockReset();

    const link = 'https://test.com/some?weird=0&things=1';
    const text = 'text with 🇸🇪 🐣 🐱 emojis';
    const hashtags = 'hashtag1,sweden🇸🇪';

    const encodedLink = encodeURIComponent(link);
    const encodedText = encodeURIComponent(text);
    const encodedHashtags = encodeURIComponent(hashtags);

    Util.shareOnTwitter(link, text, hashtags);

    const top = (global.innerHeight - 675) / 2;
    const left = (global.innerWidth - 300) / 2;

    expect(global.open.mock.calls.length).toEqual(1);
    expect(global.open.mock.calls[0]).toEqual([
      `https://twitter.com/share?url=${encodedLink}&text=${encodedText}&hashtags=${encodedHashtags}`,
      'twitter-share-dialog',
      `width=575,height=300,top=${top},left=${left}`,
    ]);
  });
});

describe('cookies tests', () => {
  const cookies = new Cookies();

  it('privacy banner is not closed', () => {
    expect(Util.isPrivacyBannerClosed()).toEqual(false);
    expect(cookies.get('privacy-banner-closed')).toEqual(undefined);
  });

  it('on privacy banner closed', () => {
    Util.onPrivacyBannerClosed();

    expect(cookies.get('privacy-banner-closed')).toEqual('true');
    expect(Util.isPrivacyBannerClosed()).toEqual(true);
  });
});
