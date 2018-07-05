/* global describe, it  */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import SearchBar from '../../src/client/views/searchBar';

describe('<SearchBar /> Default Rendering', function () {

  const state = {text: ''}, 
    wrapper = mount(<Provider><SearchBar {...state}/></Provider>);

  it('Component is rendered', function () {
    expect(wrapper.find('SearchBar').length).toEqual(1);
  });

  it('Component should have 1 input', function () {
    expect(wrapper.find('input').length).toEqual(1);
  });

  it('Placeholder should be as defined', function () {
    expect(wrapper.find('input').prop('placeholder')).toBe('Search rooms...');
  });
});