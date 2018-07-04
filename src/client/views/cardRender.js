/*global document alert*/

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as CONSTANTS from './constants';

class CardRender extends React.Component {
  static propTypes = {
    roomList: PropTypes.array
  };

  constructor ()  {
    super();
    String.prototype.toProperCase = function () {
      return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    };
    this.generateProductLayout = (list) => this._generateProductLayout(list);
    this.generateNoDataFound = () =>  this._generateNoDataFound();
  }

  _generateProductLayout (list) {
    return list.map((item, index) => {

      return (
        <div className="col-md-12 card" key={index}>
          <div className="card-content">
            <img className="card-image" src={item.images.length > 0 ? item.images[0] : CONSTANTS.NO_IMAGE_URL} height="225px" width="225px" />
            <div className="card-info"> 
              <div className="card-name">
                {item.name.toProperCase()}
              </div>
              <div className="card-desc">
                {item.description}
              </div>
              <div className="card-room-details">
                Room Details
                <div className="card-room-spec">
                  <i className="fa fa-bed icon-setter"></i> 
                  <span> Bedroom: {item.bathrooms} </span>
                </div>
                <div className="card-room-spec">
                  <i className="fa fa-user icon-setter"></i> 
                  <span>Occupancy: {item.standardPax}</span>
                </div>
                <div className="card-room-spec">
                  <i className="fa fa-users icon-setter"></i> 
                  <span>Max. Occupancy: {item.maximumPax}</span>
                </div>
                <div className="card-room-spec">
                  <i className="fa fa-square icon-setter"></i> 
                  <span>Floor Sizing: {item.floorArea}sqm</span>
                </div>
              </div>
              <div className="card-ready-occupy">
                  <span>Ready To Occupy: {item.status === CONSTANTS.HEALTH_STATUS ? "Yes" : "No" }</span>
                </div>
            </div>
            <div className="card-amenities">
              <div className="card-amenities-head"> 
                Amenities
              </div>
              <ul className="card-amenities-list">
                <li>
                  <i className={item.amenities.aircon ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Air Conditioned</span>
                </li>
                <li>
                  <i className={item.amenities.hdtv ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Free satellite TV with English language channels </span>
                </li>
                <li>
                  <i className={item.amenities.btspeakers ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>5.1 Bluetooth surround system</span>
                </li>
                <li>
                  <i className={item.amenities.cardkey ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Handy portable card key</span>
                </li>
                <li>
                  <i className={item.amenities.chromecast ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Application Streaming</span>
                </li>
                <li>
                  <i className={item.amenities.jacuzzi ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Whirlpool bathtubs</span>
                </li>
                <li>
                  <i className={item.amenities.fireplace ? "fa fa-check card-available" : "fa fa-times card-unavailable"}></i> 
                  <span>Dedicated Fireplace</span>
                </li>
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

export default CardRender;
