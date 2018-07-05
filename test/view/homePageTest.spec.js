/* global describe, it, before */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import HomePage from '../../src/client/views/homePage';
import SearchBar from '../../src/client/views/searchBar';
import * as actionEvents from '../../src/client/actions/events';
import data from '../middleware';

describe('<HomePage /> Default Rendering', function () {
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
});

describe('<HomePage /> Search Results', function () {
  const wrapper = mount(<Provider><HomePage /></Provider>),
    searchBar = mount(<Provider><SearchBar /></Provider>),
    dispatch = searchBar.find('SearchBar').first().prop('dispatch');

  describe('#Search Behavioral Flow - Has Elements', () => {
    before(() => {
      dispatch({
        type: actionEvents.SET_ROOMS_DATA,
        payload: data
      });
    });

    it('CardRender component should have roomList prop and it should have 3[default] elements in the array', function () {
      expect(wrapper.find('CardRender').props().roomList.length).toBe(3);
    });
    
    it('##Results should have 2 elements', () => {
      dispatch({
        type: actionEvents.SET_FILTER_DATA,
        payload: 'relaxation'
      });
      searchBar.find('input').simulate('change', {
        target: {
          value: 'relaxation'
        }
      });
      expect(wrapper.find('CardRender').props().roomList.length).toBe(2);
    });
  });

  describe('#Search Behavioral Flow - Has No Elements', () => {
    before(() => {
      dispatch({
        type: actionEvents.SET_ROOMS_DATA,
        payload: data
      });
      dispatch({
        type: actionEvents.SET_FILTER_DATA,
        payload: 'saki 18 test'
      });
      searchBar.find('input').simulate('change', {
        target: {
          value: 'saki 18 test'
        }
      });
    });
    
    it('##Results should have 0 elements', function () {
      expect(wrapper.find('CardRender').props().roomList.length).toBe(0);
    });
  });
});
