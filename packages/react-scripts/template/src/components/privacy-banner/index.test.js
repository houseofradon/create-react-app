/* global describe, it, expect, jest */

import React from 'react';
import { shallow } from 'enzyme';
import * as Analytics from 'react-with-analytics';

import { isPrivacyBannerClosed } from '../../util';
import PrivacyBanner from './index';

describe('PrivacyBanner renders correctly', () => {
  const props = {
  };

  const initialState = {
    hidden: false,
  };

  const component = shallow(<PrivacyBanner {...props} />);

  it('PrivacyBanner renders without crashing', () => {
    expect(component.exists()).toEqual(true);
  });

  it('PrivacyBanner has correct structure', () => {
    expect(component.find('div.max-width-container.grid-container').length).toEqual(1);
    expect(component.find('div.col-full.inner-container').length).toEqual(1);
    expect(component.find('p.privacy-text').length).toEqual(1);
    expect(component.find('img.accept-btn').length).toEqual(1);
  });

  it('PrivacyBanner has correct initial state', () => {
    expect(component.state()).toEqual(initialState);
    expect(isPrivacyBannerClosed()).toEqual(false);
  });

  it('CloseButton updates state on clic k', () => {
    const mockTrackEvent = jest.fn();
    Analytics.trackEvent = mockTrackEvent;

    component.instance().closeButton();
    expect(isPrivacyBannerClosed()).toEqual(true);
    component.update();
    expect(component.state()).toEqual({ hidden: true });
    expect(mockTrackEvent.mock.calls.length).toEqual(1);
    expect(mockTrackEvent.mock.calls[0]).toEqual(['Privacy', 'Privacy Banner Closed', '']);
  });
});
