/* global describe, it */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import Home from '../../src/client/views/homePageWrapper';

describe('Checking Rendering', function () {
  const wrapper = mount(<Provider><Home /></Provider>);
  
  it('Base Component is rendered', function () {
    expect(wrapper.find('Home').length).toEqual(1);
  });

  it('Header component should be rendered', function () {
    expect(wrapper.find('Header').length).toEqual(1);
  });

  it('SearchBar component should be rendered', function () {
    expect(wrapper.find('SearchBar').length).toEqual(1);
  });

  it('HomePage component should be rendered', function () {
    expect(wrapper.find('HomePage').length).toEqual(1);
  });

  it('Footer component should be rendered', function () {
    expect(wrapper.find('Footer').length).toEqual(1);
  });

  
});
