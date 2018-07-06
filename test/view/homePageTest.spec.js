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

describe('<HomePage /> Default Rendering', () => {
  const wrapper = mount(<Provider><HomePage /></Provider>);
    
  it('Base Component is rendered', () => {
    expect(wrapper.find('HomePage').length).toEqual(1);
  });

  it('CardRender component should be rendered', () => {
    expect(wrapper.find('CardRender').length).toEqual(1);
  });

  it('CardRender component should have roomList prop and it should be an array', () => {
    expect(Array.isArray(wrapper.find('CardRender').props().roomList)).toBe(true);
  });
});

describe('<HomePage /> Search Results', () => {
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
      searchBar.find('input').simulate('change', {
        target: {
          value: 'saki 18 test'
        }
      });
    });
    
    it('##Results should have 0 elements', () => {
      expect(wrapper.find('CardRender').props().roomList.length).toBe(0);
    });
  });
});
