/* global describe, it */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import HomePage from '../../src/client/views/homePage';

describe('<HomePage />', function () {
  const wrapper = mount(<Provider><HomePage /></Provider>);
    
  it('Base Component is rendered', function () {
    expect(wrapper.find('HomePage').length).toEqual(1);
  });

  it('CardRender component should be rendered', function () {
    expect(wrapper.find('CardRender').length).toEqual(1);
  });

  it('CardRender component should have roomList prop and it should be an array', function () {
    expect(Array.isArray(wrapper.find('CardRender').props().roomList)).toBe(true);
  });

  it('CardRender component should have roomList prop and it should be an array', function () {
    expect(wrapper.find('CardRender').props().roomList.length).toBe(5);
  });
  
  
});
