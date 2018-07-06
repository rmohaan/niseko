/* global describe, it  */

'use strict';

import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Provider from '../utils/provider';
import CardRender from '../../src/client/views/cardRender';
import data from '../middleware';
import { NO_IMAGE_URL } from '../../src/client/views/constants';

describe('<CardRender /> Default Rendering', () => {
  const wrapper = mount(<Provider><CardRender /></Provider>);
  
  it('Component is rendered', () => {
    expect(wrapper.find('CardRender').length).toEqual(1);
  });

  it('No data message is shown', () => {
    expect(wrapper.find('.card-content-no-data').length).toEqual(1);
  });

  it('No data icon is shown', () => {
    expect(wrapper.find('.fa .fa-warning .card-unavailable').length).toEqual(1);
  });

  it('No data message is valid', () => {
    expect(wrapper.find('span').text()).toBe(' No results found ');
  });

  describe('#CardRender properties validation', () => {
    const rooms = data.data.slice(0, 3), 
      wrapper = mount(<Provider><CardRender roomList={rooms} filterInput="18"/></Provider>),
      component = wrapper.find('CardRender');
      
    it('##Results should be 3 elements', () => {
      expect(component.props().roomList.length).toBe(3);
    });

    it('##Images should be present in the card', () => {
      expect(component.find('img').length).toBe(3);
    });

    it('##Image URL matches the provided URL', () => {
      expect(component.find('.card-image').at(0).prop('src')).toBe('https://s3-ap-northeast-1.amazonaws.com/htm-storefront/kiniseko/2140000000/thumbnail_1.jpg');
    });

    it('##Images without URL should use the defined no-image-url', () => {
      expect(component.find('.card-image').at(2).prop('src')).toBe(NO_IMAGE_URL);
    });
  
    it('##RoomName should be modified to ProperCase', () => {
      expect(component.find('.card-name').at(1).text()).toBe('Chalet Murasaki A');
    });

    it('##Search text should be highlighted', () => {
      expect(component.find('.search-highlight').text()).toBe('18');
    });

    it('##Amenities items list should be 7', () => {
      expect(component.find('.card-amenities-list').at(0).children().length).toBe(7);
    });

    it('##AirCon amenity should have available check icon', () => {
      expect(component.find('.card-amenities-list').at(0).children().at(0).children().find('span').text()).toBe('Air Conditioned');
      expect(component.find('.card-amenities-list').at(0).children().at(0).children().find('i').hasClass('card-available')).toBe(true);
    });

    it('##HDTV amenity should have not available icon', () => {
      expect(component.find('.card-amenities-list').at(0).children().at(1).children().find('span').text()).toBe('Free satellite TV with English language channels');
      expect(component.find('.card-amenities-list').at(0).children().at(1).children().find('i').hasClass('card-unavailable')).toBe(true);
    });
  });
});

