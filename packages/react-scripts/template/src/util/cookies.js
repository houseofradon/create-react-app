// @flow
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const PRIVACY_BANNER_COOKIE_NAME = 'privacy-banner-closed';

export const isPrivacyBannerClosed = () => cookies.get(PRIVACY_BANNER_COOKIE_NAME) === 'true';

export const onPrivacyBannerClosed = () => {
  cookies.set(PRIVACY_BANNER_COOKIE_NAME, true, { maxAge: 63072000 }); // Disabled for two years.
};
