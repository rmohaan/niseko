/* global describe, it */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import Home from '../../src/client/views/homePageWrapper';

describe('<HomePageWrapper /> Default Rendering', () => {
  const wrapper = mount(<Provider><Home /></Provider>);
  
  it('Base Component is rendered', () => {
    expect(wrapper.find('Home').length).toEqual(1);
  });

  it('Header component should be rendered', () => {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('SearchBar component should be rendered', () => {
    expect(wrapper.find('SearchBar').length).toEqual(1);
  });

  it('HomePage component should be rendered', () => {
    expect(wrapper.find('HomePage').length).toEqual(1);
  });

  it('Footer component should be rendered', () => {
    expect(wrapper.find('Footer').length).toEqual(1);
  });
});
