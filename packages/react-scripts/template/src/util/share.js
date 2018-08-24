/* global window */
// @flow

export const shareOnFacebook = (link: string) => {
  const top = (window.innerHeight - 675) / 2;
  const left = (window.innerWidth - 575) / 2;

  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    'facebook-share-dialog',
    `width=575,height=675,top=${top},left=${left}`,
  );
};

export const shareOnTwitter = (link: string, text?: ?string, hashtags?: string) => {
  const top = (window.innerHeight - 675) / 2;
  const left = (window.innerWidth - 300) / 2;

  let hashtagsPart = '';
  let textPart = '';

  if (hashtags) {
    hashtagsPart = `&hashtags=${encodeURIComponent(hashtags)}`;
  }

  if (text) {
    textPart = `&text=${encodeURIComponent(text)}`;
  }

  const urlPart = `url=${encodeURIComponent(link)}`;

  window.open(
    `https://twitter.com/share?${urlPart}${textPart}${hashtagsPart}`,
    'twitter-share-dialog',
    `width=575,height=300,top=${top},left=${left}`,
  );
};
