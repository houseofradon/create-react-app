/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Privacy from './index';

it('Privacy renders without crashing', () => {
  const match = {
    params: {},
  };

  const component = shallow(<Privacy match={match} />);
  expect(component.exists()).toEqual(true);
});
