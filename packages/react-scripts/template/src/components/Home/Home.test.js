/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

it('Home renders without crashing', () => {
  const component = shallow(<Home />);
  expect(component.exists()).toEqual(true);
});
