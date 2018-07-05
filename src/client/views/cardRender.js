/*global document alert*/

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Highlight from 'react-highlighter';
import * as CONSTANTS from './constants';

class CardRender extends React.Component {
  constructor ()  {
    super();
    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, (txt) => { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
    };
    this.generateProductLayout = (list) => this._generateProductLayout(list);
    this.generateNoDataFound = () =>  this._generateNoDataFound();
    this.generateRoomSpec = (className, displayName, displayValue) => this._generateRoomSpec(className, displayName, displayValue);
    this.getHighlightedText = (text) => this._getHighlightedText(text);
    this.generateAmenitiesSpec = (displayName, displayValue) => this._generateAmenitiesSpec(displayName, displayValue);
  }

  _getHighlightedText (text) {
    return (
      <Highlight search={this.props.filterInput} matchClass="search-highlight"> 
        {text}
      </Highlight>
    );
  }

  _generateRoomSpec (className, displayName, displayValue) {
    let style = classNames(className, 'icon-setter'),
      specText = `${displayName}: ${displayValue}`;
    return (
      <div className="card-room-spec">
        <i className={style}></i> 
        <span> 
          {this.getHighlightedText(specText)}
        </span>
      </div>
    );
  }

  _generateAmenitiesSpec(displayName, displayValue) {
    return (
      <li>
        <i className={displayValue ? 'fa fa-check card-available' : 'fa fa-times card-unavailable'}></i> 
        <span>
          {displayName}
        </span>
      </li>
    );
  }

  _generateProductLayout (list) {
    return list.map((item, index) => {

      return (
        <div className="col-md-12 card" key={index}>
          <div className="card-content">
            <img className="card-image" src={item.images.length > 0 ? item.images[0] : CONSTANTS.NO_IMAGE_URL} height="225px" width="225px" />
            <div className="card-info"> 
              <div className="card-name">
                {this.getHighlightedText(item.name.toProperCase())}
              </div>
              <div className="card-desc">
                {this.getHighlightedText(item.description)}
              </div>
              <div className="card-room-details">
                Room Details
                {this.generateRoomSpec('fa fa-bed', 'Beds', item.bathrooms)}
                {this.generateRoomSpec('fa fa-user', 'Occupancy', item.standardPax)}
                {this.generateRoomSpec('fa fa-users', 'Max. Occupancy', item.maximumPax)}
                {this.generateRoomSpec('fa fa-square', 'Floor Sizing', item.floorArea)}
              </div>
            </div>
            <div className="card-amenities">
              <div className="card-amenities-head"> 
                Amenities
              </div>
              <ul className="card-amenities-list">
                {this.generateAmenitiesSpec('Air Conditioned', item.amenities.aircon)}
                {this.generateAmenitiesSpec('Free satellite TV with English language channels', item.amenities.hdtv)}
                {this.generateAmenitiesSpec('5.1 Bluetooth surround system', item.amenities.btspeakers)}
                {this.generateAmenitiesSpec('Handy portable card key', item.amenities.cardkey)}
                {this.generateAmenitiesSpec('Application Streaming', item.amenities.chromecast)}
                {this.generateAmenitiesSpec('Whirlpool bathtubs', item.amenities.jacuzzi)}
                {this.generateAmenitiesSpec('Dedicated Fireplace', item.amenities.fireplace)}
              </ul>
            </div>
          </div>
        </div>
      );
    });
  }

  _generateNoDataFound () {
    return (
      <div className="col-md-12 card">
        <div className="card-content-no-data">
          <i className="fa fa-warning card-unavailable"></i>
          <span> No results found </span>
        </div>
      </div>
    );
  }

  render () {
    const { roomList } = this.props;
    let layout;
    if (roomList && roomList.length > 0) {
      layout = this.generateProductLayout(roomList);
    }
    else {
      layout = this.generateNoDataFound();
    }
    return (
      <div className="cardRender">
        {layout}
      </div>
    );
  }
}

CardRender.propTypes = {
  roomList: PropTypes.array
};

export default connect()(CardRender);
