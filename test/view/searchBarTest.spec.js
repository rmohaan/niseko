/* global describe, it  */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import SearchBar from '../../src/client/views/searchBar';

describe('<SearchBar /> Default Rendering', () => {

  const wrapper = mount(<Provider><SearchBar /></Provider>);

  it('Component is rendered', () => {
    expect(wrapper.find('SearchBar').length).toEqual(1);
  });

  it('Component should have 1 input box and type should be text', () => {
    expect(wrapper.find('input').length).toEqual(1);
    expect(wrapper.find('input').prop('type')).toEqual('text');
  });

  it('Placeholder should be as defined[Search rooms...]', () => {
    expect(wrapper.find('input').prop('placeholder')).toBe('Search rooms...');
  });

  describe('#<SearchBar /> behavioral flow', () => {

    it('Input box should contain clear icon', () => {
      wrapper.find('input').simulate('change', {
        target: {
          value: 'relaxation'
        }
      });
      expect(wrapper.find('.input-group-addon').length).toBe(1);
      expect(wrapper.find('.fa .fa-times').length).toBe(1);
    });

    it('Input box should not contain clear icon', () => {
      wrapper.find('.input-group-addon').simulate('click');
      expect(wrapper.find('.input-group-addon').length).toBe(0);
      expect(wrapper.find('.fa .fa-times').length).toBe(0);
    });
  });
});