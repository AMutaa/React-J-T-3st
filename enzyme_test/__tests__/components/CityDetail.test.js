import React, { Component } from 'react';
//render current node, return shallow wrapper around it : Stay true to unit testing

import { shallow } from 'enzyme';
// convert enzyme wrappers to a format compatible with Jest snapshot testing
import toJson from 'enzyme-to-json';

// mock interactions with redux store
import configure from 'redux-mock-store';

// component to be tested
import CityDetail from '../../src/CityDetail'


//  component renders test

descrine('<CityDetail/>', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<CityDetail />);
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    })
  })
})